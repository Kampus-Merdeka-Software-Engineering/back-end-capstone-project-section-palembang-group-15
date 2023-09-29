import express from "express";
import { getById, getAll, getByCourseId, getByEpisode} from "../services/contentsService.js";

let contentsData = [
    {
        id: 1,
        id_course: 1,
        judul_konten: 'Pengenalan Microsoft Excel',
        video: '',
        deskripsi: 'Dalam video ini, kami akan memperkenalkan dasar-dasar Microsoft Excel, mencakup topik seperti membuat lembar kerja baru, memasukkan data, dan formatting dasar.',
        episode: 1
    },
    {
        id: 2,
        id_course: 1,
        judul_video: 'Rumus dan Fungsi Excel',
        video: '',
        deskripsi: 'Pelajari penggunaan rumus dan fungsi di Microsoft Excel untuk melakukan perhitungan dan otomatisasi tugas. Kami akan membahas fungsi umum seperti SUM, AVERAGE, dan lain-lain.',
        episode: 2
    },
    {
        id: 3,
        id_course: 1,
        judul_video: 'Visualisasi Data dengan Excel',
        video: '',
        deskripsi: 'Jelajahi cara membuat visualisasi data yang efektif di Microsoft Excel menggunakan grafik dan diagram. Pelajari cara memilih jenis grafik yang tepat dan menyesuaikan visual.',
        episode: 3
    },
    {
        id: 4,
        id_course: 1,
        judul_video: 'Teknik Excel Lanjutan',
        video: '',
        deskripsi: 'Telusuri teknik Excel lanjutan termasuk tabel pivot, makro, dan alat analisis data. Temukan cara mengoptimalkan alur kerja dan meningkatkan produktivitas.',
        episode: 4
    },
    {
        id: 5,
        id_course: 2,
        judul_video: 'Dasar-dasar Pemasaran Digital',
        video: '',
        deskripsi: 'Video ini memberikan pengantar tentang pemasaran digital, menjelaskan konsep-konsep utamanya, strategi, dan bagaimana berbeda dari pendekatan pemasaran tradisional.',
        episode: 1
    },
    {
        id: 6,
        id_course: 2,
        judul_video: 'SEO dan Optimisasi Website',
        video: '',
        deskripsi: 'Pelajari tentang optimisasi mesin pencari (SEO) dan teknik optimisasi situs web untuk meningkatkan visibilitas dan peringkat situs web Anda di mesin pencari.',
        episode: 2
    },
    {
        id: 7,
        id_course: 2,
        judul_video: 'Strategi Pemasaran Media Sosial',
        video: '',
        deskripsi: 'Jelajahi strategi dan taktik pemasaran media sosial yang efektif untuk menarik audiens, meningkatkan lalu lintas, dan mencapai tujuan pemasaran Anda di platform media sosial.',
        episode: 3
    },
    {
        id: 8,
        id_course: 2,
        judul_video: 'Iklan Berbayar dan PPC',
        video: '',
        deskripsi: 'Pahami iklan berbayar dan kampanye bayar per klik (PPC). Pelajari cara membuat dan mengelola iklan PPC yang efektif untuk mendatangkan lalu lintas terarah ke situs web Anda.',
        episode: 4
    },
    {
        id: 9,
        id_course: 3,
        judul_video: 'Pengantar UI/UX Design',
        video: '',
        deskripsi: 'Dalam video ini, kami akan memperkenalkan dasar-dasar desain antarmuka pengguna (UI/UX). Anda akan memahami pentingnya desain yang baik dalam pengalaman pengguna.',
        episode: 1
    },
    {
        id: 10,
        id_course: 3,
        judul_video: 'Prinsip Desain Interaktif',
        video: '',
        deskripsi: 'Pelajari tentang prinsip desain interaktif yang mencakup responsif, interaksi pengguna yang intuitif, dan pengalaman pengguna yang memikat untuk aplikasi dan situs web.',
        episode: 2
    },
    {
        id: 11,
        id_course: 3,
        judul_video: 'Desain Visual yang Menarik',
        video: '',
        deskripsi: 'Pelajari tentang estetika desain visual, termasuk pemilihan warna, tipografi, dan tata letak yang baik untuk menciptakan desain yang menarik dan memikat.',
        episode: 3
    },
    {
        id: 12,
        id_course: 3,
        judul_video: 'Prototyping dan Pengujian',
        video: '',
        deskripsi: 'Telusuri konsep prototyping dalam desain UI/UX. Anda akan belajar tentang metode prototyping dan pengujian untuk meningkatkan pengalaman pengguna.',
        episode: 4
    },
    {
        id: 13,
        id_course: 4,
        judul_video: 'Pengenalan Data Analytics',
        video: '',
        deskripsi: 'Dalam video ini, kami akan membahas pengantar tentang data analytics, mengapa penting, dan bagaimana menerapkannya dalam pengambilan keputusan bisnis.',
        episode: 1
    },
    {
        id: 14,
        id_course: 4,
        judul_video: 'Menganalisis Data dengan SQL',
        video: '',
        deskripsi: 'Pelajari tentang SQL (Structured Query Language) dan cara menggunakan SQL untuk mengambil, menganalisis, dan memanipulasi data dari basis data.',
        episode: 2
    },
    {
        id: 15,
        id_course: 4,
        judul_video: 'Mengolah Data dengan Python',
        video: '',
        deskripsi: 'Jelajahi pengolahan data menggunakan bahasa pemrograman Python. Pelajari cara membaca, memanipulasi, dan mengelola data untuk analisis lebih lanjut.',
        episode: 3
    },
    {
        id: 16,
        id_course: 4,
        judul_video: 'Visualisasi Data yang Efektif',
        video: '',
        deskripsi: 'Pahami pentingnya visualisasi data dalam data analytics. Pelajari cara menciptakan visualisasi data yang efektif untuk memahami pola dan tren.',
        episode: 4
    }
  ];
  
//sementara nnti pindah db

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */

 const getAllContents = async (req, res, next) => {
    try{
        const ContentsList = await getAll();
    
        if(!ContentsList === null || ContentsList.length === 0){
            res.status(404);
            res.json({
                message: "Data not found"
            });
            return;
        }

        res.json({
        data: ContentsList,
        message: "Data successfully retrieved",
        });
    } catch(e){
        next(e);
    }  
 };
  
/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */

 const getContentsById = async(req, res, next) => {
    try{
        const contents = await getById(req.params.id);

        if(!contents){
            res.status(404);
            res.json({
                message: "Data not found"
            });
            return;
        }

        res.json({
            data: contents,
            message: "Data successfully retrieved",
        });
    } catch (e){
        next(e);
    }
 };

 const getContentsByCourseId = async(req, res, next) => {
    try{
        const contentsByCourseId = await getByCourseId(req.params.courseId);

        if(!contentsByCourseId){
            res.status(404);
            res.json({
                message: "Data not found"
            });
            return;
        }

        res.json({
            data: contentsByCourseId,
            message: "Data successfully retrieved",
        });
    } catch (e){
        next(e);
    }
 }; 
 
 const getContentByEpisode = async (req, res, next) => {
    try{
      const content = await getByEpisode(req.params.courseId, req.params.episode);
  
      if(!content === null || content.length === 0){
        res.status(404);
        res.json({
            message: "Data not found for the specified episode"
        });
        return;
      }
  
      res.json({
        data: content,
        message: "Content successfully retrieved for the specified episode.",
      });
    } catch (e){
      next(e);
    }
  };

  
export default {
    getAllContents,
    getContentsById,
    getContentsByCourseId,
    getContentByEpisode,
};
  