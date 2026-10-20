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
├── index.html     → POSTER UTAMA (1 halaman panjang, scroll ke bawah)
├── detail.html    → HALAMAN DETAIL (isi dipilih dari URL, mis. detail.html#fisik)
├── dashboard.html → DASHBOARD GURU (login, daftar & proses laporan)
├── data.js        → Isi 11 topik dalam satu file (sumber kebenaran)
├── api.js         → Lapisan API Supabase (kirim laporan, login guru)
├── config.js      → Konfigurasi backend + kontak sekolah (satu-satunya file yang diedit)
├── setup.sql      → Skrip SQL: tabel + aturan RLS (dijalankan sekali di Supabase)
├── style.css      → Gaya poster, halaman detail, dashboard, responsif, dan cetak
├── app.js         → Interaksi poster + router detail + formulir pengaduan
├── dashboard.js   → Logika dashboard guru
├── README.md
└── _legacy/       → Versi website lama (cadangan, tidak dipakai)
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
| **Jerat Hukum Bullying** | Pasal 76C & Pasal 80 UU 35/2014, UU ITE (UU 19/2016 jo. UU 1/2024), Permendikbudristek 46/2023 (PPKSP), UU 11/2012 (SPPA) | ✅ tombol |
| **Layanan Pengaduan** | Ajakan melapor anonim + kanal WhatsApp/email + QR untuk versi cetak | ✅ tombol |

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

## 🗄️ Backend Pengaduan (Supabase) — Setup Sekali

Laporan yang dikirim siswa **disimpan ke database** dan muncul di `dashboard.html`.
Supabase dipakai karena gratis, tidak perlu install apa pun, dan situsnya tetap
100% statis (bisa di-host di GitHub Pages / Netlify / Vercel).

### Langkah 1 — Buat project

1. Daftar di [supabase.com](https://supabase.com) → **New project**
2. Simpan **Database Password** (dipakai sekali saat membuat akun guru)
3. Buka **Project Settings → API**, salin:
   - **Project URL** → `supabaseUrl`
   - **anon public** key → `supabaseAnonKey`
   - ⚠️ **Jangan** memakai key `service_role` (itinya admin penuh)

### Langkah 2 — Buat tabel

Buka **SQL Editor → New query**, tempel seluruh isi `setup.sql`, tekan **Run**.
Selesai — tabel `laporan`, aturan RLS, dan hak akses (GRANT) yang sesuai sudah aktif.

### Langkah 3 — Buat akun guru

**Authentication → Users → Add user**
Isi email + kata sandi (mis. `bk@sekolah.sch.id`). Akun inilah yang dipakai
untuk login ke dashboard.

### Langkah 4 — Isi `config.js`

```js
window.KONFIG = {
  supabaseUrl: "https://xxxxxxxx.supabase.co",
  supabaseAnonKey: "eyJhbGciOi...",
  whatsapp: "6285659070362",      // format internasional, tanpa +
  email: "bk@sekolah.sch.id",
  namaSekolah: "SMP Negeri 1",
  namaLayanan: "Bimbingan & Konseling",
  maxIsi: 500
};
```

Satu-satunya file yang perlu diedit. Kalau `config.js` masih kosong, situs tetap
jalan: form bekerja dalam mode lokal + tombol WhatsApp sebagai cadangan.

### Cara kinerjanya

Ada **dua lapis** izin yang terpisah di database Supabase:

| Lapis | Menentukan |
|---|---|
| **GRANT** | boleh atau tidak sebuah role menyentuh tabel sama sekali |
| **RLS** | kalau boleh, baris mana yang boleh dilihat |

Karena itu `setup.sql` memakai urutan **revoke → RLS + policy → grant minimal**:

| Peran | GRANT | RLS | Hasil |
|---|---|---|---|
| Pelapor (tanpa login, peran `anon`) | `INSERT` saja | policy insert untuk `anon` | **hanya bisa menambah** — tidak bisa membaca laporan siapa pun |
| Guru (login dashboard, peran `authenticated`) | `SELECT`/`UPDATE`/`DELETE` | policy untuk `authenticated` | bisa baca & proses semua laporan |
| `service_role` | penuh | bypass RLS | hanya internal Supabase — kuncinya **tidak pernah** ada di frontend |

> ⚠️ **Jangan pernah** menjalankan `grant all on table public.laporan to anon`.
> Perintah itu terlihat "menyelesaikan" error `42501`, tapi kalau RLS belum aktif
> atau policy-nya salah, seluruh laporan jadi bisa dibaca siapa pun yang punya
> anon key — dan anon key memang ikut disertakan di file frontend.

#### Kenapa peran `anon` tidak diberi hak `SELECT`?

Tabel ini sengaja dibuat **"write-only"** untuk peran `anon`. Alasannya:
PostgreSQL mensyaratkan hak `SELECT` untuk menjalankan `INSERT ... RETURNING`.
Frontend (lihat `api.js`) mengirim header:

```
Prefer: return=minimal
```

PostgREST lalu **menekan klausa `RETURNING`**, sehingga tidak ada hak `SELECT`
yang dibutuhkan — dan laporan pun tetap mustahil dibaca oleh siapa pun yang
memiliki anon key. Ini juga alasan PostgREST mendokumentasikan
`return=minimal` sebagai cara meng-*insert* ke tabel write-only.

**Jangan** "memperbaiki" error `42501` dengan memberi `SELECT` ke `anon` —
kalau RLS suatu saat dimatikan, seluruh laporan akan bisa dibaca publik.

Laporan mode anonim menyimpan kolom `nama` sebagai `NULL` — tidak ada jejak
pelapor di server sama sekali.

### 🔐 Untuk project yang dibuat setelah 30 Oktober 2026

Mulai **30 Oktober 2026**, Supabase tidak lagi memberi GRANT otomatis ke
`anon`/`authenticated` untuk tabel baru di schema `public`. Tabel yang dibuat
sebelum tanggal itu **mempertahankan** GRANT lamanya.

`setup.sql` sudah aman untuk **kedua kondisi** (karena selalu revoke dulu,
lalu grant eksplisit). Checkbox "Enable automatic RLS" saat membuat project
pun **boleh tetap dicentang** — itu hanya menambah trigger supaya tabel
*nanti* otomatis dilindungi, dan untuk tabel `laporan` RLS sudah diaktifkan
eksplisit oleh `setup.sql`.

### ✅ Verifikasi (jalankan setelah `setup.sql`)

Di **SQL Editor**, jalankan 5 query verifikasi yang sudah tercantum di bagian
akhir `setup.sql`. Ringkasnya:

1. `relrowsecurity` untuk `laporan` harus `t`
2. Ada **4 policy**: `pelapor insert laporan` (to `anon`) + 3 policy `to authenticated`
3. `anon` hanya punya `INSERT`; `authenticated` punya `SELECT`/`UPDATE`/`DELETE`
4. Sequence `laporan_id_seq` punya `USAGE` untuk `anon`
5. **Query keamanan terakhir harus mengembalikan 0 baris** — artinya tidak ada
   tabel lain di project Anda yang bocor ke publik

**Uji paling meyakinkan** — buka Console browser, ganti `REF` & `ANON`:

```js
// A. harus 401/403 (tidak terbaca) — BUKAN 200
fetch(`https://REF.supabase.co/rest/v1/laporan?select=*&limit=1`, {
  headers: { apikey: ANON, Authorization: "Bearer " + ANON }
}).then(r => console.log("A. status:", r.status));

