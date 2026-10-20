/* ============================================================
   STOP BULLYING — Interaksi Poster Utama + Halaman Detail
   ------------------------------------------------------------
   - Poster  : nav aktif saat scroll, reveal, tombol kembali ke atas
   - Detail  : router berdasarkan hash (#fisik, #dampak-korban, ...)
   - Form    : pengaduan anonim + riwayat di localStorage
   ============================================================ */
(function () {
  "use strict";

  var isDetail = document.body.classList.contains("detail-body");
  if (isDetail) initDetail();
  else initPoster();

  /* =========================================================
     POSTER UTAMA
     ========================================================= */
  function initPoster() {
    var toTop = document.getElementById("toTop");

    /* Tombol kembali ke atas */
    if (toTop) {
      toTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    /* Tandai link navigasi yang sedang aktif */
    var navLinks = Array.prototype.slice.call(document.querySelectorAll("[data-nav]"));
    var targets = navLinks.map(function (a) {
      return document.getElementById(a.getAttribute("data-nav"));
    }).filter(Boolean);

    function updateNav() {
      var y = window.scrollY + 140;
      var aktif = "";
      targets.forEach(function (sec, i) {
        if (sec.offsetTop <= y) aktif = navLinks[i].getAttribute("data-nav");
      });
      navLinks.forEach(function (a) {
        a.classList.toggle("is-active", a.getAttribute("data-nav") === aktif);
      });
      if (toTop) toTop.classList.toggle("show", window.scrollY > 520);
    }

    var ticking = false;
    window.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        updateNav();
        ticking = false;
      });
    }, { passive: true });
    updateNav();

    /* Blok muncul perlahan saat digulir */
    var blok = Array.prototype.slice.call(document.querySelectorAll(".blk, .hero, .intro"));
    blok.forEach(function (b) { b.classList.add("reveal"); });

    if ("IntersectionObserver" in window) {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            obs.unobserve(e.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
      blok.forEach(function (b) { obs.observe(b); });
    } else {
      blok.forEach(function (b) { b.classList.add("is-in"); });
    }

    /* Cadangan: bila observer tidak berjalan, blok yang terlihat tetap ditampilkan.
       Penting: blok yang sudah ter-scroll melewati atas juga harus tampil. */
    function revealVisible() {
      blok.forEach(function (b) {
        if (b.classList.contains("is-in")) return;
        if (b.getBoundingClientRect().top < window.innerHeight * 0.94) b.classList.add("is-in");
      });
    }
    window.addEventListener("scroll", revealVisible, { passive: true });
    window.addEventListener("resize", revealVisible);
    window.setTimeout(revealVisible, 60);
    window.setTimeout(revealVisible, 500);
    /* Sebelum mencetak, pastikan semua blok terlihat */
    window.addEventListener("beforeprint", function () {
      blok.forEach(function (b) { b.classList.add("is-in"); });
    });

    /* Link anchor: geser sedikit agar tidak tertutup nav */
    Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'), function (a) {
      a.addEventListener("click", function (e) {
        var id = a.getAttribute("href").slice(1);
        var el = document.getElementById(id);
        if (!el) return;
        e.preventDefault();
        var top = el.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top: top, behavior: "smooth" });
        if (history.replaceState) history.replaceState(null, "", "#" + id);
      });
    });
  }

  /* =========================================================
     HALAMAN DETAIL
     ========================================================= */
  function initDetail() {
    var root = document.getElementById("detailRoot");
    if (!root) return;

    function topicFromHash() {
      var raw = (window.location.hash || "").replace(/^#/, "").toLowerCase();
      var map = window.HASH_TOPIK || {};
      if (map[raw]) return { key: raw, id: map[raw][0], sec: map[raw][1] };
      return { key: "apa-itu", id: "apa-itu", sec: null };
    }

    function render() {
      var t = topicFromHash();
      var topik = (window.TOPIK || {})[t.id] || (window.TOPIK || {})["apa-itu"];
      if (!topik) { root.innerHTML = "<p>Topik tidak ditemukan.</p>"; return; }

      document.title = topik.judul + " — STOP BULLYING";

      var html = "";

      /* Kepala halaman */
      html +=
        '<article class="d-article">' +
        '<header class="d-head">' +
          '<span class="d-tag">' + esc(topik.tag || "Bullying") + "</span>" +
          '<h1 class="d-title">' + esc(topik.judul) + "</h1>" +
          '<p class="d-sub">' + esc(topik.sub || "") + "</p>" +
        "</header>";

      /* Definisi */
      if (topik.definisi) {
        html +=
          '<div class="d-def">' +
            '<span class="d-def-label">Pengertian</span>' +
            "<p>" + esc(topik.definisi) + "</p>" +
          "</div>";
      }
      if (topik.catatan) {
        html += '<p class="d-catatan">' + esc(topik.catatan) + "</p>";
      }

      /* Formulir (topik pengaduan) */
      if (topik.tipe === "form") {
        html += formMarkup();
      } else {
        /* Bagian-bagian */
        (topik.bagian || []).forEach(function (b) {
          html += '<section class="d-sec"' + (b.id ? ' id="' + b.id + '"' : "") + ">";
          html += '<h2 class="d-sec-title">' + esc(b.judul) + "</h2>";
          if (b.list) {
            html += '<ul class="d-list">';
            b.list.forEach(function (li) { html += "<li>" + li + "</li>"; });
            html += "</ul>";
          }
          if (b.teks) html += '<p class="d-text">' + b.teks + "</p>";
          html += "</section>";
        });
      }

      /* Topik terkait */
      var rel = (topik.terkait || []).filter(function (id) {
        return (window.TOPIK || {})[id];
      });
      if (rel.length) {
        html += '<div class="d-related"><h2 class="d-related-h">Baca juga topik ini</h2><div class="d-rel-grid">';
        rel.forEach(function (id) {
          var o = window.TOPIK[id];
          html +=
            '<a class="d-rel" href="#' + id + '">' +
              "<strong>" + esc(o.judul) + "</strong>" +
              "<span>" + esc(o.sub || "") + "</span>" +
            "</a>";
        });
        html += "</div></div>";
      }

      html += "</article>";
      root.innerHTML = html;

      if (topik.tipe === "form") initForm();

      /* Gulir ke sub-bagian bila diminta */
      if (t.sec) {
        window.setTimeout(function () {
          var el = document.getElementById(t.sec);
          if (el) {
            var top = el.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: top, behavior: "smooth" });
          }
        }, 60);
      } else {
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    }

    window.addEventListener("hashchange", render);
    if (!window.location.hash) {
      window.location.replace("#apa-itu");
    }
    render();
  }

  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  }

  /* =========================================================
     FORMULIR PENGADUAN
     ========================================================= */
  function formMarkup() {
    return (
      '<section class="dform">' +
        "<h3>Formulir Pengaduan</h3>" +
        '<div class="anonim-box">' +
          '<input type="checkbox" id="anonim" name="anonim">' +
          '<label for="anonim">Saya ingin melapor secara <strong>Anonim / Rahasia</strong></label>' +
        "</div>" +
        '<div class="form-row">' +
          '<div class="form-field">' +
            '<label for="nama">Nama Lengkap <small>(boleh dikosongkan)</small></label>' +
            '<input type="text" id="nama" name="nama" placeholder="Contoh: Rafly Pratama" autocomplete="name">' +
          "</div>" +
          '<div class="form-field">' +
            '<label for="kelas">Kelas / Status</label>' +
            '<select id="kelas" name="kelas">' +
              "<option>Siswa</option><option>Orang Tua / Wali</option>" +
              "<option>Guru / Staf</option><option>Saksi / Tetangga</option>" +
              "<option>Masyarakat</option>" +
            "</select>" +
          "</div>" +
        "</div>" +
        '<div class="form-field">' +
          '<label for="bentuk">Bentuk Bullying yang Dilaporkan</label>' +
          '<select id="bentuk" name="bentuk">' +
            "<option>Fisik</option><option>Verbal</option><option>Sosial / Relasional</option>" +
            "<option>Non-Verbal</option><option>Cyber</option>" +
          "</select>" +
        "</div>" +
        '<div class="form-field">' +
          '<label for="laporan">Detail Kejadian</label>' +
          '<textarea id="laporan" name="laporan" rows="5" maxlength="500" placeholder="Ceritakan detail kejadian bullying yang Anda alami atau saksikan..."></textarea>' +
          '<span class="char-count"><span id="charCount">0</span>/500 karakter</span>' +
        "</div>" +
        '<div class="form-actions">' +
          '<button type="submit" class="btn-kirim">&#9993; Kirim Laporan</button>' +
          '<button type="reset" class="btn-reset">Reset</button>' +
        "</div>" +
        '<p class="form-msg" id="formMsg" role="status" aria-live="polite"></p>' +
      "</section>" +
      '<section class="riwayat">' +
        '<div class="riwayat-head">' +
          "<h3>Riwayat Laporan Saya</h3>" +
          '<button type="button" class="btn-reset sm" id="btnClearAll">Hapus Semua</button>' +
        "</div>" +
        '<ul class="riwayat-list" id="riwayatList"></ul>' +
        '<p class="riwayat-empty" id="riwayatEmpty">Belum ada laporan tersimpan di perangkat ini.</p>' +
      "</section>"
    );
  }

  var STORAGE_KEY = "stopbullying.laporan.v1";
  var memoryStore = [];

  function loadReports() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return memoryStore.slice();
      var parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : memoryStore.slice();
    } catch (e) { return memoryStore.slice(); }
  }

  function saveReports(list) {
    memoryStore = list.slice();
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
      return true;
    } catch (e) { return false; }
  }

  function formatDate(ts) {
    var d = new Date(ts);
    var pad = function (n) { return (n < 10 ? "0" : "") + n; };
    return d.getDate() + "/" + pad(d.getMonth() + 1) + "/" + d.getFullYear() +
      " " + pad(d.getHours()) + ":" + pad(d.getMinutes());
  }

  function initForm() {
    var form = document.getElementById("formLapor") || document.querySelector(".dform");
    if (!form) return;

    /* Form dibungkus <section class="dform"> tanpa <form>; tambahkan pembungkus bila perlu */
    if (!form.tagName || form.tagName !== "FORM") {
      var wrap = document.createElement("form");
      wrap.noValidate = true;
      wrap.className = form.className;   /* pertahankan gaya kartu */
      wrap.id = form.id;
      while (form.firstChild) wrap.appendChild(form.firstChild);
      form.parentNode.insertBefore(wrap, form);
      form.parentNode.removeChild(form);
      form = wrap;
    }
    form.addEventListener("submit", onSubmit);

    var nama = document.getElementById("nama");
    var anonim = document.getElementById("anonim");
    var kelas = document.getElementById("kelas");
    var bentuk = document.getElementById("bentuk");
    var laporan = document.getElementById("laporan");
    var msg = document.getElementById("formMsg");
    var counter = document.getElementById("charCount");
    var clearAll = document.getElementById("btnClearAll");

    laporan.addEventListener("input", function () {
      counter.textContent = laporan.value.length;
    });

    anonim.addEventListener("change", function () {
      if (anonim.checked) {
        nama.value = "";
        nama.disabled = true;
        nama.placeholder = "Nama tidak dicatat (mode anonim)";
      } else {
        nama.disabled = false;
        nama.placeholder = "Contoh: Rafly Pratama";
      }
    });

    if (clearAll) {
      clearAll.addEventListener("click", function () {
        if (!loadReports().length) { toast("Belum ada laporan untuk dihapus."); return; }
        if (window.confirm("Hapus semua riwayat laporan di perangkat ini?")) {
          saveReports([]);
          renderReports();
          toast("Semua riwayat laporan dihapus.");
        }
      });
    }

    renderReports();

    function onSubmit(e) {
      e.preventDefault();
      msg.textContent = "";
      msg.className = "form-msg";

      var isi = laporan.value.trim();
      if (isi.length < 10) {
        msg.textContent = "Mohon tuliskan detail kejadian minimal 10 karakter.";
        msg.classList.add("err");
        laporan.classList.add("is-error");
        laporan.focus();
        return;
      }
      laporan.classList.remove("is-error");

      var isAnonim = anonim.checked;
      var item = {
        id: "L" + Date.now() + "-" + Math.floor(Math.random() * 1000),
        ts: Date.now(),
        anonim: isAnonim,
        nama: isAnonim ? "" : (nama.value.trim() || "Tanpa Nama"),
        kelas: kelas.value,
        bentuk: bentuk.value,
        isi: isi
      };

      var list = loadReports();
      list.unshift(item);
      var ok = saveReports(list);
      renderReports();

      form.reset();
      counter.textContent = "0";
      nama.disabled = false;
      nama.placeholder = "Contoh: Rafly Pratama";

      msg.textContent = ok
        ? "Laporan tersimpan. Terima kasih sudah berani melapor!"
        : "Laporan tersimpan (penyimpanan peramban tidak aktif, data hanya untuk sesi ini).";
      msg.classList.add("ok");
      toast("Laporan berhasil dikirim. Terima kasih!");
    }

    function renderReports() {
      var list = loadReports();
      var ul = document.getElementById("riwayatList");
      var empty = document.getElementById("riwayatEmpty");
      if (!ul || !empty) return;

      ul.innerHTML = "";
      if (!list.length) { empty.style.display = ""; return; }
      empty.style.display = "none";

      list.forEach(function (item) {
        var li = document.createElement("li");

        var head = document.createElement("div");
        head.className = "r-head";
        head.innerHTML =
          '<span class="r-badge' + (item.anonim ? " anonim" : "") + '">' +
          (item.anonim ? "Anonim" : esc(item.nama || "Tanpa Nama")) + "</span>" +
          '<span class="r-badge bentuk">' + esc(item.bentuk || "-") + "</span>" +
          (item.kelas ? '<span class="r-nama">' + esc(item.kelas) + "</span>" : "") +
          '<span class="r-date">' + esc(formatDate(item.ts)) + "</span>";
        li.appendChild(head);

        var isi = document.createElement("p");
        isi.className = "r-isi";
        isi.textContent = item.isi;
        li.appendChild(isi);

        var del = document.createElement("button");
        del.type = "button";
        del.className = "r-del";
        del.textContent = "Hapus laporan ini";
        del.addEventListener("click", function () {
          saveReports(loadReports().filter(function (r) { return r.id !== item.id; }));
          renderReports();
          toast("Laporan dihapus dari riwayat.");
        });
        li.appendChild(del);

        ul.appendChild(li);
      });
    }
  }

  /* =========================================================
     TOAST
     ========================================================= */
  var toastEl = null;
  var toastTimer = null;

  function toast(msg, ms) {
    if (!toastEl) {
      toastEl = document.createElement("div");
      toastEl.className = "toast";
      toastEl.setAttribute("role", "status");
      toastEl.setAttribute("aria-live", "polite");
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    if (toastTimer) window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      toastEl.classList.remove("show");
    }, ms || 2800);
  }
})();
