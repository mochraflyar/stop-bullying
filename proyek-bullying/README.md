# 🛑 STOP BULLYING — Poster Interaktif & Edukasi Anti-Bullying

**Poster Edukasi & Pencegahan Perilaku Bullying / Perundungan di Lingkungan Sekolah**

Website berbentuk **poster panjang (satu halaman utama)** bergaya poster cetak.
Klik gambar atau teks mana pun untuk membuka **halaman penjelasan lengkap** tentang topik itu.

---

## 🚀 Menjalankan

Tanpa install, tanpa server — cukup buka `index.html` di browser.

```bash
# opsional: jalankan server lokal
npx serve .
python -m http.server 8000
```

> Font berasal dari Google Fonts (butuh internet). Offline tetap tampil rapi dengan font cadangan.

---

## 🗺️ Struktur

```
proyek-bullying/
├── index.html   → POSTER UTAMA (1 halaman panjang, scroll ke bawah)
├── detail.html  → HALAMAN DETAIL (isi dipilih dari URL, mis. detail.html#fisik)
├── data.js      → Isi 11 topik dalam satu file (sumber kebenaran)
├── style.css    → Gaya poster, halaman detail, responsif, dan cetak
├── app.js       → Interaksi poster + router detail + formulir pengaduan
├── README.md
└── _legacy/     → Versi website lama (cadangan, tidak dipakai)
```

---

## 🖼️ Isi Poster Utama

| Blok | Isi | Bisa diklik? |
|------|-----|--------------|
| **Hero** | Judul "STOP BULLYING" + ilustrasi anak menolak + tanda larangan | — |
| **Penjelasan singkat** | Definisi bullying | ✅ "Apa Itu Bullying?" |
| **Bentuk Bullying** | 4 kartu gambar: FISIK · VERBAL · SOSIAL · CYBER | ✅ gambar + label |
| **Lihat juga** | Non-Verbal Bullying | ✅ |
| **Cara Menghindari Bullying** | "Oleh Anak" & "Oleh Tenaga Pendidik" | ✅ tiap sub-blok |
| **Dampak Bullying** | 3 kartu: Korban / Pelaku / Saksi | ✅ tiap kartu |
| **Jerat Hukum Bullying** | Pasal 351 KUHP, UU 35/2014, UU 23/2002, UU 11/2008 (ITE) | ✅ tombol |
| **Layanan Pengaduan** | Ajakan melapor secara anonim | ✅ tombol |

Navigasi: bar atas (Bentuk · Cara Menghindari · Dampak · Jerat Hukum · Lapor) lompat ke
blok terkait, tombol **▲** kembali ke atas, blok muncul perlahan saat digulir.

---

## 📖 Halaman Detail

Satu file `detail.html`, isi ditentukan dari URL:

| Tautan | Isi |
|--------|-----|
| `detail.html#apa-itu` | Pengertian, ciri, dan karakteristik utama bullying |
| `detail.html#fisik` | Pengertian, contoh, dampak, cara menanganinya |
| `detail.html#verbal` | Kata-kata yang menyakiti, contoh, dan dampaknya |
| `detail.html#sosial` | Pengasingan, gosip, dan pengabaian |
| `detail.html#cyber` | Perundungan digital, contoh, dan dampaknya |
| `detail.html#non-verbal` | Bullying tanpa kata-kata |
| `detail.html#dampak` | Dampak bagi korban, pelaku, dan bystander |
| `detail.html#dampak-korban` | Langsung ke sub-bagian korban |
| `detail.html#dampak-pelaku` | Langsung ke sub-bagian pelaku |
| `detail.html#dampak-saksi` | Langsung ke sub-bagian bystander |
| `detail.html#hindari-anak` | Panduan untuk siswa |
| `detail.html#hindari-guru` | Strategi pencegahan di sekolah |
| `detail.html#hukum` | Dasar hukum & konsekuensinya di Indonesia |
| `detail.html#pengaduan` | Formulir pengaduan + riwayat laporan |

Tiap halaman punya tombol **"← Kembali ke Poster"** dan kartu **"Baca juga topik ini"**
untuk berpindah topik tanpa memuat ulang halaman.

---

## ✍️ Formulir Pengaduan

- Mode **anonim/rahasia** (kolom nama otomatis dinonaktifkan)
- Validasi isi minimal 10 karakter + penghitung karakter (maks. 500)
- Riwayat laporan tersimpan di `localStorage` peramban
- Hapus per laporan atau hapus semua
- Notifikasi *toast* setiap aksi

---

## 🎨 Design

| Elemen | Nilai |
|--------|-------|
| Navy | `#16224A` |
| Biru | `#2B5CB8` |
| Kuning | `#FFD23F` |
| Merah | `#E23B3B` |
| Hijau label | `#8CC63F` |
| Font display | **Anton** (judul besar) |
| Font judul | **Archivo Black** (judul blok & label) |
| Font isi | **Nunito** (mudah dibaca siswa) |
| Font anotasi | **Caveat** (tulisan tangan) |

Semua ilustrasi dibuat sebagai **SVG di dalam `index.html`** — tidak butuh file gambar,
tajam di semua ukuran, dan bisa diubah warnanya.

---

## 📱 Responsif & 🖨️ Cetak

- **Desktop** — blok selebar maks 1120px, grid 4 kartu
- **Tablet** — 2 kolom
- **HP** — 1 kolom / 2 kartu, navigasi bisa digeser
- **Cetak (`Ctrl+P`)** — `@page A4 portrait`, poster panjang otomatis jadi beberapa lembar

---

## 📤 Deploy (opsional)

Statis, bisa langsung di-host di **GitHub Pages / Netlify / Vercel**: upload folder ke
repository, lalu **Settings → Pages → Deploy from a branch → `main`, folder `/root`**.

---

*Ilustrasi dibuat khusus untuk poster ini. Materi bersifat informatif dan bukan
nasihat hukum profesional.*
