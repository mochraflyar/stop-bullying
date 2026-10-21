/* ============================================================
   STOP BULLYING — Konfigurasi
   ------------------------------------------------------------
   SATU-SATUNYA file yang perlu diedit untuk menyalakan backend.

   CARA MENGISI
   1. Buka dashboard Supabase > Project Settings > API
   2. Salin "Project URL"  -> ke supabaseUrl
   3. Salin "anon public" key (kunci kedua, bukan service_role)
      -> ke supabaseAnonKey
   4. Isi kontak sekolah di bawah
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
     menormalkan sendiri, jadi tidak akan terjadi "/rest/v1/rest/v1". */
  supabaseUrl: "https://xteetateumdzgczwcfdm.supabase.co",
  supabaseAnonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0ZWV0YXRldW1kemdjendjZmRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI1MjA3ODcsImV4cCI6MjEwODA5Njc4N30.ZU1hkxa6XwdYEtfALVg4L0_gKD_BlkeoLvbe3RAiFR4",

  /* ---------- Identitas tugas kelompok ---------- */
  penerbit: "Universitas Siliwangi",
  namaKelompok: "Kelompok 3",
  judulTugas: "Poster Edukasi & Pencegahan Bullying",
  fakultas: "Fakultas Ilmu Sosial dan Ilmu Politik",
  angkatan: "2026",

  /* Daftar anggota kelompok — ganti dengan nama & NIM asli.
     Boleh format: "Nama — NIM" atau cukup "Nama". */
  anggota: [
    "Nama Anggota 1",
    "Nama Anggota 2",
    "Nama Anggota 3",
    "Nama Anggota 4",
    "Nama Anggota 5"
  ],

  /* ---------- Konteks laporan ---------- */
  /* Sekolah sasaran tempat poster ini digunakan (bukan penerbit). */
  namaSekolah: "SMP Negeri 1",
  namaLayanan: "Bimbingan & Konseling",

  /* ---------- Kanal manual ---------- */
  /* Format internasional tanpa "+" dan tanpa spasi, mis. 6285659070362 */
  whatsapp: "6285659070362",
  email: "bk@sekolah.sch.id",

  /* ---------- Batas ---------- */
  maxIsi: 500
};
