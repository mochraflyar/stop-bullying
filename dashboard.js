/* ============================================================
   STOP BULLYING — Dashboard Guru
   ------------------------------------------------------------
   - Login guru (Supabase Auth, email + kata sandi)
   - Daftar laporan + filter + pencarian
   - Ubah status, hapus, export CSV
   ============================================================ */
(function () {
  "use strict";

  var AUTH_KEY = "stopbullying.auth.v1";
  var SESI = null;
  var DAFTAR = [];

  var LABEL_STATUS = {
    "baru": "Baru",
    "diproses": "Diproses",
    "selesai": "Selesai",
    "tidak-ditangani": "Tidak Ditangani"
  };

  var FILTER = { status: "all", bentuk: "all", dari: "", sampai: "", cari: "" };

  /* ---------- Elemen ---------- */
  var el = function (id) { return document.getElementById(id); };
  var loginSec = el("loginSec");
  var panelSec = el("panelSec");
  var loginForm = el("loginForm");
  var loginMsg = el("loginMsg");
  var btnLogin = el("btnLogin");
  var dashList = el("dashList");
  var dashEmpty = el("dashEmpty");
  var dashStats = el("dashStats");
  var dashJumlah = el("dashJumlah");
  var dashUser = el("dashUser");
  var dashSekolah = el("dashSekolah");
  var btnLogout = el("btnLogout");
  var btnRefresh = el("btnRefresh");
  var btnCsv = el("btnCsv");
  var btnResetFilter = el("btnResetFilter");

  /* ---------- Util ---------- */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  }

  function pad(n) { return (n < 10 ? "0" : "") + n; }

  function formatTanggal(iso) {
    var d = new Date(iso);
    if (isNaN(d.getTime())) return "-";
    return d.getDate() + "/" + pad(d.getMonth() + 1) + "/" + d.getFullYear() +
      " " + pad(d.getHours()) + ":" + pad(d.getMinutes());
  }

  function toast(pesan, tipe) {
    var t = el("dashToast");
    if (!t) {
      t = document.createElement("div");
      t.id = "dashToast";
      t.className = "toast";
      t.setAttribute("role", "status");
      t.setAttribute("aria-live", "polite");
      document.body.appendChild(t);
    }
    t.textContent = pesan;
    t.classList.add("show");
    t.classList.toggle("err", tipe === "err");
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { t.classList.remove("show"); }, 3000);
  }

  function kuki(nama, nilai, hari) {
    var d = new Date();
    d.setTime(d.getTime() + hari * 24 * 3600 * 1000);
    document.cookie = nama + "=" + encodeURIComponent(nilai) + ";path=/;max-age=" + hari * 24 * 3600 + ";SameSite=Lax";
  }

  /* ---------- Sesi ---------- */
  function simpanSesi(d) {
    try {
      SESI = {
        access_token: d.access_token,
        refresh_token: d.refresh_token,
        expires_at: Date.now() + (d.expires_in || 3600) * 1000,
        email: (d.user && d.user.email) || ""
      };
      localStorage.setItem(AUTH_KEY, JSON.stringify(SESI));
    } catch (e) { /* penyimpanan tidak tersedia */ }
  }

  function bacaSesi() {
    try {
      var raw = localStorage.getItem(AUTH_KEY);
      if (!raw) return null;
      var s = JSON.parse(raw);
      return (s && s.access_token) ? s : null;
    } catch (e) { return null; }
  }

  function hapusSesi() {
    SESI = null;
    try { localStorage.removeItem(AUTH_KEY); } catch (e) {}
  }

  /* Ambil token valid (perpanjang bila kedaluwarsa) */
  function tokenValid() {
    if (!SESI) return Promise.reject(new Error("Belum login."));
    if (Date.now() < SESI.expires_at - 30000) return Promise.resolve(SESI.access_token);
    if (!SESI.refresh_token) { hapusSesi(); return Promise.reject(new Error("Sesi habis. Silakan login ulang.")); }
    return window.API.refresh(SESI.refresh_token).then(function (d) {
      simpanSesi(d);
      return SESI.access_token;
    }, function (err) {
      hapusSesi();
      throw new Error((err && err.message) || "Sesi habis. Silakan login ulang.");
    });
  }

  /* ---------- Tampilan ---------- */
  function tampilLogin(pesan) {
    loginSec.hidden = false;
    panelSec.hidden = true;
    if (pesan) { loginMsg.textContent = pesan; loginMsg.classList.add("err"); }
  }

  function tampilPanel() {
    loginSec.hidden = true;
    panelSec.hidden = false;
    var c = window.KONFIG || {};
    dashSekolah.textContent = (c.penerbit || "STOP BULLYING") +
      (c.namaKelompok ? " \u2014 " + c.namaKelompok : "");
    dashUser.textContent = "Masuk sebagai " + (SESI.email || "-");
  }

  /* ---------- Login ---------- */
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    loginMsg.textContent = "";
    loginMsg.className = "form-msg";
    var email = el("logEmail").value.trim();
    var pass = el("logPass").value;
    if (!email || !pass) {
      loginMsg.textContent = "Isi email dan kata sandi dulu.";
      loginMsg.classList.add("err");
      return;
    }
    btnLogin.disabled = true;
    btnLogin.textContent = "Memproses…";
    window.API.login(email, pass).then(function (d) {
      simpanSesi(d);
      tampilPanel();
      muat();
      toast("Selamat datang, " + (SESI.email || "guru") + ".");
    }, function (err) {
      loginMsg.textContent = (err && err.message) || "Login gagal.";
      loginMsg.classList.add("err");
    }).then(function () {
      btnLogin.disabled = false;
      btnLogin.textContent = "Masuk";
    });
  });

  btnLogout.addEventListener("click", function () {
    if (!window.confirm("Keluar dari dashboard?")) return;
    hapusSesi();
    tampilLogin();
    toast("Anda telah keluar.");
  });

  /* ---------- Muat daftar ---------- */
  function muat() {
    dashList.innerHTML = '<p class="dash-muat">Memuat laporan…</p>';
    dashEmpty.hidden = true;
    tokenValid().then(function (token) {
      return window.API.daftarLaporan(token, FILTER);
    }).then(function (data) {
      DAFTAR = data || [];
      render();
    }, function (err) {
      dashList.innerHTML = "";
      var pesan = (err && err.message) || "Gagal memuat laporan.";
      if (/login ulang/i.test(pesan)) { tampilLogin(pesan); return; }
      dashList.innerHTML = '<p class="dash-muat err">' + esc(pesan) + '</p>';
    });
  }

  /* ---------- Render ---------- */
  function render() {
    renderStatistik();
    renderList();
  }

  function renderStatistik() {
    var total = DAFTAR.length;
    var baru = 0, diproses = 0, selesai = 0;
    var hariIni = 0;
    var hari = new Date(); hari.setHours(0, 0, 0, 0);
    DAFTAR.forEach(function (r) {
      if (r.status === "baru") baru++;
      else if (r.status === "diproses") diproses++;
      else if (r.status === "selesai") selesai++;
      if (new Date(r.dibuat_at).getTime() >= hari.getTime()) hariIni++;
    });
    var cards = [
      { l: "Total Laporan", n: total, c: "biru" },
      { l: "Baru", n: baru, c: "merah" },
      { l: "Diproses", n: diproses, c: "kuning" },
      { l: "Selesai", n: selesai, c: "hijau" },
      { l: "Hari Ini", n: hariIni, c: "navy" }
    ];
    dashStats.innerHTML = cards.map(function (c) {
      return '<div class="dash-stat ' + c.c + '"><span class="dash-stat-n">' + c.n +
        '</span><span class="dash-stat-l">' + esc(c.l) + '</span></div>';
    }).join("");
  }

  function renderList() {
    if (!DAFTAR.length) {
      dashList.innerHTML = "";
      dashEmpty.hidden = false;
      dashJumlah.textContent = "0";
      return;
    }
    dashEmpty.hidden = true;
    dashJumlah.textContent = DAFTAR.length;

    dashList.innerHTML = DAFTAR.map(function (r) {
      var st = r.status || "baru";
      var label = LABEL_STATUS[st] || st;
      var identitas = r.anonim
        ? '<span class="dl-badge anonim">Anonim</span>'
        : '<span class="dl-badge">' + esc(r.nama || "Tanpa Nama") + '</span>';
      return '' +
        '<article class="dash-item">' +
          '<header class="dl-head">' +
            '<span class="dl-status ' + esc(st) + '">' + esc(label) + '</span>' +
            '<span class="dl-waktu">' + esc(formatTanggal(r.dibuat_at)) + '</span>' +
          '</header>' +
          '<div class="dl-meta">' +
            identitas +
            (r.kelas ? '<span class="dl-meta-i">' + esc(r.kelas) + '</span>' : "") +
            (r.bentuk ? '<span class="dl-meta-i">' + esc(r.bentuk) + '</span>' : "") +
          '</div>' +
          '<p class="dl-isi">' + esc(r.isi) + '</p>' +
          '<div class="dl-aksi">' +
            (st !== "baru" ? '<button type="button" class="dl-btn set" data-id="' + r.id + '" data-st="baru">Tandai Baru</button>' : "") +
            (st !== "diproses" ? '<button type="button" class="dl-btn set" data-id="' + r.id + '" data-st="diproses">Tandai Diproses</button>' : "") +
            (st !== "selesai" ? '<button type="button" class="dl-btn set ok" data-id="' + r.id + '" data-st="selesai">Tandai Selesai</button>' : "") +
            (st !== "tidak-ditangani" ? '<button type="button" class="dl-btn set" data-id="' + r.id + '" data-st="tidak-ditangani">Tidak Ditangani</button>' : "") +
            '<button type="button" class="dl-btn del" data-id="' + r.id + '">Hapus</button>' +
          "</div>" +
        "</article>";
    }).join("");
  }

  /* Aksi pada daftar (event delegation) */
  dashList.addEventListener("click", function (e) {
    var btn = e.target.closest ? e.target.closest("button.dl-btn") : null;
    if (!btn) return;
    var id = btn.getAttribute("data-id");

    if (btn.classList.contains("set")) {
      var st = btn.getAttribute("data-st");
      btn.disabled = true;
      tokenValid().then(function (token) {
        return window.API.ubahStatus(token, id, st);
      }).then(function () {
        toast("Status diubah: " + (LABEL_STATUS[st] || st) + ".");
        muat();
      }, function (err) {
        btn.disabled = false;
        toast((err && err.message) || "Gagal mengubah status.", "err");
      });
      return;
    }

    if (btn.classList.contains("del")) {
      if (!window.confirm("Hapus laporan ini secara permanen?\n\nTindakan ini tidak bisa dibatalkan.")) return;
      btn.disabled = true;
      tokenValid().then(function (token) {
        return window.API.hapusLaporan(token, id);
      }).then(function () {
        toast("Laporan dihapus.");
        muat();
      }, function (err) {
        btn.disabled = false;
        toast((err && err.message) || "Gagal menghapus laporan.", "err");
      });
    }
  });

  /* ---------- Filter ---------- */
  function terapkanFilter() {
    FILTER.status = el("fStatus").value;
    FILTER.bentuk = el("fBentuk").value;
    FILTER.dari = el("fDari").value;
    FILTER.sampai = el("fSampai").value;
    FILTER.cari = el("fCari").value.trim();
    muat();
  }

  ["fStatus", "fBentuk", "fDari", "fSampai"].forEach(function (id) {
    el(id).addEventListener("change", terapkanFilter);
  });

  var cariTimer = null;
  el("fCari").addEventListener("input", function () {
    clearTimeout(cariTimer);
    cariTimer = setTimeout(terapkanFilter, 450);
  });

  btnResetFilter.addEventListener("click", function () {
    el("fStatus").value = "all";
    el("fBentuk").value = "all";
    el("fDari").value = "";
    el("fSampai").value = "";
    el("fCari").value = "";
    FILTER = { status: "all", bentuk: "all", dari: "", sampai: "", cari: "" };
    muat();
  });

  btnRefresh.addEventListener("click", function () { muat(); });

  /* ---------- Export CSV ---------- */
  btnCsv.addEventListener("click", function () {
    if (!DAFTAR.length) { toast("Belum ada laporan untuk diekspor.", "err"); return; }
    var kolom = ["id", "dibuat_at", "status", "anonim", "nama", "kelas", "bentuk", "isi"];
    var sel = (function (o, k) { return o == null ? "" : String(o); });
    var garis = [kolom.join(";")];
    DAFTAR.forEach(function (r) {
      var isi = sel(r.isi).replace(/"/g, '""').replace(/\r?\n/g, " ");
      garis.push([
        r.id,
        sel(r.dibuat_at),
        sel(r.status),
        r.anonim ? "YA" : "TIDAK",
        r.anonim ? "" : sel(r.nama),
        sel(r.kelas),
        sel(r.bentuk),
        '"' + isi + '"'
      ].join(";"));
    });
    var blob = new Blob(["﻿" + garis.join("\r\n")], { type: "text/csv;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "laporan-bullying-" + new Date().toISOString().slice(0, 10) + ".csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    toast("CSV berhasil dibuat (" + DAFTAR.length + " laporan).");
  });

  /* ---------- Mulai ---------- */
  (function mulai() {
    var c = window.KONFIG || {};
    var konf = el("dashKonf");
    if (!window.API || !window.API.siap()) {
      konf.innerHTML = '<strong>Backend belum dikonfigurasi.</strong> Isi <code>config.js</code> ' +
        "(supabaseUrl + supabaseAnonKey) lalu jalankan <code>setup.sql</code> di SQL Editor Supabase.";
      konf.classList.add("warn");
    } else {
      konf.textContent = "Terhubung ke backend. Laporan yang dikirim dari form pengaduan akan muncul di sini.";
      konf.classList.add("ok");
    }

    /* Identitas tugas kelompok di footer */
    var fp = el("footPenerbit"), fk = el("footKelompok");
    if (fp) fp.textContent = c.penerbit || "Universitas Siliwangi";
    if (fk) fk.textContent = c.namaKelompok || "Kelompok";

    SESI = bacaSesi();
    if (SESI) {
      tampilPanel();
      tokenValid().then(function () {
        muat();
      }, function () {
        hapusSesi();
        tampilLogin();
      });
    } else {
      tampilLogin();
    }
  })();
})();
