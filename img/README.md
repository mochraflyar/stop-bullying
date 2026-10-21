# 📁 Folder `img/` — Foto Ilustrasi Poster

Folder ini menyimpan **file foto/ilustrasi asli** yang dipakai di galeri
Halaman 1 (Sampul) dan di kartu "Bentuk Bullying".

Kalau file fotonya dihapus atau diganti nama, halaman otomatis menampilkan
**ilustrasi SVG placeholder** yang tertanam di `index.html` — jadi tidak pernah
ada gambar yang rusak.

---

## ✅ Foto yang sudah terpasang

| File | Dipakai di | Isi gambar | Ukuran |
|---|---|---|---|
| `01-stop-bullying.jpg` | Galeri Halaman 1 — kartu 1 | Megafon bertuliskan **STOP BULLYING**, anak menarik rambut temannya, anak lain menangis | 1068 × 756 |
| `02-bullying-fisik.jpg` | Galeri kartu 2 **&** kartu "FISIK" | Anak besar menarik kerah anak kecil yang menangis | 1400 × 1243 |
| `03-cyberbullying.jpg` | Galeri kartu 3 **&** kartu "CYBER" | Anak perempuan beruntai merah menunduk sambil difoto dengan ponsel | 1400 × 879 |
| `04-bullying-sosial.jpg` | Galeri kartu 4 **&** kartu "SOSIAL" | Sekelompok siswa berseragam menunjuk & menertawakan teman berhijab | 1400 × 750 |

> Kartu **"VERBAL"** memakai ilustrasi SVG bawaan (`#i-illus-verbal` di
> `index.html`) — sengaja dibedaakan dari foto di atas agar tiap kartu punya
> gaya visual yang berbeda. Kalau ingin menggantinya dengan foto, cukup
> tambahkan tag `<img>` di dalam `.bc-img` kartu tersebut.

> Asli (tanpa kompresi) tersimpan di folder **`Aset Poster/`** — jangan dihapus
> kalau ingin mengolah ulang. File di `img/` sudah dikompres (JPEG kualitas 84,
> sisi maks. 1400 px) supaya halaman tetap ringan di HP.

---

## 📌 Kalau ingin mengganti foto

| Langkah | Cara |
|---|---|
| 1 | Simpan file baru di folder `img/` dengan **nama persis** seperti tabel di atas |
| 2 | Kalau formatnya bukan `.jpg`, samakan juga ekstensi di `index.html` (bagian `src="img/..."`) |
| 3 | Muat ulang halaman (Ctrl+F5 untuk memaksa refresh cache) |

Nama file **wajib sama persis** (termasuk huruf besar/kecil). Kalau berbeda,
file tidak terbaca dan placeholder SVG yang muncul.

---

## 📐 Format yang disarankan

| Kriteria | Saran |
|---|---|
| Format | `.jpg` (kualitas 80–85) atau `.webp` |
| Rasio | Bebas — kotak 4:3 pakai `object-fit: contain`, jadi foto **tidak pernah terpotong** |
| Ukuran | Sisi maks. **1400 px** (cukup untuk cetak A4, tetap ringan) |
| Berat | Ideal di bawah **200 KB** per file |
| Warna | Latar putih/transparan agar menyatu dengan kartu |

---

## 🔄 Cara kerjanya

`index.html` menuliskan foto lebih dulu, baru placeholder SVG:

```html
<img src="img/01-stop-bullying.jpg" alt="..." data-fallback>
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
diizinkan**. Cantumkan sumber di `config.js` bila perlu.

---

## 📁 Struktur

```
img/
├── 01-stop-bullying.jpg
├── 02-bullying-fisik.jpg
├── 03-cyberbullying.jpg
├── 04-bullying-sosial.jpg
└── README.md

Aset Poster/            ← file asli (sumber, tanpa kompresi)
├── WhatsApp_Image_..._upscaled.jpeg
└── ...
```
