/* ============================================================
   STOP BULLYING — Lapisan API (Supabase REST)
   ------------------------------------------------------------
   Tanpa library & tanpa build step: semua panggilan memakai
   fetch + REST API Supabase.

   Peran:
   - "anon"        : hanya boleh INSERT laporan (dikunci RLS)
   - "authenticated": guru yang sudah login dashboard

   Dipakai oleh: app.js (kirim laporan) dan dashboard.js (panel guru)
   ============================================================ */
(function () {
  "use strict";

  function cfg() { return window.KONFIG || {}; }

  function base() {
    return String(cfg().supabaseUrl || "").replace(/\/+$/, "");
  }

  function kunci() {
    return String(cfg().supabaseAnonKey || "");
  }

  /* Backend sudah terisi? */
  function siap() {
    return !!(base() && kunci());
  }

  function headers(token) {
    var h = {
      "apikey": kunci(),
      "Content-Type": "application/json"
    };
    h["Authorization"] = "Bearer " + (token || kunci());
    return h;
  }

  /* fetch dengan batas waktu supaya form tidak menggantung saat offline */
  function denganTimeout(url, opts, ms) {
    var ctrl = (typeof AbortController !== "undefined") ? new AbortController() : null;
    var timer = null;
    if (ctrl) {
      opts = opts || {};
      opts.signal = ctrl.signal;
      timer = setTimeout(function () { ctrl.abort(); }, ms || 8000);
    }
    return fetch(url, opts).then(function (res) {
      if (timer) clearTimeout(timer);
      return res;
    }, function (err) {
      if (timer) clearTimeout(timer);
      throw err;
    });
  }

  function pesanGagal(res, fallback) {
    return res.text().then(function (t) {
      var pesan = fallback || "Permintaan ditolak server.";
      try {
        var d = JSON.parse(t);
        if (d && (d.message || d.error_description || d.error)) {
          pesan = d.message || d.error_description || (typeof d.error === "string" ? d.error : pesan);
        }
        if (d && d.hint) pesan += " (" + d.hint + ")";
      } catch (e) { /* body bukan JSON, pakai fallback */ }
      return new Error(pesan);
    });
  }

  /* 42501 = role tidak punya GRANT, atau policy RLS menolak.
     Penyebabnya konfigurasi database, bukan kesalahan siswa. */
  function masalahIzin(res, alasan) {
    if (res.status !== 401 && res.status !== 403 && res.status !== 42501) return null;
    return "server menolak akses (" + res.status + ")";
  }

  var API = {

    siap: siap,

    /* ---------- Laporan ---------- */

    /* Kirim laporan baru. Selalu resolve (tidak reject) agar
       pemanggil bisa jatuh ke mode cadangan. */
    kirimLaporan: function (item) {
      if (!siap()) {
        return Promise.resolve({ ok: false, alasan: "backend belum dikonfigurasi" });
      }
      var body = {
        anonim: !!item.anonim,
        nama: item.anonim ? null : (item.nama || "Tanpa Nama"),
        kelas: item.kelas || null,
        bentuk: item.bentuk || null,
        isi: item.isi,
        status: "baru"
      };
      return denganTimeout(base() + "/rest/v1/laporan", {
        method: "POST",
        headers: headers(null),
        body: JSON.stringify(body)
      }, 10000).then(function (res) {
        if (res.ok) return { ok: true };
        var izin = masalahIzin(res);
        return pesanGagal(res, "Server menolak laporan (" + res.status + ").").then(function (e) {
          /* Detail teknis hanya ke console — siswa tidak perlu lihat kode error */
          if (window.console && console.warn) console.warn("[STOP BULLYING] Gagal kirim laporan:", e.message);
          return { ok: false, alasan: izin || e.message };
        });
      }, function () {
        return { ok: false, alasan: "tidak ada koneksi ke server" };
      });
    },

    /* ---------- Autentikasi guru ---------- */

    login: function (email, password) {
      if (!siap()) {
        return Promise.reject(new Error("Backend belum dikonfigurasi. Isi config.js terlebih dahulu."));
      }
      return denganTimeout(base() + "/auth/v1/token?grant_type=password", {
        method: "POST",
        headers: { "apikey": kunci(), "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, password: password })
      }, 12000).then(function (res) {
        return res.json().then(function (d) {
          if (!res.ok) {
            var msg = "Email atau kata sandi salah.";
            if (d && (d.error_description || d.msg)) msg = d.error_description || d.msg;
            throw new Error(msg);
          }
          return d;
        });
      });
    },

    refresh: function (refreshToken) {
      if (!siap() || !refreshToken) return Promise.reject(new Error("Sesi tidak bisa diperpanjang."));
      return denganTimeout(base() + "/auth/v1/token?grant_type=refresh_token", {
        method: "POST",
        headers: { "apikey": kunci(), "Content-Type": "application/json" },
        body: JSON.stringify({ refresh_token: refreshToken })
      }, 12000).then(function (res) {
        return res.json().then(function (d) {
          if (!res.ok) throw new Error("Sesi habis, silakan login ulang.");
          return d;
        });
      });
    },

    /* ---------- Data dashboard ---------- */

    daftarLaporan: function (token, opsi) {
      if (!siap()) return Promise.reject(new Error("Backend belum dikonfigurasi."));
      opsi = opsi || {};
      var q = "?select=*&order=dibuat_at.desc&limit=" + (opsi.limit || 200);
      if (opsi.status && opsi.status !== "all") q += "&status=eq." + encodeURIComponent(opsi.status);
      if (opsi.bentuk && opsi.bentuk !== "all") q += "&bentuk=eq." + encodeURIComponent(opsi.bentuk);
      if (opsi.dari) q += "&dibuat_at=gte." + encodeURIComponent(opsi.dari + "T00:00:00.000Z");
      if (opsi.sampai) q += "&dibuat_at=lte." + encodeURIComponent(opsi.sampai + "T23:59:59.999Z");
      if (opsi.cari) q += "&isi=ilike.*" + encodeURIComponent(opsi.cari) + "*";
      return denganTimeout(base() + "/rest/v1/laporan" + q, {
        method: "GET",
        headers: headers(token)
      }, 15000).then(function (res) {
        if (res.status === 401) throw new Error("Sesi habis. Silakan login ulang.");
        if (!res.ok) return pesanGagal(res, "Gagal memuat daftar laporan.").then(function (e) { throw e; });
        return res.json();
      });
    },

    ubahStatus: function (token, id, status) {
      return denganTimeout(base() + "/rest/v1/laporan?id=eq." + encodeURIComponent(id), {
        method: "PATCH",
        headers: headers(token),
        body: JSON.stringify({ status: status })
      }, 10000).then(function (res) {
        if (res.status === 401) throw new Error("Sesi habis. Silakan login ulang.");
        if (!res.ok) return pesanGagal(res, "Gagal memperbarui status.").then(function (e) { throw e; });
        return true;
      });
    },

    hapusLaporan: function (token, id) {
      return denganTimeout(base() + "/rest/v1/laporan?id=eq." + encodeURIComponent(id), {
        method: "DELETE",
        headers: headers(token)
      }, 10000).then(function (res) {
        if (res.status === 401) throw new Error("Sesi habis. Silakan login ulang.");
        if (!res.ok) return pesanGagal(res, "Gagal menghapus laporan.").then(function (e) { throw e; });
        return true;
      });
    }
  };

  window.API = API;
})();
