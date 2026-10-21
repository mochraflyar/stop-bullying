# 🛑 STOP BULLYING — Poster Interaktif & Edukasi Anti-Bullying

**Tugas Projek Pengabdian — Tema Hukum (Bullying)**
**Universitas Siliwangi · Program Studi Pendidikan Matematika · Fakultas Keguruan dan Ilmu Pendidikan**

> Poster Edukasi & Pencegahan Perilaku Bullying / Perundungan di Lingkungan Sekolah.
> Situs statis berbentuk poster panjang (3 halaman) yang bisa diklik.
> Setiap gambar dan teks membuka penjelasan lengkap tentang topik tersebut.

| | |
|---|---|
| **Penerbit** | Universitas Siliwangi |
| **Program Studi** | Pendidikan Matematika |
| **Fakultas** | Keguruan dan Ilmu Pendidikan |
| **Kelompok** | Kelompok 5 — Kelas B |
| **Sasaran** | SMAN 8 Tasikmalaya |
| **Kanal pengaduan** | Tim GDS SMAN 8 Tasikmalaya · Wali Kelas |

---

## 🚀 Menjalankan

Tanpa install, tanpa server — cukup buka `index.html` di browser.

```bash
# opsional: jalankan server lokal
npx serve .
node server.js          # jika ada file server.js
```

> Font berasal dari Google Fonts (butuh internet). Offline tetap tampil rapi dengan font cadangan.

---

## 🗺️ Struktur

```
proyek-bullying/
├── index.html     → POSTER UTAMA (3 halaman, scroll ke bawah)
├── detail.html    → HALAMAN DETAIL (isi dipilih dari URL, mis. detail.html#bercanda)
├── dashboard.html → DASHBOARD LAPORAN (login, daftar & proses laporan)
├── data.js        → Isi seluruh topik dalam satu file (sumber kebenaran)
├── api.js         → Lapisan API Supabase (kirim laporan, login pengampu)
├── config.js      → Konfigurasi backend + identitas tugas kelompok
├── setup.sql      → Skrip SQL: tabel + aturan RLS (dijalankan sekali di Supabase)
├── style.css      → Gaya poster, halaman detail, dashboard, responsif, dan cetak
├── app.js         → Interaksi poster + router detail + formulir pengaduan
├── dashboard.js   → Logika dashboard pengampu
├── img/           → Foto ilustrasi asli (opsional — ada placeholder SVG)
│   └── README.md  → Daftar nama file yang dipakai
├── README.md
└── _legacy/       → Versi website lama (cadangan, tidak dipakai)
```

---

## 📄 Struktur 3 Halaman

| Halaman | Isi |
|---|---|
| **1 — Sampul** | Judul *"Satu tawa untukmu, luka selamanya untuknya"* + galeri 4 ilustrasi |
| **2 — Bercanda vs Bullying** | *"Tidak semua yang terlihat seperti bercanda itu benar-benar bercanda."* + tabel perbandingan + kalimat kunci + contoh sekolah |
| **3 — Materi** | Tujuan materi · definisi & 3 elemen kunci · bentuk bullying · dampak · cara menghindari · pencegahan · dasar hukum · layanan pengaduan · penutup |

Navigasi atas: `1 · Sampul` · `2 · Bercanda vs Bullying` · `3 · Materi` · `Bentuk` ·
`Dampak` · `Jerat Hukum` · `Lapor`. Tombol **▲** kembali ke atas, blok muncul
perlahan saat digulir.

### Isi Halaman 3

| Blok | Isi | Bisa diklik? |
|------|-----|--------------|
| **Tujuan Materi** | 3 tujuan pembelajaran sesi ini | — |
| **Apa Itu Bullying** | Definisi + 3 elemen kunci (kekuatan, berulang, sengaja) | ✅ |
| **Bentuk Bullying** | 4 kartu: FISIK · VERBAL · SOSIAL · CYBER | ✅ gambar + label |
| **Lihat juga** | Non-Verbal Bullying & Bercanda vs Bullying | ✅ |
| **Cara Menghindari** | "Oleh Anak" & "Oleh Tenaga Pendidik" | ✅ tiap sub-blok |
| **Dampak Bullying** | 3 kartu: Korban / Pelaku / Saksi | ✅ tiap kartu |
| **Jerat Hukum Bullying** | Pasal 76C & Pasal 80 UU 35/2014, UU ITE (UU 19/2016 jo. UU 1/2024), Permendikbudristek 46/2023 (PPKSP), UU 11/2012 (SPPA) | ✅ tombol |
| **Layanan Pengaduan** | Ajakan melapor anonim + kanal WhatsApp/email + QR untuk versi cetak | ✅ tombol |
| **Disusun oleh** | Identitas & anggota kelompok (dari `config.js`) | — |

