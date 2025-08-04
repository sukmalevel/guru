// script.js
const prompts = {
  soal_pilgan: (kelas, topik) => `Buatkan soal pilihan ganda sebanyak 5 soal untuk kelas ${kelas} dengan topik \"${topik}\". Sertakan jawaban benar dan penjelasan singkatnya.`,
  soal_isian: (kelas, topik) => `Buatkan soal isian singkat sebanyak 5 soal untuk kelas ${kelas} dengan topik \"${topik}\". Tambahkan kunci jawaban di bawah setiap soal.`,
  rpp: (kelas, topik) => `Buatkan RPP sederhana untuk kelas ${kelas} dengan topik \"${topik}\" sesuai kurikulum merdeka. Sertakan tujuan pembelajaran, kegiatan inti, dan penilaian.`,
  spj: (kelas, topik) => `Buatkan contoh SPJ (Surat Pertanggungjawaban) kegiatan sekolah untuk kelas ${kelas} dengan kegiatan \"${topik}\".`,
  jurnal: (kelas, topik) => `Buatkan jurnal harian guru untuk kelas ${kelas} dengan materi \"${topik}\". Sertakan kegiatan pembelajaran dan refleksi.`,
  surat_rapat: (kelas, topik) => `Buatkan surat undangan resmi untuk wali murid kelas ${kelas} terkait rapat \"${topik}\". Format formal dan bahasa Indonesia baku.`,
  absen: (kelas, topik) => `Buatkan format daftar hadir siswa kelas ${kelas} untuk kegiatan \"${topik}\". Format tabel dengan kolom: No, Nama, Tanda Tangan.`,
  rekap: (kelas, topik) => `Buatkan rekap nilai siswa kelas ${kelas} untuk topik \"${topik}\". Tabel: Nama, Nilai, Keterangan.`,
  catatan_wali: (kelas, topik) => `Buatkan catatan wali kelas untuk siswa kelas ${kelas} tentang \"${topik}\". Format bijak dan mendidik.`,
  raport: (kelas, topik) => `Buatkan deskripsi raport kelas ${kelas} untuk topik \"${topik}\". Panjang 2–3 kalimat positif dan spesifik.`,
  caption: (kelas, topik) => `Buatkan caption Instagram untuk dokumentasi kegiatan kelas ${kelas} dengan tema \"${topik}\".`,
  mc: (kelas, topik) => `Buatkan naskah MC pembukaan acara untuk kelas ${kelas} dengan tema \"${topik}\".`,
  notulen: (kelas, topik) => `Buatkan notulen rapat guru kelas ${kelas} dengan agenda \"${topik}\". Sertakan waktu, tempat, peserta, dan hasil rapat.`,
  laporan_ekskul: (kelas, topik) => `Buatkan laporan kegiatan ekstrakurikuler kelas ${kelas} tentang \"${topik}\".`,
  rapat_spp: (kelas, topik) => `Buatkan undangan rapat komite tentang \"${topik}\" untuk kelas ${kelas}. Sertakan tanggal, waktu, tempat, dan isi rapat.`,
};

document.getElementById('promptForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const task = document.getElementById('task').value;
  const kelas = document.getElementById('kelas').value;
  const topik = document.getElementById('topik').value;
  if (prompts[task]) {
    const prompt = prompts[task](kelas, topik);
    const encodedPrompt = encodeURIComponent(prompt);
    const url = `https://chat.openai.com/?prompt=${encodedPrompt}`;
    window.open(url, '_blank');
  }
});