// B. harus 201 Created (laporan tersimpan)
fetch(`https://REF.supabase.co/rest/v1/laporan`, {
  method: "POST",
  headers: { apikey: ANON, Authorization: "Bearer " + ANON, "Content-Type": "application/json" },
  body: JSON.stringify({ anonim: true, nama: null, kelas: "Siswa", bentuk: "Verbal", isi: "tes insert", status: "baru" })
}).then(r => console.log("B. status:", r.status));
```

### 🛠️ Kalau ada error

| Gejala | Penyebab & solusi |
|---|---|
| `42501 permission denied for table laporan` | `setup.sql` belum lengkap dijalankan (bagian GRANT). Jalankan ulang seluruh file. |
| `permission denied for sequence laporan_id_seq` | Bagian GRANT sequence belum jalan. Jalankan ulang `setup.sql`. |
| Form says "belum terkonfigurasi" | `config.js` masih kosong — isi `supabaseUrl` + `supabaseAnonKey`. |
| Dashboard: "Email atau kata sandi salah" | Akun guru belum dibuat di **Authentication → Users**. |
| Dashboard: "Gagal memuat daftar laporan" | Buka Console browser untuk melihat pesan teknis lengkap dari server. |

---

## 🧑‍🏫 Dashboard Guru (`dashboard.html`)

- Login email + kata sandi (Supabase Auth), sesi tersimpan di peramban
- Kartu statistik: total · baru · diproses · selesai · laporan hari ini
- Filter status · bentuk bullying · rentang tanggal · cari isi laporan
- Aksi per laporan: tandai **baru / diproses / selesai / tidak ditangani** · hapus
- **Export CSV** (siap dibuka di Excel)
- Halaman memakai `noindex` sehingga tidak masuk hasil pencarian

---

## ✍️ Formulir Pengaduan

- Mode **anonim/rahasia** (kolom nama otomatis dinonaktifkan)
- Validasi isi minimal 10 karakter + penghitung karakter (maks. 500)
- Dikirim ke database Supabase; bila gagal/offline → tersimpan lokal +
  tombol **WhatsApp / Email / Salin teks** dengan isi yang sudah terisi otomatis
- Riwayat di perangkat ini (`localStorage`) — hapus per laporan atau hapus semua
- Notifikasi *toast* setiap aksi
- Daftar **saluran pelaporan** yang tersedia (kotak aduan, formulir daring,
  konseling BK, orang tua/wali)

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