---

## 📖 Halaman Detail

Satu file `detail.html`, isi ditentukan dari URL:

| Tautan | Isi |
|--------|-----|
| `detail.html#tujuan` | Tujuan materi hari ini + alur bahasan *(baru)* |
| `detail.html#bercanda` | **Bercanda atau Bullying?** — tabel perbandingan + contoh *(baru)* |
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

## 🖼️ Foto & Placeholder

Semua ilustrasi **default** dibuat sebagai **SVG di dalam `index.html`** — tidak
butuh file gambar, tajam di semua ukuran, dan bisa diubah warnanya.

Selain itu, galeri dan kartu "Bentuk Bullying" juga mencoba memuat **foto asli**
dari folder `img/`:

| File | Dipakai di |
|---|---|
| `img/01-stop-bullying.png` | Galeri Halaman 1 — kartu 1 |
| `img/02-bullying-fisik.png` | Galeri kartu 2 & kartu **FISIK** |
| `img/03-cyberbullying.png` | Galeri kartu 3 & kartu **CYBER** |
| `img/04-bullying-sosial.png` | Galeri kartu 4 & kartu **SOSIAL** |
| `img/05-bullying-verbal.png` | Kartu **VERBAL** (opsional) |

**Cara kerjanya:** `index.html` menuliskan `<img data-fallback>` lebih dulu,
disusul `<svg class="gal-ph" hidden>`. Kalau file fotonya ada → foto tampil.
Kalau tidak ada → `app.js` menangkap galat `error`, menyembunyikan `<img>`, lalu
menampilkan SVG placeholder.

Jadi **tidak perlu menyentuh kode** untuk memasang foto — cukup simpan file dengan
nama yang tepat di folder `img/`. Lihat `img/README.md` untuk detailnya.

---

## 🗄️ Backend Pengaduan (Supabase) — Setup Sekali

Laporan yang dikirim siswa **disimpan ke database** dan muncul di `dashboard.html`.
Supabase dipakai karena gratis, tidak perlu install apa pun, dan situsnya tetap
100% statis (bisa di-host di GitHub Pages / Netlify / Vercel).

### Langkah 1 — Buat project

