/* ============================================================
   STOP BULLYING — Data seluruh topik halaman detail
   ------------------------------------------------------------
   Satu sumber kebenaran untuk isi setiap "halaman" yang dibuka
   dari poster utama. Diakses lewat: window.TOPIK (script biasa,
   bukan module, supaya tetap jalan saat dibuka lewat file://)
   ============================================================ */

window.TOPIK = {

  /* -------------------------------------------------------
     0. TUJUAN MATERI
     ------------------------------------------------------- */
  "tujuan": {
    judul: "TUJUAN MATERI HARI INI",
    sub: "Apa yang akan kita kuasai di akhir sesi",
    tag: "Pengantar",
    definisi: "Sesi ini bukan sekadar hafalan. Setelah selesai, kamu diharapkan bisa mengenali bullying di sekitar, membedakan mana bercanda dan mana perundungan, serta tahu langkah yang benar saat menghadapinya.",
    bagian: [
      {
        id: "b-tujuan",
        judul: "Tiga Tujuan Utama",
        list: [
          "<strong>Memahami apa itu bullying yang sebenarnya.</strong> Bukan sekadar menghafal definisi, tapi bisa menjelaskannya dengan bahasa sendiri dan menunjukkan elemen kuncinya.",
          "<strong>Bisa membedakan dengan jelas mana <em>Bullying</em> dan mana <em>Bercanda</em>.</strong> Bukan berdasarkan terasa lucu atau tidak, tapi berdasarkan ciri, niat pelaku, dan reaksi korbannya.",
          "<strong>Tahu dampaknya, cara menghadapinya, dan bagaimana cara mencegahnya bersama.</strong> Mengetahui apa yang harus dilakukan baik sebagai korban, pelaku, maupun bystander."
        ]
      },
      {
        id: "b-alur",
        judul: "Alur Bahasan",
        list: [
          "<strong>Definisi &amp; elemen kunci</strong> — seperti apa bullying yang sebenarnya.",
          "<strong>Bentuk-bentuk bullying</strong> — fisik, verbal, sosial, dan cyber.",
          "<strong>Bercanda vs bullying</strong> — bagian paling penting dari sesi ini.",
          "<strong>Dampak</strong> — bagi korban, pelaku, dan bystander.",
          "<strong>Cara menghadapi &amp; pencegahan</strong> — langkah nyata di sekolah.",
          "<strong>Dasar hukum</strong> — konsekuensi hukum di Indonesia."
        ]
      }
    ],
    terkait: ["bercanda", "apa-itu", "dampak", "hindari-anak"]
  },

  /* -------------------------------------------------------
     0b. BERCANDA ATAU BULLYING?  (kunci materi)
     ------------------------------------------------------- */
  "bercanda": {
    judul: "BERCANDA ATAU BULLYING?",
    sub: "Cara membedakannya dalam satu detik",
    tag: "Kunci Materi",
    definisi: "Tidak semua yang terlihat seperti bercanda itu benar-benar bercanda. Perbedaannya bukan pada apa yang dikatakan, tetapi pada niat pelaku, cara korbannya bereaksi, dan apakah jarak kekuasaan di antara mereka berimbang.",
    catatan: "Bercanda yang baik itu berhenti ketika temannya tidak nyaman. Kalau terus dilanjutkan setelah korban tidak nyaman, itu sudah bukan bercanda, itu bullying.",
    bagian: [
      {
        id: "b-bandingkan",
        judul: "Ciri Bercanda vs Ciri Bullying",
        banding: {
          kiri: {
            judul: "Ciri Bercanda (Bukan Bullying)",
            items: [
              "Dilakukan <strong>suka sama suka</strong>, semua yang terlibat ikut tertawa.",
              "Tidak ada niat untuk menyakiti atau merendahkan.",
              "Jika salah satu bilang &ldquo;jangan&rdquo; atau &ldquo;ga lucu&rdquo;, <strong>langsung berhenti</strong> dan meminta maaf.",
              "Tidak ada ketimpangan kekuasaan, semua setara.",
              "Terjadi di situasi yang nyaman untuk semua pihak."
            ]
          },
          kanan: {
            judul: "Ciri Bullying (Berbahaya)",
            items: [
              "Hanya <strong>satu pihak yang tertawa</strong>, pihak lain terlihat sedih, diam, marah, atau tersinggung.",
              "Ada niat menyakiti, menjatuhkan, atau menunjukkan dominasi.",
              "Terus berlanjut walaupun korban sudah bilang berhenti, tidak suka, atau menjauh.",
              "Ada <strong>ketimpangan kekuatan</strong>: pelaku lebih kuat, lebih populer, lebih banyak teman.",
              "Korban merasa takut, malu, dan tidak berdaya untuk melawan."
            ]
          }
        }
      },
      {
        id: "b-contoh",
        judul: "Contoh di Kehidupan Sekolah",
        contoh: [
          {
            label: "Bercanda",
            ok: true,
            teks: "Memanggil teman dengan panggilan lucu dan teman itu juga memanggil balik dengan panggilan lucu."
          },
          {
            label: "Bullying",
            ok: false,
            teks: "Memanggil teman dengan julukan jelek terus-menerus di depan kelas sampai teman itu menangis dan tidak berani masuk kelas."
          }
        ]
      },
      {
        id: "b-jika-pelaku",
        judul: "Kalau Kamu Pelaku &ldquo;Bercanda&rdquo;",
        list: [
          "Jangan tersinggung kalau ditegur teman &mdash; itu tandanya temanmu <strong>tidak nyaman</strong>.",
          "<strong>Berhenti</strong> dan minta maaf. Itu cara menjadi teman baik.",
          "Jangan membela diri dengan alasan &ldquo;cuma bercanda&rdquo; &mdash; kalau memang tidak menyakitkan, kamu tidak perlu dibantah.",
          "Cara terbaik untuk menjadi teman baik adalah berhenti &mdash; bukan membela diri dengan kata &ldquo;baper&rdquo;."
        ]
      },
      {
        id: "b-empati",
        judul: "Empati di Depan Mata",
        teks: "Bayangkan kamu yang digilir, diejek, atau dikucilkan setiap hari. Pasti tidak enak. Sialnya, <strong>tidak semua orang senang melihat orang lain tersakiti</strong> &mdash; banyak yang hanya memilih tidak ikut campur. Bercanda yang kita anggap sepele bisa jadi luka yang bertahan lama bagi orang lain."
      }
    ],
    terkait: ["apa-itu", "fisik", "verbal", "sosial", "cyber", "dampak"]
  },

  /* -------------------------------------------------------
     1. APA ITU BULLYING?
     ------------------------------------------------------- */
  "apa-itu": {
    judul: "APA ITU BULLYING?",
    sub: "Pengertian, elemen kunci, dan bentuknya",
    tag: "Dasar",
    definisi: "Bullying (perundungan) adalah tindakan agresif yang dilakukan secara sengaja dan berulang kali oleh seseorang atau sekelompok orang yang memiliki kekuatan atau kekuasaan lebih besar terhadap individu lain yang merasa tidak berdaya, dengan tujuan merugikan atau menyakiti secara fisik maupun psikologis.",
    catatan: "Bullying tidak hanya berupa pukulan atau kekerasan fisik. Kata-kata kasar, pengasingan, dan penyebaran berita bohong melalui media sosial juga termasuk bullying. Kalau salah satu dari tiga elemen kunci hilang — terutama kesengajaan menyakiti dan keberulangan — kemungkinan besar itu bukan bullying, melainkan bercanda atau konflik biasa.",
    bagian: [
      {
        id: "b-define",
        judul: "Definisi",
        teks: "Bullying (perundungan) adalah tindakan agresif yang dilakukan secara <strong>sengaja</strong> dan <strong>berulang kali</strong> oleh seseorang atau sekelompok orang yang memiliki kekuatan atau kekuasaan lebih besar terhadap individu lain yang merasa tidak berdaya, dengan tujuan <strong>merugikan atau menyakiti</strong> secara fisik maupun psikologis."
      },
      {
        id: "b-elemen",
        judul: "Elemen Kunci Bullying",
        list: [
          "<strong>Ketidakseimbangan Kekuatan (Imbalance of Power)</strong> — Pelaku mengandalkan usia, ukuran fisik, status sosial, atau popularitas.",
          "<strong>Keberulangan (Repetitive)</strong> — Terjadi lebih dari sekali atau berpotensi terjadi berulang kali.",
          "<strong>Kesengajaan (Intentional)</strong> — Ada niat yang jelas untuk menyakiti atau merendahkan korban."
        ]
      },
      {
        id: "b-bentuk",
        judul: "Bentuk-Bentuk Bullying",
        list: [
          "<strong>Bullying Fisik</strong> — Tindakan agresif yang melukai fisik atau merusak barang milik korban.",
          "<strong>Bullying Verbal</strong> — Serangan menggunakan kata-kata untuk merendahkan atau menyakiti perasaan.",
          "<strong>Bullying Relasional / Sosial</strong> — Tindakan yang merusak reputasi atau hubungan sosial seseorang secara halus.",
          "<strong>Cyberbullying</strong> — Perundungan melalui media digital atau platform daring."
        ]
      }
    ],
    terkait: ["fisik", "verbal", "sosial", "cyber", "non-verbal"]
  },

  /* -------------------------------------------------------
     2. BULLYING FISIK
     ------------------------------------------------------- */
  "fisik": {
    judul: "BULLYING FISIK",
    sub: "Kekerasan fisik dan perusak barang",
    tag: "Bentuk Bullying",
    definisi: "Bullying fisik adalah bentuk bullying yang melibatkan tindakan agresif melukai fisik atau merusak barang milik korban, seperti memukul, menendang, menampar, mendorong, atau memalak. Bentuk ini paling mudah dikenali karena meninggalkan tanda yang terlihat.",
    bagian: [
      {
        id: "b-contoh",
        judul: "Contoh Tindakan",
        list: [
          "Memukul, menendang, atau menampar korban.",
          "Mendorong korban dengan kuat hingga ia terjatuh.",
          "Memalak korban dengan kata-kata kasar sambil melakukan kekerasan fisik.",
          "Merusak, menyembunyikan, atau membuang barang milik korban.",
          "Melempar benda ke arah korban.",
          "Menahan korban dengan kuat sehingga ia tidak bisa bergerak."
        ]
      },
      {
        id: "b-dampak",
        judul: "Dampak bagi Korban",
        list: [
          "Luka fisik yang memerlukan perawatan dan bisa kekal membekas.",
          "Keluhan somatis seperti sakit kepala atau sakit perut akibat stres.",
          "Takut berada di tempat atau kelas yang sama dengan pelaku.",
          "Rendahnya rasa percaya diri dan merasa tidak aman.",
          "Menurunnya kehadiran di sekolah karena menghindari pelaku."
        ]
      },
      {
        id: "b-tips",
        judul: "Cara Menanganinya",
        list: [
          "Jauhi lokasi kejadian dan jangan membalas dengan kekerasan.",
          "Cari teman atau orang dewasa yang dapat dipercaya untuk membantu.",
          "Laporkan kepada guru, orang tua, atau guru BK segera setelah kejadian.",
          "Simpan bukti (foto, kronologi kejadian) bila ada, agar mudah saat melapor."
        ]
      }
    ],
    terkait: ["verbal", "sosial", "cyber", "dampak", "hindari-anak"]
  },

  /* -------------------------------------------------------
     3. BULLYING VERBAL
     ------------------------------------------------------- */
  "verbal": {
    judul: "BULLYING VERBAL",
    sub: "Kekerasan dengan kata-kata",
    tag: "Bentuk Bullying",
    definisi: "Verbal bullying adalah serangan yang menggunakan kata-kata untuk merendahkan atau menyakiti perasaan seseorang, seperti menjuluki, memaki, menghina, mengancam, atau menyebarkan rumor. Tidak ada kontak fisik, namun luka yang ditusuk pada hati korban bisa sangat dalam dan sulit terlihat oleh orang lain.",
    bagian: [
      {
        id: "b-contoh",
        judul: "Contoh Perilaku",
        list: [
          "Menjuluki dengan nama panggilan yang menyebalkan dan mengejek secara berulang.",
          "Memaki dan mengucapkan kata-kata kasar atau ujaran kebencian.",
          "Menghina, termasuk <strong>body shaming</strong> (menilai tubuh, berat badan, atau penampilan).",
          "Mengancam secara lisan, baik langsung maupun melalui pesan.",
          "Menyebarkan rumor atau berita bohong tentang seseorang.",
          "Membuat lelucon yang menyakiti perasaan seseorang secara berulang.",
          "Mempermainkan nama atau gelar seseorang untuk mengejek di depan umum."
        ]
      },
      {
        id: "b-dampak",
        judul: "Dampak Spesifik pada Korban",
        list: [
          "Dampak mental yang dalam: kecemasan berlebihan, depresi ringan hingga sedang, dan rendahnya harga diri.",
          "Kesulitan berkonsentrasi di kelas sehingga nilai akademik menurun.",
          "Menghindari interaksi sosial dan merasa terisolasi dari teman sebaya.",
          "Kehilangan keberanian untuk berbicara atau menyampaikan pendapat di depan kelas.",
          "Tumbuhnya perasaan benci terhadap diri sendiri."
        ]
      },
      {
        id: "b-tips",
        judul: "Cara Menanganinya",
        list: [
          "Jangan ikut menyertai ejekan — diam saja sudah mengubah situasi.",
          "Tegaskan dengan tenang: “Itu tidak lucu. Tolong berhenti.”",
          "Ajak korban bicara di tempat yang aman.",
          "Laporkan ke guru, karena verbal bullying sering tidak terlihat."
        ]
      }
    ],
    terkait: ["fisik", "sosial", "cyber", "dampak", "hindari-anak"]
  },

  /* -------------------------------------------------------
     4. BULLYING SOSIAL / RELASIONAL
     ------------------------------------------------------- */
  "sosial": {
    judul: "BULLYING SOSIAL / RELASIONAL",
    sub: "Pengasingan, gosip, dan perusak reputasi",
    tag: "Bentuk Bullying",
    definisi: "Bullying relasional atau sosial adalah tindakan yang merusak reputasi atau hubungan sosial seseorang secara halus — tanpa sentuhan fisik dan tanpa suara keras. Korban tetap merasa tersakiti, tetapi sering kali tidak bisa menunjukkan luka yang jelas.",
    bagian: [
      {
        id: "b-contoh",
        judul: "Contoh Perilaku",
        list: [
          "Mengucilkan korban dari kelompok pertemanan.",
          "Menyeboarkan fitnah dan berita bohong tentang korban.",
          "Mempermalukan korban di depan umum.",
          "Mengabaikan korban secara sengaja dalam interaksi sosial.",
          "Memprovokasi orang lain untuk memusuhi korban.",
          "Memilih beberapa teman untuk bermain-main dan mengajak orang lain ikut."
        ]
      },
      {
        id: "b-dampak",
        judul: "Dampak bagi Korban",
        list: [
          "Merasa tidak dihargai dan tidak punya tempat di kelompok.",
          "Kehilangan dukungan dari teman yang biasanya menjadi tempatnya bercerita.",
          "Nama baik yang rusak dan sulit dipulihkan kembali.",
          "Kecemasan dan rasa kesepian yang berkepanjangan.",
          "Menarik diri dari kegiatan sekolah dan kehidupannya."
        ]
      },
      {
        id: "b-tips",
        judul: "Cara Menanganinya",
        list: [
          "Ajak korban bergabung dengan kelompokmu — dukungan teman sangat berpengaruh.",
          "Tolak ikut menyebarkan rumor, sekecil apa pun.",
          "Bantu korban merasa yakin tentang bagaimana ia terlihat di mata orang lain.",
          "Bicarakan dengan guru BK atau wali kelas untuk penanganan lanjutan."
        ]
      }
    ],
    terkait: ["verbal", "fisik", "cyber", "dampak", "hindari-anak"]
  },

  /* -------------------------------------------------------
     5. CYBER BULLYING
     ------------------------------------------------------- */
  "cyber": {
    judul: "CYBER BULLYING",
    sub: "Bullying di dunia digital",
    tag: "Bentuk Bullying",
    definisi: "Cyber bullying adalah perundungan yang dilakukan melalui media digital atau platform daring, seperti media sosial, aplikasi pesan, surel, atau gim daring. Pelaku memakai teknologi untuk mengancam, menghina, atau menyebarkan konten yang merugikan korban.",
    catatan: "Berbeda dengan bullying konvensional, cyber bullying dapat terjadi kapan saja dan di mana saja, bahkan ketika korban berada di rumah. Korban bisa saja tidak tahu siapa pelakunya, sehingga merasa tidak ada tempat yang aman.",
    bagian: [
      {
        id: "b-contoh",
        judul: "Contoh Perilaku",
        list: [
          "Mengirim pesan ancaman, kata kasar, atau ujaran kebencian melalui media sosial dan aplikasi pesan.",
          "Menyebarkan foto atau video pribadi tanpa izin (<strong>doxxing</strong>).",
          "Membuat akun palsu untuk mengejek atau menyebo bohong tentang seseorang.",
          "Mengomentari postingan seseorang dengan kata-kata yang menyakitkan.",
          "Menyebarkan konten yang mempermalukan korban ke banyak orang sekaligus.",
          "Membuat grup obrolan untuk mem-bully satu individu secara bersama-sama."
        ]
      },
      {
        id: "b-dampak",
        judul: "Dampak Spesifik pada Korban",
        list: [
          "Kecemasan parah setiap kali menerima notifikasi ponsel atau media sosial.",
          "Merasa takut untuk membuka aplikasi pesan atau media sosial.",
          "Gangguan tidur karena terus memikirkan konten yang menyebar tentang dirinya.",
          "Menarik diri dari kehidupan sosial nyata dan digital.",
          "Jejak digital yang sulit dihapus dan bisa bertahan lama setelah kejadian selesai."
        ]
      },
      {
        id: "b-tips",
        judul: "Cara Menanganinya",
        list: [
          "Blokir, laporkan, dan batasi akses pelaku di media sosial.",
          "Simpan bukti (tangkapan layar) sebelum konten dihapus.",
          "Jangan membalas secara provokatif — balasan hanya menambah perhatian.",
          "Bicara dengan orang tua, guru, atau pendidik yang dipercaya."
        ]
      }
    ],
    terkait: ["verbal", "sosial", "non-verbal", "dampak", "pengaduan"]
  },

  /* -------------------------------------------------------
     6. NON-VERBAL BULLYING
     ------------------------------------------------------- */
  "non-verbal": {
    judul: "NON-VERBAL BULLYING",
    sub: "Tanpa kata-kata, tetap melukai",
    tag: "Bentuk Bullying",
    definisi: "Non-verbal bullying adalah bullying yang dilakukan tanpa menggunakan kata-kata, biasanya melalui gerakan tubuh, ekspresi wajah, atau tindakan yang menyusahkan dan menakutkan seseorang. Bentuk ini tetap termasuk bullying karena dilakukan secara sengaja, berulang, dan dengan ketidakseimbangan kekuatan.",
    catatan: "Karena tidak mengandalkan ujaran, bentuk ini sering kali sulit dideteksi oleh guru atau orang tua, padahal dampak psikologisnya bisa sama parahnya dengan bentuk bullying lainnya.",
    bagian: [
      {
        id: "b-contoh",
        judul: "Contoh Perilaku",
        list: [
          "Menatap atau melirik seseorang dengan ekspresi jijik, marah, atau menghina.",
          "Mengecualikan atau mengasingkan seseorang dari kegiatan kelompok secara sengaja.",
          "Membuat gerakan jahat atau lelucon kasar terhadap seseorang.",
          "Menyembunyikan atau merusak barang milik orang lain.",
          "Mengabaikan seseorang secara sengaja dalam interaksi sosial.",
          "Menunjukkan gerakan kelakar yang menjatuhkan martabat orang lain."
        ]
      },
      {
        id: "b-dampak",
        judul: "Dampak bagi Korban",
        list: [
          "Perasaan tidak aman, malu-malu, serta ketakutan untuk hadir di sekolah.",
          "Ragu untuk bergabung dengan kelompok teman.",
          "Susah konsentrasi karena selalu mengintip sekeliling.",
          "Kehilangan rasa percaya diri dalam bersikap dan berinteraksi."
        ]
      },
      {
        id: "b-tips",
        judul: "Cara Menanganinya",
        list: [
          "Sampaikan ketidaknyamanan secara langsung kepada orang dewasa.",
          "Dampingi korban agar merasa didukung dan tidak sendirian.",
          "Ajarkan korban cara tampil tegas: hadapi situasi dengan tenang dan berani.",
          "Catat kejadian berulang beserta waktu dan tempatnya sebagai bukti."
        ]
      }
    ],
    terkait: ["sosial", "verbal", "cyber", "dampak", "hindari-anak"]
  },

  /* -------------------------------------------------------
     7. DAMPAK BULLYING
     ------------------------------------------------------- */
  "dampak": {
    judul: "DAMPAK BULLYING",
    sub: "Konsekuensi bagi korban, pelaku, dan bystander",
    tag: "Dampak",
    definisi: "Bullying membawa dampak negatif yang signifikan bagi semua pihak yang terlibat — bukan hanya korban, tetapi juga pelaku dan orang-orang yang menyaksinya tanpa ikut.",
    bagian: [
      {
        id: "bagaikan-korban",
        judul: "Bagi Korban",
        list: [
          "<strong>Kesehatan Mental:</strong> kecemasan berlebih, depresi, rasa takut, rendahnya harga diri (<em>low self-esteem</em>), hingga pikiran untuk menyakiti diri sendiri atau bunuh diri.",
          "<strong>Akademik:</strong> penurunan prestasi belajar, sering bolos sekolah, ketakutan pergi ke sekolah, hingga putus sekolah.",
          "<strong>Fisik:</strong> keluhan somatis (sakit kepala, sakit perut akibat stres), luka fisik, gangguan tidur, dan penurunan nafsu makan.",
          "<strong>Sosial:</strong> menarik diri dari pergaulan dan merasa terisolasi dari teman sebaya."
        ]
      },
      {
        id: "bagaikan-pelaku",
        judul: "Bagi Pelaku",
        list: [
          "Tumbuh menjadi pribadi yang agresif dan impulsif, serta mengandalkan kekerasan untuk menyelesaikan masalah.",
          "Berisiko tinggi terlibat dalam perilaku kriminal, penyalahgunaan zat, dan kekerasan di masa dewasa.",
          "Kesulitan membangun hubungan interpersonal yang sehat.",
          "Berisiko mengalami masalah perilaku di masa depan bila tidak mendapat bimbingan yang tepat."
        ]
      },
      {
        id: "bagaikan-saksi",
        judul: "Bagi Saksi (Bystander)",
        list: [
          "Merasa bersalah, takut, atau tidak berdaya saat menjadi saksi kasus bullying.",
          "Takut menjadi sasaran berikutnya.",
          "Mengalami ketidaknyamanan mental akibat menyaksikan ketidakadilan secara terus-menerus.",
          "Diamnya tanpa menolong dianggap menyetujui tindakan tersebut."
        ]
      }
    ],
    terkait: ["apa-itu", "fisik", "verbal", "sosial", "cyber"]
  },

  /* -------------------------------------------------------
     8. OLEH ANAK — CARA MENGHINDARI
     ------------------------------------------------------- */
  "hindari-anak": {
    judul: "CARA MENGHINDARI DAN MENGHADAPI BULLYING",
    sub: "Perspektif siswa",
    tag: "Oleh Anak",
    definisi: "Kalau kamu menghadapi bullying atau merasa berisiko menjadi sasarannya, ada beberapa langkah yang bisa kamu tempuh sendiri. Tidak ada satu pun langkah yang mengharuskan kamu melawan pelaku secara fisik.",
    bagian: [
      {
        id: "b-langkah",
        judul: "5 Langkah yang Perlu Dilakukan",
        list: [
          "<strong>1. Tunjukkan sikap percaya diri.</strong> Berdiri tegak, tatap mata pelaku, dan sampaikan dengan tegas agar mereka berhenti — tanpa perlu membalas dengan kekerasan.",
          "<strong>2. Jangan tunjukkan reaksi yang diharapkan pelaku.</strong> Pelaku biasanya merasa puas jika korban menangis, marah, atau panik. Tetap tenang dan tinggalkan lokasi.",
          "<strong>3. Selalu berada di lingkungan aman.</strong> Hindari area yang sepi dan usahakan selalu bersama teman atau kelompok yang mendukung (<em>support system</em>).",
          "<strong>4. Simpan bukti.</strong> Khusus untuk cyber bullying: ambil tangkapan layar atas pesan, komentar, atau konten yang berisi perundungan sebagai bukti pelaporan.",
          "<strong>5. Bicara dan laporkan.</strong> Jangan memendam masalah sendiri. Segera ceritakan kepada orang dewasa yang dipercaya — orang tua, guru BK, atau wali kelas."
        ]
      },
      {
        id: "b-saksi",
        judul: "Saat Menjadi Saksi",
        list: [
          "<strong>Jangan ikut menertawakan</strong> — Jangan menjadi bagian dari kegelapan dengan menyertai ejekan atau meremehkan korban.",
          "<strong>Ajak korban bergabung dengan kelompokmu</strong> — Tunjukkan dukungan dengan mengajak korban duduk atau bercerita bersama teman-temanmu.",
          "<strong>Laporkan ke guru atau orang tua secara aman</strong> — Beritahu orang dewasa yang dipercaya tentang kejadian yang kamu saksikan.",
          "<strong>Jika berani, intervensi dengan sopan</strong> — Campuri tangan dengan tenang untuk menghentikan situasi, tanpa menimbulkan kekerasan baru."
        ]
      },
      {
        id: "b-catatan",
        judul: "Catatan Penting",
        teks: "Tidak apa-apa kalau kamu merasa belum siap melawan sendiri. Yang paling penting adalah <strong>mengambil langkah yang aman</strong>: berpisah dari pelaku, mencari teman, dan memberitahukan orang dewasa. Membela korban dengan aman jauh lebih berharga daripada ikut-berteriak."
      }
    ],
    terkait: ["fisik", "verbal", "sosial", "cyber", "dampak", "pengaduan"]
  },

  /* -------------------------------------------------------
     9. OLEH TENAGA PENDIDIK — PENCEGAHAN
     ------------------------------------------------------- */
  "hindari-guru": {
    judul: "PENCEGAHAN BULLYING DI SEKOLAH",
    sub: "Peran guru, orang tua, dan seluruh ekosistem sekolah",
    tag: "Oleh Tenaga Pendidik",
    definisi: "Pencegahan bullying tidak bisa dilakukan satu orang saja. Pencegahan memerlukan sinergi dari seluruh ekosistem sekolah melalui pendekatan sistematis: kebijakan yang jelas, edukasi berkelanjutan, layanan pengaduan yang aman, pengawasan yang optimal, dan keterlibatan siswa sendiri.",
    bagian: [
      {
        id: "b-pilar",
        judul: "5 Pilar Pencegahan",
        list: [
          "<strong>Kebijakan Anti-Bullying yang Jelas</strong> — Membentuk Peraturan Sekolah dan SOP pencegahan serta penanganan kekerasan yang transparan.",
          "<strong>Edukasi dan Sosialisasi Berkelanjutan</strong> — Mengintegrasikan materi empati, toleransi, dan kesehatan mental dalam kurikulum serta kegiatan ekstrakurikuler.",
          "<strong>Layanan Pengaduan yang Aman</strong> — Menyediakan media pelaporan yang menjamin kerahasiaan identitas korban atau pelapor: kotak aduan, platform daring, atau konseling BK.",
          "<strong>Pengawasan Optimal</strong> — Meningkatkan pengawasan guru di area rawan seperti kantin, lorong sekolah, toilet, dan lapangan.",
          "<strong>Pembentukan Duta Anti-Bullying</strong> — Memberdayakan siswa sebagai konselor sebaya (<em>peer counselor</em>) untuk menyebarkan budaya saling menghargai."
        ]
      },
      {
        id: "b-konseling",
        judul: "Langkah Konseling",
        list: [
          "Dengarkan korban lebih dulu tanpa menghakimi.",
          "Konfirmasi kejadian dengan cara yang tidak mempermalukan.",
          "Ajak pelaku bertanggung jawab atas perbuatannya.",
          "Sepakati langkah perbaikan yang bisa dipantau bersama orang tua.",
          "Tutup kasus dengan pemantauan lanjutan selama beberapa minggu."
        ]
      },
      {
        id: "b-catatan",
        judul: "Catatan Penting",
        teks: "Konseling wajib bagi pelaku justru mengurangi risiko pengulangan. Sanksi yang konsisten dan rehabilitasi yang tepat akan membuat anak memahami bahwa bullying bukan bagian dari kehidupan sekolah."
      }
    ],
    terkait: ["dampak", "hukum", "pengaduan", "hindari-anak"]
  },

  /* -------------------------------------------------------
     10. DASAR HUKUM & JERAT HUKUM
     ------------------------------------------------------- */
  "hukum": {
    judul: "DASAR HUKUM BULLYING",
    sub: "Regulasi dan konsekuensinya di Indonesia",
    tag: "Hukum",
    definisi: "Pemerintah Indonesia mengatur perlindungan anak dari tindakan kekerasan dan perundungan melalui berbagai regulasi hukum. Pelaku bullying dapat dikenai sanksi administratif di sekolah maupun sanksi pidana, tergantung pada bentuk dan berat perbuatannya.",
    bagian: [
      {
        id: "b-dasar",
        judul: "A. Dasar Hukum",
        list: [
          "<strong>UU No. 35 Tahun 2014</strong> tentang Perubahan atas UU No. 23 Tahun 2002 tentang Perlindungan Anak.",
          "<strong>Permendikbudristek No. 46 Tahun 2023</strong> tentang Pencegahan dan Penanganan Kekerasan di Lingkungan Satuan Pendidikan (PPKSP).",
          "<strong>UU ITE</strong> — UU No. 19 Tahun 2016 tentang Informasi dan Transaksi Elektronik jo. UU No. 1 Tahun 2024, untuk kasus cyber bullying.",
          "<strong>KUHP</strong> (Kitab Undang-Undang Hukum Pidana) dan <strong>UU No. 11 Tahun 2012</strong> tentang Sistem Peradilan Pidana Anak (SPPA)."
        ]
      },
      {
        id: "b-jerat-anak",
        judul: "B. Jerat Hukum — Kekerasan Fisik atau Verbal terhadap Anak",
        list: [
          "<strong>Pasal 76C UU No. 35 Tahun 2014</strong> — Setiap orang dilarang melakukan atau turut serta melakukan kekerasan terhadap anak, baik secara fisik maupun verbal.",
          "<strong>Pasal 80 UU No. 35 Tahun 2014</strong> — Penjara paling lama 3 tahun 6 bulan dan/atau denda paling banyak Rp72.000.000; meningkat hingga 5 tahun bila korban mengalami luka berat, dan hingga 15 tahun bila akibatnya kematian. Sanksi final bergantung pada klasifikasi delik yang dilakukan."
        ]
      },
      {
        id: "b-jerat-cyber",
        judul: "B. Jerat Hukum — Cyberbullying",
        list: [
          "<strong>Pasal 27A jo. Pasal 45 ayat (4) UU ITE</strong> — Menyerang kehormatan atau nama baik di media digital: Penjara paling lama 2 tahun atau denda paling banyak Rp400.000.000.",
          "<strong>Pasal 29 jo. Pasal 45B UU ITE</strong> — Mengirim pesan berisi ancaman atau menakut-nakuti secara daring: Penjara paling lama 4 tahun atau denda paling banyak Rp750.000.000."
        ]
      },
      {
        id: "b-anak",
        judul: "C. Penanganan Pelaku Usia Sekolah",
        list: [
          "<strong>Pelaku di bawah umur (kurang dari 18 tahun)</strong> — Proses hukum menggunakan UU No. 11 Tahun 2012 tentang Sistem Peradilan Pidana Anak (SPPA).",
          "<strong>Diversi dan Keadilan Restoratif</strong> — SPPA mengutamakan pendekatan yang memprioritaskan pemulihan korban dan perbaikan pelaku.",
          "<strong>Catatan terbaru</strong> — Sebagian ketentuan SPPA kemudian diubah dengan UU No. 12 Tahun 2022."
        ]
      }
    ],
    catatan: "Informasi di atas bersifat umum dan bukan merupakan nasihat hukum profesional. Perkara bullying di sekolah sebaiknya ditangani lewat sekolah, guru BK, dan orang tua terlebih dahulu.",
    terkait: ["dampak", "hindari-guru", "pengaduan"]
  },

  /* -------------------------------------------------------
     11. PENGADUAN (formulir — dirender terpisah)
     ------------------------------------------------------- */
  "pengaduan": {
    judul: "LAPORAN PENGADUAN BULLYING",
    sub: "Laporkan secara anonim dan aman",
    tag: "Layanan Pengaduan",
    tipe: "form",
    definisi: "Laporan yang dikirim lewat formulir ini langsung masuk ke dashboard guru, tanpa perantara. Identitas pelapor dilindungi, dan laporan mode anonim tidak menyimpan nama sama sekali.",
    catatan: "Kalau kamu lebih nyaman bicara langsung, datang ke ruang BK atau hubungi wali kelas. Untuk kasus yang mendesak, hubungi nomor layanan pengaduan yang tercantum di poster.",
    bagian: [],
    terkait: ["dampak", "hukum", "hindari-anak"]
  }
};

/* Pemetaan hash -> [topik, id bagian yang dituju] */
window.HASH_TOPIK = {
  "tujuan": ["tujuan", null],
  "bercanda": ["bercanda", null],
  "bercanda-bandingkan": ["bercanda", "b-bandingkan"],
  "bercanda-contoh": ["bercanda", "b-contoh"],
  "apa-itu": ["apa-itu", null],
  "fisik": ["fisik", null],
  "verbal": ["verbal", null],
  "sosial": ["sosial", null],
  "cyber": ["cyber", null],
  "non-verbal": ["non-verbal", null],
  "dampak": ["dampak", null],
  "dampak-korban": ["dampak", "bagaikan-korban"],
  "dampak-pelaku": ["dampak", "bagaikan-pelaku"],
  "dampak-saksi": ["dampak", "bagaikan-saksi"],
  "hindari-anak": ["hindari-anak", null],
  "hindari-guru": ["hindari-guru", null],
  "hukum": ["hukum", null],
  "pengaduan": ["pengaduan", null]
};
