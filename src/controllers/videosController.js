let videosData = [
    {
        id: 1,
        id_courses: 1,
        judul_video: 'Pengenalan Microsoft Excel',
        deskripsi: 'Dalam video ini, kami akan memperkenalkan dasar-dasar Microsoft Excel, mencakup topik seperti membuat lembar kerja baru, memasukkan data, dan formatting dasar.',
        durasi: '10:30',
        episode: 1
    },
    {
        id: 2,
        id_courses: 1,
        judul_video: 'Rumus dan Fungsi Excel',
        deskripsi: 'Pelajari penggunaan rumus dan fungsi di Microsoft Excel untuk melakukan perhitungan dan otomatisasi tugas. Kami akan membahas fungsi umum seperti SUM, AVERAGE, dan lain-lain.',
        durasi: '12:45',
        episode: 2
    },
    {
        id: 3,
        id_courses: 1,
        judul_video: 'Visualisasi Data dengan Excel',
        deskripsi: 'Jelajahi cara membuat visualisasi data yang efektif di Microsoft Excel menggunakan grafik dan diagram. Pelajari cara memilih jenis grafik yang tepat dan menyesuaikan visual.',
        durasi: '14:20',
        episode: 3
    },
    {
        id: 4,
        id_courses: 1,
        judul_video: 'Teknik Excel Lanjutan',
        deskripsi: 'Telusuri teknik Excel lanjutan termasuk tabel pivot, makro, dan alat analisis data. Temukan cara mengoptimalkan alur kerja dan meningkatkan produktivitas.',
        durasi: '18:10',
        episode: 4
    },
    {
        id: 5,
        id_courses: 2,
        judul_video: 'Dasar-dasar Pemasaran Digital',
        deskripsi: 'Video ini memberikan pengantar tentang pemasaran digital, menjelaskan konsep-konsep utamanya, strategi, dan bagaimana berbeda dari pendekatan pemasaran tradisional.',
        durasi: '11:15',
        episode: 1
    },
    {
        id: 6,
        id_courses: 2,
        judul_video: 'SEO dan Optimisasi Website',
        deskripsi: 'Pelajari tentang optimisasi mesin pencari (SEO) dan teknik optimisasi situs web untuk meningkatkan visibilitas dan peringkat situs web Anda di mesin pencari.',
        durasi: '13:50',
        episode: 2
    },
    {
        id: 7,
        id_courses: 2,
        judul_video: 'Strategi Pemasaran Media Sosial',
        deskripsi: 'Jelajahi strategi dan taktik pemasaran media sosial yang efektif untuk menarik audiens, meningkatkan lalu lintas, dan mencapai tujuan pemasaran Anda di platform media sosial.',
        durasi: '16:30',
        episode: 3
    },
    {
        id: 8,
        id_courses: 2,
        judul_video: 'Iklan Berbayar dan PPC',
        deskripsi: 'Pahami iklan berbayar dan kampanye bayar per klik (PPC). Pelajari cara membuat dan mengelola iklan PPC yang efektif untuk mendatangkan lalu lintas terarah ke situs web Anda.',
        durasi: '19:25',
        episode: 4
    },
    {
        id: 9,
        id_courses: 3,
        judul_video: 'Pengantar UI/UX Design',
        deskripsi: 'Dalam video ini, kami akan memperkenalkan dasar-dasar desain antarmuka pengguna (UI/UX). Anda akan memahami pentingnya desain yang baik dalam pengalaman pengguna.',
        durasi: '10:20',
        episode: 1
    },
    {
        id: 10,
        id_courses: 3,
        judul_video: 'Prinsip Desain Interaktif',
        deskripsi: 'Pelajari tentang prinsip desain interaktif yang mencakup responsif, interaksi pengguna yang intuitif, dan pengalaman pengguna yang memikat untuk aplikasi dan situs web.',
        durasi: '13:45',
        episode: 2
    },
    {
        id: 11,
        id_courses: 3,
        judul_video: 'Desain Visual yang Menarik',
        deskripsi: 'Pelajari tentang estetika desain visual, termasuk pemilihan warna, tipografi, dan tata letak yang baik untuk menciptakan desain yang menarik dan memikat.',
        durasi: '15:30',
        episode: 3
    },
    {
        id: 12,
        id_courses: 3,
        judul_video: 'Prototyping dan Pengujian',
        deskripsi: 'Telusuri konsep prototyping dalam desain UI/UX. Anda akan belajar tentang metode prototyping dan pengujian untuk meningkatkan pengalaman pengguna.',
        durasi: '17:40',
        episode: 4
    },
    {
        id: 13,
        id_courses: 4,
        judul_video: 'Pengenalan Data Analytics',
        deskripsi: 'Dalam video ini, kami akan membahas pengantar tentang data analytics, mengapa penting, dan bagaimana menerapkannya dalam pengambilan keputusan bisnis.',
        durasi: '10:15',
        episode: 1
    },
    {
        id: 14,
        id_courses: 4,
        judul_video: 'Menganalisis Data dengan SQL',
        deskripsi: 'Pelajari tentang SQL (Structured Query Language) dan cara menggunakan SQL untuk mengambil, menganalisis, dan memanipulasi data dari basis data.',
        durasi: '14:20',
        episode: 2
    },
    {
        id: 15,
        id_courses: 4,
        judul_video: 'Mengolah Data dengan Python',
        deskripsi: 'Jelajahi pengolahan data menggunakan bahasa pemrograman Python. Pelajari cara membaca, memanipulasi, dan mengelola data untuk analisis lebih lanjut.',
        durasi: '16:30',
        episode: 3
    },
    {
        id: 16,
        id_courses: 4,
        judul_video: 'Visualisasi Data yang Efektif',
        deskripsi: 'Pahami pentingnya visualisasi data dalam data analytics. Pelajari cara menciptakan visualisasi data yang efektif untuk memahami pola dan tren.',
        durasi: '18:45',
        episode: 4
    }
  ];
  
//sementara nnti pindah db

const getAllVideos = (_, res) => {
    try {
        res.json({
          data: videosData,
          message: "Successfully retrieved video!",
        });
      } catch (error) {
        res.status(500);
        res.json({
          message: "Internal server error!",
        });
      }
};
  
const getVideosById = (req, res) => {
    try {
        const { id } = req.params;
        const videos = videosData[Number(id) - 1];
        if (!videos) {
          res.status(404);
          res.json({
            message: "Data not found",
          });
        }

        res.json({
          data: videos,
          message: "Successfully retreive courses!",
        });
      } catch (error) {
        res.status(500);
        res.json({
          message: "Internal server error!",
        });
    }
};
  
module.exports = {
    getAllVideos,
    getVideosById,
};
  