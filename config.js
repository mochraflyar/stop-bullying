/* ============================================================
   STOP BULLYING — Konfigurasi
   ------------------------------------------------------------
   SATU-SATUNYA file yang perlu diedit untuk menyalakan backend
   dan mengisi identitas tugas kelompok.

   CARA MENGISI
   1. Buka dashboard Supabase > Project Settings > API
   2. Salin "Project URL"  -> ke supabaseUrl
   3. Salin "anon public" key (kunci kedua, bukan service_role)
      -> ke supabaseAnonKey
   4. Cek ulang identitas tugas kelompok di bawah
   5. Simpan, lalu refresh halaman

   CATATAN KEAMANAN
   - "anon public" key BOLEH dipublikasikan (kuncinya memang untuk
     sisi peramban). Yang melindungi isi laporan adalah aturan RLS
     di setup.sql: peran "anon" hanya boleh menambah (insert),
     tidak pernah bisa membaca laporan orang lain.
   - JANGAN pernah menaruh "service_role" key di file ini.
   ============================================================ */

window.KONFIG = {

  /* ---------- Supabase ---------- */
  /* Isi dengan "Project URL" dari Dashboard Supabase > Settings > API.
     Boleh ditulis lengkap dengan "/rest/v1" atau tidak — api.js
     menormalkan sendiri, jadi tidak akan terjadi "/rest/v1/rest/v1".

     Publishable key (format "sb_publishable_...") maupun anon key
     lama (format "eyJ...") sama-sama bisa dipakai di sini. */
  supabaseUrl: "https://xteetateumdzgczwcfdm.supabase.co",
  supabaseAnonKey: "sb_publishable_-AJljeS5ZBm5PNLil9W7mw_4J-XdXe_",

  /* ---------- Identitas tugas kelompok ---------- */
  penerbit: "Universitas Siliwangi",
  judulTugas: "Tugas Projek Pengabdian",
  temaTugas: "Tema Hukum (Bullying)",
  namaKelompok: "Kelompok 5",
  kelas: "Kelas B",
  prodi: "Program Studi Pendidikan Matematika",
  fakultas: "Fakultas Keguruan dan Ilmu Pendidikan",

  /* Daftar anggota kelompok (nama + NIM) */
  anggota: [
    { nama: "Shaila Alexa Anandita", nim: "262151111022" },
    { nama: "Fani Febriani", nim: "262151111038" },
    { nama: "Rista Auliya Maisyaroh", nim: "262151111062" },
    { nama: "Lisna Aulia", nim: "262151111082" },
    { nama: "Ripka Anggiana", nim: "262151111118" },
    { nama: "Clarisa Nur Calista", nim: "262151111138" }
  ],

  /* ---------- Kanal pengaduan ---------- */
  /* Pengaduan cukup disampaikan kepada Tim GDS atau Wali Kelas. */
  namaSekolah: "SMAN 8 Tasikmalaya",
  namaLayanan: "Tim GDS SMAN 8 Tasikmalaya",

  /* Format internasional tanpa "+" dan tanpa spasi, mis. 6285659070362 */
  whatsapp: "6285659070362",

  /* Email opsional. Dikosongkan karena pengaduan cukup lewat
     Tim GDS / Wali Kelas. Isi bila ingin menyediakan kanal email. */
  email: "",

  /* ---------- Batas ---------- */
  maxIsi: 500
};
