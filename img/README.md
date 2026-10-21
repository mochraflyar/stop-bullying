# 📁 Folder `img/` — Foto Ilustrasi Poster

Folder ini menyimpan **file foto/ilustrasi asli** yang dipakai di galeri
Halaman 1 (Sampul) dan di kartu "Bentuk Bullying".

Sampai file-nya diisi, halaman otomatis menampilkan **ilustrasi SVG
placeholder** yang tertanam di `index.html` (tidak ada gambar yang rusak).

---

## 📌 Nama file yang dipakai

| File | Dipakai di | Isi gambar |
|---|---|---|
| `01-stop-bullying.png` | Galeri Halaman 1 — kartu 1 | Megafon bertuliskan **STOP BULLYING**, anak menarik rambut temannya, anak lain menangis |
| `02-bullying-fisik.png` | Galeri Halaman 1 — kartu 2 **&** kartu "FISIK" | Anak besar menarik kerah anak kecil yang menangis |
| `03-cyberbullying.png` | Galeri Halaman 1 — kartu 3 **&** kartu "CYBER" | Anak perempuan beruntai merah menunduk sambil difoto dengan ponsel |
| `04-bullying-sosial.png` | Galeri Halaman 1 — kartu 4 **&** kartu "SOSIAL" | Sekelompok siswa berseragam menunjuk & menertawakan teman berhijab |
| `05-bullying-verbal.png` | Kartu "VERBAL" | Anak tertawa + gelembung kata-kata menyakiti *(opsional)* |

> **Nama file wajib sama persis** (termasuk huruf besar/kecil).
> Kalau nama berbeda, file tidak terbaca dan placeholder SVG yang muncul.

---

## 📐 Saran format

| Kriteria | Saran |
|---|---|
| Format | `.png` (transparan) atau `.webp` |
| Rasio | **1 : 1 (persegi)** atau 4 : 3 — dibingkai otomatis oleh `.gal-img` |
| Ukuran | 800 × 800 px sampai 1200 × 1200 px (cukup untuk cetak A4) |
| Berat | Ideal di bawah 300 KB per file (gunakan kompresi) |
| Warna | Latar putih/transparan agar menyatu dengan kartu |

---

## 🔄 Cara kerjanya

`index.html` menuliskan foto lebih dulu, baru placeholder SVG:

```html
<img src="img/01-stop-bullying.png" alt="..." data-fallback>
<svg class="gal-ph" viewBox="0 0 300 210" hidden>...</svg>
```

* File **ada** → foto yang ditampilkan.
* File **tidak ada** → `app.js` menangkap galat `error`, menyembunyikan `<img>`,
  lalu menampilkan SVG placeholder.

Jadi **tidak perlu menyentuh kode** untuk mengganti placeholder dengan foto —
cukup simpan file-nya di folder ini dengan nama yang sesuai.

---

## ⚠️ Catatan hak cipta

Pastikan ilustrasi yang dipakai **milik sendiri, berlisensi bebas, atau sudah
diizinkan** (misalnya dari generator AI dengan ketentuan lisensi yang jelas).
Cantumkan sumber di `config.js` bila perlu.

---

## 📁 Sub-folder (opsional)

Boleh dibuat sub-folder, tapi path pada `index.html` harus ikut disesuaikan:

```
img/
├── 01-stop-bullying.png
├── 02-bullying-fisik.png
├── 03-cyberbullying.png
├── 04-bullying-sosial.png
└── 05-bullying-verbal.png
```