1. Daftar di [supabase.com](https://supabase.com) → **New project**
2. Simpan **Database Password** (dipakai sekali saat membuat akun pengampu)
3. Buka **Project Settings → API**, salin:
   - **Project URL** → `supabaseUrl`
   - **Publishable key** (format `sb_publishable_...`) atau **anon public** key
     (format lama `eyJ...`) → `supabaseAnonKey`
   - ⚠️ **Jangan** memakai key `service_role` (itinya admin penuh)

> **Format key baru.** Mulai 2026 Supabase mengganti "anon key" JWT dengan
> **publishable key** berawalan `sb_publishable_`. Keduanya tetap bisa dipakai
> sebagai header `apikey` dan `Authorization: Bearer`, jadi `api.js` tidak perlu
> diubah. Yang penting **jangan** pakai `service_role`.
>
> Kalau muncul *"Invalid API key"* padahal `config.js` sudah terisi, berarti key
> di sana sudah **di-*regenerate*** di dashboard Supabase. Salin ulang key
> yang terbaru dan tempel kembali. Dashboard punya pemeriksaan otomatis
> (`API.cekKoneksi()`) yang langsung memberi tahu kalau ini terjadi.

### Langkah 2 — Buat tabel

Buka **SQL Editor → New query**, tempel seluruh isi `setup.sql`, tekan **Run**.
Selesai — tabel `laporan`, aturan RLS, dan hak akses (GRANT) yang sesuai sudah aktif.

### Langkah 3 — Buat akun pengampu

**Authentication → Users → Add user**
Isi email + kata sandi (mis. `gds@sman8tasikmalaya.sch.id`). Akun inilah yang dipakai
untuk login ke dashboard.

### Langkah 4 — Isi `config.js`

```js
window.KONFIG = {
  supabaseUrl: "https://xxxxxxxx.supabase.co",   // boleh juga ditulis ".../rest/v1"
  supabaseAnonKey: "eyJhbGciOi...",

  /* Identitas tugas kelompok */
  penerbit: "Universitas Siliwangi",
  judulTugas: "Tugas Projek Pengabdian",
  temaTugas: "Tema Hukum (Bullying)",
  namaKelompok: "Kelompok 5",
  kelas: "Kelas B",
  prodi: "Program Studi Pendidikan Matematika",
  fakultas: "Fakultas Keguruan dan Ilmu Pendidikan",
  anggota: [
    { nama: "Shaila Alexa Anandita", nim: "262151111022" },
    { nama: "Fani Febriani", nim: "262151111038" }
    // ...
  ],

  /* Kanal pengaduan — cukup Tim GDS & Wali Kelas */
  namaSekolah: "SMAN 8 Tasikmalaya",
  namaLayanan: "Tim GDS SMAN 8 Tasikmalaya",
  whatsapp: "6285659070362",   // format internasional, tanpa +
  email: "",                  // opsional — kosongkan bila hanya Tim GDS / Wali Kelas
  maxIsi: 500
};
```

Satu-satunya file yang perlu diedit. Kalau `config.js` masih kosong, situs tetap
jalan: form bekerja dalam mode lokal + tombol WhatsApp sebagai cadangan.

> **Catatan URL:** `supabaseUrl` boleh diisi `https://xxx.supabase.co` **atau**
> `https://xxx.supabase.co/rest/v1`. `api.js` menormalkan sendiri, jadi tidak akan
> pernah terjadi alamat ganda `/rest/v1/rest/v1` yang membuat server membalas 404.

> **Catatan NIM:** anggota boleh ditulis sebagai objek `{ nama, nim }` (NIM
> ditampilkan sebagai badge biru) atau sebagai teks biasa.

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
| Pengampu (login dashboard, peran `authenticated`) | `SELECT`/`UPDATE`/`DELETE` | policy untuk `authenticated` | bisa baca & proses semua laporan |
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
| Form: *"API key tidak valid / sudah diganti di Supabase"* | **Anon key di `config.js` sudah tidak berlaku** (mis. setelah di-*regenerate* di dashboard, atau key salah disalin). Salin ulang **anon public** key di **Supabase → Settings → API**, lalu tempel ke `config.js`. Dashboard menampilkan pesan ini otomatis lewat `API.cekKoneksi()`. |
| `42501 permission denied for table laporan` | `setup.sql` belum lengkap dijalankan (bagian GRANT). Jalankan ulang seluruh file. |
| `permission denied for sequence laporan_id_seq` | Bagian GRANT sequence belum jalan. Jalankan ulang `setup.sql`. |
| Form says "belum terkonfigurasi" | `config.js` masih kosong — isi `supabaseUrl` + `supabaseAnonKey`. |
| Dashboard: "Email atau kata sandi salah" | Akun pengampu belum dibuat di **Authentication → Users**. |
| Dashboard: "Gagal memuat daftar laporan" | Buka Console browser untuk melihat pesan teknis lengkap dari server. |
| Laporan tidak masuk, dan di Console ada `404` | `supabaseUrl` pernah berisi `/rest/v1` lalu ditambahkan lagi. Sekarang `api.js` menormalkan otomatis, tapi pastikan `config.js` memakai Project URL apa adanya. |
| Server membalas `503` | Proyek Supabase free-tier sedang dijeda. Buka proyek di dashboard Supabase untuk mengaktifkannya kembali. |

---

## 🧑‍🏫 Dashboard Pengampu (`dashboard.html`)

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

Semua ilustrasi default dibuat sebagai **SVG di dalam `index.html`** — tidak butuh
file gambar, tajam di semua ukuran, dan bisa diubah warnanya.

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
