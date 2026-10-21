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

  /* URL dasar proyek Supabase.

     PENTING: fungsi ini menormalkan input supaya aman baik diisi
     sebagai  "https://xxx.supabase.co"  maupun
                 "https://xxx.supabase.co/rest/v1"  (dengan atau
                 tanpa garis miring di akhir).

     Hasilnya SELALU akar proyek TANPA "/rest/v1", karena semua
     pemanggilan di bawah sudah menambah sendiri segmen jalannya:
       rest("/laporan")  -> .../rest/v1/laporan
       auth("/token")    -> .../auth/v1/token

     (Kalau "/rest/v1" ikut terpasang dua kali, alamatnya salah dan
     server membalas 404 — itu penyebab laporan gagal terkirim.) */
  function base() {
    var u = String(cfg().supabaseUrl || "").trim();
    u = u.replace(/\/+$/, "");          /* buang garis miring di akhir */
    u = u.replace(/\/rest\/v1$/i, "");   /* buang "/rest/v1" bila ada  */
    return u;
  }

  /* URL endpoint tabel (REST) */
  function rest(path) {
    return base() + "/rest/v1" + path;
  }

  /* URL endpoint autentikasi */
  function auth(path) {
    return base() + "/auth/v1" + path;
  }

  function kunci() {
    return String(cfg().supabaseAnonKey || "");
  }

  /* Backend sudah terisi? */
  function siap() {
    return !!(base() && kunci());
  }

  /* Header permintaan.
     "prefer" dipakai untuk "return=minimal" saat INSERT, supaya
     PostgREST tidak perlu hak SELECT untuk mengembalikan baris —
     itu yang membuat tabel "laporan" tetap write-only bagi peran anon. */
  function headers(token, prefer) {
    var h = {
      "apikey": kunci(),
      "Content-Type": "application/json"
    };
    h["Authorization"] = "Bearer " + (token || kunci());
    if (prefer) h["Prefer"] = prefer;
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

  /* Baca body error dari PostgREST: { code, message, hint, details } */
  function bacaBad(res) {
    return res.text().then(function (t) {
      var d = null;
      try { d = JSON.parse(t); } catch (e) { d = null; }
      var pesan = "";
      if (d) {
        pesan = d.message || d.error_description || "";
        if (!pesan && typeof d.error === "string") pesan = d.error;
      }
      return {
        kode: (d && d.code) || "",
        pesan: pesan,
        hint: (d && d.hint) || ""
      };
    });
  }

  function pesanGagal(res, fallback) {
    return bacaBad(res).then(function (b) {
      var pesan = b.pesan || fallback || "Permintaan ditolak server.";
      if (b.hint) pesan += " (" + b.hint + ")";
      return new Error(pesan);
    });
  }

  /* PostgreSQL 42501 = insufficient_privilege.
     PostgREST membalas HTTP 401/403 untuk kode itu, sedangkan kode
     aslinya ada di body JSON ("code": "42501") — jadi keduanya
     perlu dicek. Penyebabnya konfigurasi database (GRANT/RLS),
     bukan kesalahan siswa. */
  function masalahIzin(res, bad) {
    var pesan = ((bad && bad.pesan) || "").toLowerCase();

    /* Key ditolak gateway Supabase (biasanya setelah di-regenerate
       di dashboard, atau key salah disalin). */
    if (pesan.indexOf("invalid api key") >= 0 || pesan.indexOf("jwt") >= 0) {
      return "API key tidak valid / sudah diganti di Supabase";
    }

    /* 42501 = RLS bekerja persis seperti desain (anon tidak boleh membaca). */
    if (bad && bad.kode === "42501") return "server menolak akses (kode 42501)";

    if (res.status === 401 || res.status === 403) return "server menolak akses (" + res.status + ")";
    if (res.status >= 500) return "server bermasalah (" + res.status + ")";
    return null;
  }

  var API = {

    siap: siap,

    /* ---------- Pemeriksaan koneksi ----------

       distinguishing "API key tidak valid" dari "RLS menolak" —
       keduanya sama-sama 401, tapi artinya beda jauh:
         - "Invalid API key"      -> key salah / sudah di-regenerate
         - "permission denied"    -> key BENAR, RLS bekerja normal

       Tidak pernah reject, selalu resolve. */
    cekKoneksi: function () {
      if (!siap()) {
        return Promise.resolve({ ok: false, alasan: "backend belum dikonfigurasi" });
      }
      return denganTimeout(rest("/laporan?select=id&limit=1"), {
        method: "GET",
        headers: headers(null)
      }, 10000).then(function (res) {
        return bacaBad(res).then(function (b) {
          var pesan = (b.pesan || "").toLowerCase();
          if (pesan.indexOf("invalid api key") >= 0 || pesan.indexOf("jwt") >= 0) {
            return {
              ok: false,
              alasan: "API key tidak valid. Salin ulang \"anon public\" key di Supabase > Settings > API lalu simpan ke config.js."
            };
          }
          if (b.kode === "42501") {
            /* Tepat seperti desain: peran anon tidak boleh membaca laporan. */
            return { ok: true, alasan: "Terhubung. API key valid dan aturan RLS aktif." };
          }
          if (res.status === 401 || res.status === 403) {
            return { ok: false, alasan: "Server menolak akses (" + res.status + ")." };
          }
          if (res.status >= 500) {
            return { ok: false, alasan: "Server bermasalah (" + res.status + "). Proyek Supabase mungkin sedang dijeda." };
          }
          return { ok: true, alasan: "Terhubung ke server." };
        });
      }, function () {
        return { ok: false, alasan: "Tidak ada koneksi ke server." };
      });
    },

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
      return denganTimeout(rest("/laporan"), {
        method: "POST",
        headers: headers(null, "return=minimal"),
        body: JSON.stringify(body)
      }, 10000).then(function (res) {
        if (res.ok) return { ok: true };
        return bacaBad(res).then(function (b) {
          var izin = masalahIzin(res, b);
          /* Detail teknis hanya ke console — siswa tidak perlu lihat kode error */
          if (window.console && console.warn) {
            console.warn("[STOP BULLYING] Gagal kirim laporan:",
              res.status, izin || b.pesan || "(tanpa pesan)");
          }
          return { ok: false, alasan: izin || b.pesan || ("Server menolak laporan (" + res.status + ").") };
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
      return denganTimeout(auth("/token?grant_type=password"), {
        method: "POST",
        headers: headers(null),
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
      return denganTimeout(auth("/token?grant_type=refresh_token"), {
        method: "POST",
        headers: headers(null),
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
      return denganTimeout(rest("/laporan" + q), {
        method: "GET",
        headers: headers(token)
      }, 15000).then(function (res) {
        if (res.status === 401) throw new Error("Sesi habis. Silakan login ulang.");
        if (!res.ok) return pesanGagal(res, "Gagal memuat daftar laporan.").then(function (e) { throw e; });
        return res.json();
      });
    },

    ubahStatus: function (token, id, status) {
      return denganTimeout(rest("/laporan?id=eq." + encodeURIComponent(id)), {
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
      return denganTimeout(rest("/laporan?id=eq." + encodeURIComponent(id)), {
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
