const STORAGE_KEY = 'hr_assessment_session';

// DEFAULT LOGO (Sika)
const DEFAULT_LOGO = "data:image/jpeg;base64,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";

// ============================
// WPT Questions (50 Items)
// ============================
const wptQuestions = [
    { type: 'choice', q: "1. Bulan lalu pada awal tahun ini adalah:", options: ["Januari", "Maret", "Juli", "Desember", "Oktober"], ans: 3 },
    { type: 'choice', q: "2. MENANGKAP adalah lawan kata dari:", options: ["meletakkan", "membebaskan", "beresiko", "berusaha", "turun tingkat"], ans: 1 },
    { type: 'choice', q: "3. Sebagian besar hal dibawah ini serupa satu sama lain. Manakah salah satu diantaranya yang kurang serupa dengan yang lain?", options: ["Januari", "Agustus", "Rabu", "Oktober", "Desember"], ans: 2 },
    { type: 'text', q: "4. Jawablah dengan menuliskan YA atau TIDAK. Apakah RSVP berarti 'jawablah yang tidak perlu'?", ans: ["tidak", "no", "n", "t"] },
    { type: 'choice', q: "5. Dalam kelompok kata berikut, manakah kata yang berbeda dari kata yang lain?", options: ["pasukan", "liga", "berpartisipasi", "pak", "kelompok"], ans: 2 },
    { type: 'choice', q: "6. BIASA adalah lawan kata dari:", options: ["jarang", "terbiasa", "tetap", "berhenti", "selalu"], ans: 0 },
    { type: 'text', q: "7. (Logika Deret) Perhatikan pola angka berikut: 3, 6, 9, 12, ... Angka berapakah selanjutnya?", ans: ["15"] },
    { type: 'text', q: "8. Perhatikan urutan angka berikut. Angka berapa yang selanjutnya muncul? 8 4 2 1 ½ ?", ans: ["0.25", "1/4", ".25", "0,25"] },
    { type: 'choice', q: "9. Klien dan Pelanggan. Apakah kata-kata ini:", options: ["memiliki arti yang sama", "memiliki arti berlawanan", "tidak memiliki arti sama atau berlainan"], ans: 0 },
    { type: 'choice', q: "10. Manakah kata berikut ini yang berhubungan dengan aroma saat gigi mengunyah?", options: ["manis", "bau tak sedap", "bau wangi", "hidung", "bersih"], ans: 3 },
    { type: 'choice', q: "11. MUSIM GUGUR adalah lawan dari:", options: ["liburan", "musim panas", "musim semi", "musim dingin", "musim gugur"], ans: 2 },
    { type: 'text', q: "12. Sebuah pesawat terbang 300 kaki dalam ½ detik. Pada kecepatan yang sama berapa kaki ia terbang dalam 10 detik?", ans: ["6000"] },
    { type: 'choice', q: "13. Anggaplah dua pernyataan pertama adalah benar. Apakah yang terakhir:", options: ["benar", "salah", "tidak tahu"], ans: 0 },
    { type: 'choice', q: "14. JAUH adalah lawan kata dari:", options: ["terpencil", "dekat", "jauh", "terburu-buru", "pasti"], ans: 1 },
    { type: 'text', q: "15. 3 permen lemon seharga 10 rupiah. Berapa harga ½ lusin?", ans: ["20"] },
    { type: 'text', q: "16. Berapa banyak duplikasi yang sama dari lima pasangan angka dibawah ini? (84721-84721, 9210651-9210561, 14201201-14210210, 96101101-96101161, 88884444-88884444)", ans: ["2"] },
    { type: 'text', q: "17. Susun kata berikut menjadi pernyataan benar: 'Selalu sebuah kata kerja kalimat suatu memiliki'. Tulis huruf terakhir dari kata terakhir.", ans: ["a"] },
    { type: 'text', q: "18. Anak lelaki berumur 5 tahun dan saudara perempuannya dua kali lebih tua. Ketika anak lelaki itu berumur 8 tahun, berapa umur saudara perempuannya?", ans: ["13"] },
    { type: 'choice', q: "19. IT'S - ITS. Apakah kata ini:", options: ["memiliki arti yang sama", "memiliki arti yang berlawanan", "tidak memiliki arti yang sama atau berlawanan"], ans: 2 },
    { type: 'choice', q: "20. Anggaplah dua pernyataan pertama adalah benar. Apakah pernyataan terakhir: John seusia dengan Sally. Sally lebih muda dari Bill. John lebih muda dari Bill.", options: ["benar", "salah", "tidak tahu"], ans: 0 },
    { type: 'text', q: "21. Seorang dealer membeli beberapa barrel seharga 4.000 rupiah. Ia menjual dengan harga 5.000 rupiah, mendapat untung 50 rupiah setiap barrel. Berapa banyak barel yang dijual?", ans: ["20"] },
    { type: 'text', q: "22. Susun kata menjadi kalimat: 'telur menghasilkan semua ayam'. Jika benar tulis (B), jika salah tulis (S).", ans: ["s", "salah"] },
    { type: 'choice', q: "23. Dua dari peribahasa berikut ini memiliki arti sama. Manakah itu? 1. Semakin banyak sapi, ada anak sapi buruk. 2. Anak seperti Ayahnya. 3. Batu berguling tak berlumut. 4. Dikenal dari persahabatan. 5. Benih dari mangkuk yang sama.", options: ["1 & 2", "2 & 4", "3 & 4", "2 & 5", "1 & 5"], ans: 3 },
    { type: 'text', q: "24. Sebuah jam terlambat 1 menit 18 detik dalam 39 hari. Berapa detik ia terlambat dalam sehari?", ans: ["2"] },
    { type: 'choice', q: "25. CANVASS - CANVAS. Apakah kata-kata ini:", options: ["memiliki arti yang sama", "memiliki arti yang berlawanan", "tidak memiliki arti sama atau berlawanan"], ans: 2 },
    { type: 'choice', q: "26. Anggaplah dua pernyataan pertama benar. Semua siswa mengikuti ujian. Beberapa orang diruangan ini adalah siswa. Beberapa orang diruangan ini mengikuti ujian.", options: ["benar", "salah", "tidak tahu"], ans: 0 },
    { type: 'text', q: "27. Dalam 30 hari seorang menabung 1 dolar. Berapa rata-rata tabungannya setiap hari? (desimal)", ans: ["0.033", "0,033"] },
    { type: 'choice', q: "28. INGENIOUS - INGENUOUS. Apakah kata-kata ini:", options: ["memiliki arti sama", "memiliki arti berlawanan", "tidak memiliki arti sama atau berlawanan"], ans: 2 },
    { type: 'text', q: "29. Dua orang menangkap 36 ikan. X menangkap 5 kali lebih banyak dari Y. Berapa ikan yang ditangkap Y?", ans: ["6"] },
    { type: 'text', q: "30. Sebuah kotak segi empat terisi penuh 800 kubik kaki. Lebar 8 kaki, panjang 10 kaki. Berapa kedalaman kotak?", ans: ["10"] },
    { type: 'text', q: "31. Satu angka tidak cocok dengan pola: ½, ¼, 1/6, 1/8, 1/9, 1/12. Angka berapakah itu?", ans: ["1/9"] },
    { type: 'text', q: "32. Jawablah dengan menulis YA atau TIDAK. Apakah P.M. berarti 'post merediem'?", ans: ["ya", "y", "yes"] },
    { type: 'choice', q: "33. DAPAT DIPERCAYA - GAMPANG PERCAYA. Apakah kata-kata ini:", options: ["memiliki arti sama", "memiliki arti berlawanan", "tidak memiliki arti sama atau berlawanan"], ans: 2 },
    { type: 'text', q: "34. Sebuah rok membutuhkan 2 1/4 meter kain. Berapa banyak potong yang dihasilkan dari 45 meter kain?", ans: ["20"] },
    { type: 'text', q: "35. Jam Senin siang tepat. Rabu jam 2 siang lambat 26 detik. Berapa detik terlambat dalam ½ jam?", ans: ["0.26", "0,26"] },
    { type: 'text', q: "36. Tim kalah 9 permainan (3/8 bagian). Berapa banyak pertandingan total?", ans: ["24"] },
    { type: 'text', q: "37. Apakah angka selanjutnya? 1, .5, .25, .125, ...?", ans: ["0.0625", ".0625"] },
    { type: 'text', q: "38. (Ketelitian Huruf) Berapa kali huruf 'A' muncul dalam kata: 'ASOSIASI'?", ans: ["2"] },
    { type: 'choice', q: "39. Sapu baru bersih. Sepatu lama lunak. Artinya:", options: ["sama", "berlawanan", "tidak sama atau berlawanan"], ans: 2 },
    { type: 'text', q: "40. Berapa duplikasi dari pasangan kata? (Rexford-Rockford, Singleton-Simbleten, Richards-Richad, Siegel-Seigel, Wood-Wood)", ans: ["1"] },
    { type: 'choice', q: "41. Dua peribahasa serupa: 1. Dompet sutra 2. Mencuri telur-sapi 3. Batu berguling 4. Kapal rusak 5. Ketidakmungkinan.", options: ["1 & 5", "2 & 4", "3 & 4", "1 & 2"], ans: 0 },
    { type: 'text', q: "42. (Logika Hitungan) Jika A = 2, B = 4, C = 6. Berapakah hasil dari B x C : A?", ans: ["12"] },
    { type: 'text', q: "43. Manakah angka terkecil? 10, 1, .999, .33, 11", ans: ["0.33", ".33"] },
    { type: 'choice', q: "44. 'Tidak ada orang jujur minta maaf... Kejujuran dihormati...' Maknanya:", options: ["sama", "berlawanan", "tidak sama atau berlawanan"], ans: 0 },
    { type: 'text', q: "45. Beli 12 lusin $1.80. 2 lusin busuk. Jual berapa per lusin agar untung 1/3 harga beli?", ans: ["0.24", "24"] },
    { type: 'choice', q: "46. Manakah kata yang berbeda? 1. koloni 2. perkawanan 3. kawanan 4. kru 5. konstelasi", options: ["1", "2", "3", "4", "5"], ans: 4 },
    { type: 'choice', q: "47. Orang besar dibodohi. Saya dibodohi. Saya adalah orang besar. Kesimpulan:", options: ["benar", "salah", "tidak tahu"], ans: 1 },
    { type: 'text', q: "48. X=4500, Y=3500, Z=2000. Laba 1500. Selisih X jika bagi rata vs proporsional?", ans: ["175"] },
    { type: 'text', q: "49. (Ketelitian Angka) Berapakah jumlah dari angka-angka ini: 8 + 7 + 5 - 10?", ans: ["10"] },
    { type: 'text', q: "50. Artikel 30k kata. Hal Besar 1200. Hal Kecil 1500. Total 22 hal. Berapa halaman Kecil?", ans: ["12"] }
];

// ============================
// PAPI Questions (90 Items)
// ============================
const papiQuestions = [
    { a: "Saya seorang pekerja giat", b: "Saya bukan seorang murung" },
    { a: "Saya suka bekerja lebih baik daripada orang lain", b: "Saya melakukan pekerjaan hingga tuntas" },
    { a: "Saya suka memberi orang petunjuk bagaimana melakukan sesuatu", b: "Saya senang memberitahukan orang apa yang harus dikerjakan" },
    { a: "Saya melakukan hal-hal yang lucu", b: "Saya suka mengatakan kepada orang lain apa yang harus dikerjakan" },
    { a: "Saya suka bergabung didalam kelompok", b: "Saya ingin diperhatikan didalam kelompok" },
    { a: "Saya suka menjalin persahabatan", b: "Saya suka menggabungkan diri dalam suatu kelompok" },
    { a: "Jika saya rasa perlu, saya bisa cepat menyesuaikan diri", b: "Saya berusaha menjalin persahabatan" },
    { a: "Saya ingin diperhatikan di dalam kelompok", b: "Jika saya rasa perlu, saya bisa cepat menyesuaikan diri" },
    { a: "Saya berusaha menjalin persahabatan", b: "Saya bukan seorang murung" },
    { a: "Saya suka bekerja lebih baik dari orang lain", b: "Saya melakukan hal-hal yang lucu" },
    { a: "Saya suka mengerjakan satu pekerjaan secara berkesinambungan", b: "Saya seorang pekerja giat" },
    { a: "Saya mencoba mencapai prestasi kerja yang baik", b: "Saya seorang pekerja keras" },
    { a: "Saya senang memberitahu orang lain cara melakukan sesuatu", b: "Saya mencoba mencapai prestasi kerja yang baik" },
    { a: "Saya membuat keputusan dengan mudah", b: "Saya senang memberitahu orang lain cara melakukan sesuatu" },
    { a: "Saya berbicara dengan cepat", b: "Saya membuat keputusan dengan mudah" },
    { a: "Saya biasanya bekerja tergesa-gesa", b: "Saya berbicara dengan cepat" },
    { a: "Saya ingin diperhatikan", b: "Saya biasanya bekerja tergesa-gesa" },
    { a: "Saya suka membuat persahabatan", b: "Saya ingin diperhatikan oleh orang lain" },
    { a: "Saya suka berada dalam suatu kelompok", b: "Saya suka membuat persahabatan" },
    { a: "Saya suka menolong orang lain", b: "Saya suka berada dalam suatu kelompok" },
    { a: "Saya tipe pemikir", b: "Saya suka menolong orang lain" },
    { a: "Saya suka bekerja dengan hal-hal detail", b: "Saya tipe pemikir" },
    { a: "Saya teratur dan rapi", b: "Saya suka bekerja dengan hal-hal detail" },
    { a: "Saya suka adanya perubahan", b: "Saya teratur dan rapi" },
    { a: "Saya bisa menahan keinginan saya", b: "Saya suka adanya perubahan" },
    { a: "Saya suka mengatakan apa adanya", b: "Saya bisa menahan keinginan saya" },
    { a: "Saya suka mengikuti orang yang saya kagumi", b: "Saya suka mengatakan apa adanya" },
    { a: "Saya suka instruksi yang jelas", b: "Saya suka mengikuti orang yang saya kagumi" },
    { a: "Saya suka menyelesaikan pekerjaan yang saya mulai", b: "Saya suka instruksi yang jelas" },
    { a: "Saya seorang pekerja giat", b: "Saya suka menyelesaikan pekerjaan yang saya mulai" },
    { a: "Saya ingin sukses", b: "Saya seorang pekerja giat" },
    { a: "Saya cepat mengambil keputusan", b: "Saya ingin sukses" },
    { a: "Saya berbicara dengan cepat", b: "Saya suka memimpin orang lain" },
    { a: "Saya bekerja cepat", b: "Saya cepat mengambil keputusan" },
    { a: "Saya ingin diperhatikan", b: "Saya bekerja cepat" },
    { a: "Saya ramah terhadap orang", b: "Saya biasanya bekerja tergesa-gesa" },
    { a: "Saya senang berada dalam suatu kelompok", b: "Saya ingin diperhatikan" },
    { a: "Saya suka membantu orang lain", b: "Saya ramah terhadap orang" },
    { a: "Saya tipe pemikir", b: "Saya senang berada dalam suatu kelompok" },
    { a: "Saya suka bekerja secara rinci", b: "Saya suka membantu orang lain" },
    { a: "Saya teratur", b: "Saya tipe pemikir" },
    { a: "Saya suka adanya perubahan", b: "Saya suka bekerja secara rinci" },
    { a: "Saya tidak mudah marah", b: "Saya teratur" },
    { a: "Saya suka berdebat", b: "Saya suka adanya perubahan" },
    { a: "Saya setia kepada atasan", b: "Saya tidak mudah marah" },
    { a: "Saya suka mengikuti aturan", b: "Saya suka berdebat" },
    { a: "Saya suka menyelesaikan pekerjaan sampai tuntas", b: "Saya setia kepada atasan" },
    { a: "Saya bekerja keras", b: "Saya suka mengikuti aturan" },
    { a: "Saya ingin sukses", b: "Saya suka menyelesaikan pekerjaan sampai tuntas" },
    { a: "Saya ingin menjadi pemimpin", b: "Saya bekerja keras" },
    { a: "Saya senang memberitahu orang cara melakukan sesuatu", b: "Saya ingin sukses" },
    { a: "Saya membuat keputusan dengan cepat", b: "Saya ingin menjadi pemimpin" },
    { a: "Saya bekerja cepat", b: "Saya senang memberitahu orang cara melakukan sesuatu" },
    { a: "Saya berbicara cepat", b: "Saya membuat keputusan dengan cepat" },
    { a: "Saya ingin diperhatikan", b: "Saya bekerja cepat" },
    { a: "Saya senang menjalin persahabatan", b: "Saya berbicara cepat" },
    { a: "Saya senang menggabungkan diri dalam suatu kelompok", b: "Saya ingin diperhatikan" },
    { a: "Saya suka membantu orang lain", b: "Saya senang menjalin persahabatan" },
    { a: "Saya tipe pemikir", b: "Saya senang menggabungkan diri dalam suatu kelompok" },
    { a: "Saya suka bekerja secara rinci", b: "Saya suka membantu orang lain" },
    { a: "Saya teratur", b: "Saya tipe pemikir" },
    { a: "Saya suka adanya perubahan", b: "Saya suka bekerja secara rinci" },
    { a: "Saya tidak mudah marah", b: "Saya teratur" },
    { a: "Saya suka berdebat", b: "Saya suka adanya perubahan" },
    { a: "Saya setia kepada atasan", b: "Saya tidak mudah marah" },
    { a: "Saya suka mengikuti aturan", b: "Saya suka berdebat" },
    { a: "Saya suka menyelesaikan pekerjaan sampai tuntas", b: "Saya setia kepada atasan" },
    { a: "Saya bekerja keras", b: "Saya suka mengikuti aturan" },
    { a: "Saya ingin sukses", b: "Saya suka menyelesaikan pekerjaan" },
    { a: "Saya ingin menjadi pemimpin", b: "Saya bekerja keras" },
    { a: "Saya selalu mencoba keras", b: "Saya mengambil keputusan cepat dan mudah" },
    { a: "Kelompok biasanya melakukan apa yang saya inginkan", b: "Saya biasanya bekerja cepat" },
    { a: "Saya sering merasa lelah", b: "Saya lambat dlm mengambil keputusan" },
    { a: "Saya bekerja cepat", b: "Saya mudah berteman" },
    { a: "Saya biasanya mempunyai gairah dan tenaga", b: "Saya banyak menghabiskan waktu untuk berfikir" },
    { a: "Saya sangat ramah terhadap orang", b: "Saya suka pekerjaan yang memerlukan ketelitian" },
    { a: "Saya banyak berfikir dan membuat perencanaan", b: "Saya menyimpan sesuatu pada tempatnya" },
    { a: "Saya suka pekerjaan yang menuntut perhatian terhadap hal detail", b: "Saya tidak mudah marah" },
    { a: "Saya suka menuruti orang yang saya kagumi", b: "Saya selalu menyelesaikan pekerjaan yang telah saya mulai" },
    { a: "Saya suka petunjuk-petunjuk yang jelas", b: "Saya senang bekerja keras" },
    { a: "Saya berusaha mendapatkan apa yang saya inginkan", b: "Saya seorang pemimpin yang baik" },
    { a: "Saya dapat membuat orang lain bekerja keras", b: "Saya adalah tipe orang yang tidak kenal susah" },
    { a: "Saya mengambil keputusan dengan cepat", b: "Saya berbicara dengan cepat" },
    { a: "Rasanya saya bekerja dengan tergesa-gesa", b: "Saya berlatih / berolah raga dengan teratur" },
    { a: "Saya tidak suka bertemu kebanyakan orang", b: "Saya cepat merasa lelah" },
    { a: "Saya mempunyai banyak sekali teman", b: "Saya banyak menghabiskan waktu untuk berfikir" },
    { a: "Saya suka menerapkan teori-teori dalam bekerja", b: "Saya suka mengerjakan sesuatu sampai pada hal-hal yang detail dan jelas" },
    { a: "Saya suka mengerjakan sesuatu sampai pada hal-hal yang detail dan jelas", b: "Saya suka mengatur dan mengorganisir pekerjaan saya" },
    { a: "Saya meletakkan segalanya pada tempatnya", b: "Saya selalu menyenangkan" },
    { a: "Saya senang diberi petunjuk apa yang perlu saya kerjakan", b: "Saya harus menyelesaikan pekerjaan yang telah saya mulai" }
];

// ============================
// PAPI Scoring Key
// ============================
const scoringKey = [
    ['G','E'],['A','N'],['P','L'],['K','P'],['B','X'],['S','B'],['Z','S'],['X','Z'],['O','E'],['A','K'],
    ['G','N'],['A','G'],['P','A'],['I','P'],['T','I'],['V','T'],['X','V'],['S','X'],['B','S'],['O','B'],
    ['R','O'],['D','R'],['C','D'],['Z','C'],['E','Z'],['K','E'],['F','K'],['W','F'],['N','W'],['G','N'],
    ['A','G'],['I','A'],['P','I'],['T','P'],['V','T'],['S','V'],['B','S'],['O','B'],['R','O'],['D','R'],
    ['C','D'],['Z','C'],['E','Z'],['K','E'],['F','K'],['W','F'],['N','W'],['G','N'],['A','G'],['L','G'],
    ['P','A'],['I','L'],['T','P'],['V','I'],['X','T'],['S','V'],['B','X'],['O','S'],['R','B'],['D','O'],
    ['C','R'],['Z','D'],['E','C'],['K','Z'],['F','E'],['W','K'],['N','F'],['G','W'],['A','N'],['L','G'],
    ['A','I'],['P','T'],['E','I'],['T','S'],['V','R'],['S','D'],['R','C'],['D','E'],['F','N'],['W','G'],
    ['A','L'],['P','V'],['I','T'],['V','T'],['E','V'],['S','R'],['R','D'],['D','C'],['C','O'],['F','N']
];

// ============================
// PAPI Groups
// ============================
const papiGroups = [
    { cat: "WORK DIRECTION (Arah Kerja)", params: [
        { c: 'N', desc: 'Kebutuhan Menyelesaikan Tugas' },
        { c: 'G', desc: 'Peran Pekerja Keras' },
        { c: 'A', desc: 'Kebutuhan Berprestasi' }
    ]},
    { cat: "LEADERSHIP (Kepemimpinan)", params: [
        { c: 'L', desc: 'Peran Pemimpin' },
        { c: 'P', desc: 'Kebutuhan Mengatur Orang Lain' },
        { c: 'I', desc: 'Peran Membuat Keputusan' }
    ]},
    { cat: "ACTIVITY (Aktivitas Kerja)", params: [
        { c: 'T', desc: 'Peran Tipe Sibuk' },
        { c: 'V', desc: 'Peran Tipe Penuh Semangat' }
    ]},
    { cat: "SOCIAL NATURE (Sifat Sosial)", params: [
        { c: 'X', desc: 'Kebutuhan Menonjolkan Diri' },
        { c: 'S', desc: 'Peran Hubungan Sosial' },
        { c: 'B', desc: 'Kebutuhan Diterima Kelompok' },
        { c: 'O', desc: 'Kebutuhan Hubungan Kedekatan' }
    ]},
    { cat: "WORK STYLE (Gaya Kerja)", params: [
        { c: 'R', desc: 'Peran Tipe Teoritis' },
        { c: 'D', desc: 'Peran Menaruh Perhatian pd Detail' },
        { c: 'C', desc: 'Peran Mengatur Kerja' }
    ]},
    { cat: "TEMPERAMENT (Sifat Emosi)", params: [
        { c: 'Z', desc: 'Kebutuhan Perubahan' },
        { c: 'E', desc: 'Peran Pengendalian Emosi' },
        { c: 'K', desc: 'Kebutuhan Agresivitas' }
    ]},
    { cat: "FOLLOWERSHIP (Posisi Bawahan)", params: [
        { c: 'F', desc: 'Kebutuhan Mendapat Dukungan' },
        { c: 'W', desc: 'Kebutuhan Mengikuti Aturan' }
    ]}
];

// ============================
// WPT IQ Map
// ============================
const wptIqMap = {
    0:59,1:59,2:61,3:64,4:67,5:69,6:71,7:73,8:75,9:78,
    10:80,11:81,12:83,13:86,14:88,15:90,16:92,17:94,18:96,19:98,
    20:100,21:102,22:104,23:106,24:108,25:110,26:112,27:114,28:116,29:118,
    30:120,31:122,32:124,33:126,34:128,35:130,36:132,37:134,38:136,39:138,
    40:140,41:142,42:144,43:146,44:148,45:150,46:152,47:154,48:156,49:158,50:160
};

// ============================
// Scoring Functions
// ============================
function calculateWptScore(wptAnswers) {
    let score = 0;
    wptAnswers.forEach((ans, idx) => {
        const q = wptQuestions[idx];
        if (ans !== null && q) {
            if (q.type === 'choice') {
                if (ans === q.ans) score++;
            } else {
                const userAnsStr = ans.toString().toLowerCase().trim();
                if (q.ans.includes(userAnsStr)) score++;
            }
        }
    });
    return score;
}

function calculatePapiScores(papiAnswers) {
    let scores = {N:0,G:0,A:0,L:0,P:0,I:0,T:0,V:0,X:0,S:0,B:0,O:0,R:0,D:0,C:0,Z:0,E:0,K:0,F:0,W:0};
    papiAnswers.forEach((ans, i) => {
        if (ans && scoringKey[i]) {
            const factor = ans === 'A' ? scoringKey[i][0] : scoringKey[i][1];
            if (scores[factor] !== undefined) scores[factor]++;
        }
    });
    return scores;
}

function getIQ(wptScore) {
    return wptIqMap[wptScore] || (59 + (wptScore * 2));
}

// ============================
// Shared UI Utilities
// ============================
function showLoading() { document.getElementById('loading-overlay').style.display = 'flex'; }
function hideLoading() { document.getElementById('loading-overlay').style.display = 'none'; }

function showModal(title, contentHtml) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-content').innerHTML = contentHtml;
    document.getElementById('custom-modal-overlay').style.display = 'flex';
}
function closeModal() {
    document.getElementById('custom-modal-overlay').style.display = 'none';
}

function confirmReset() {
    if (confirm("Hapus seluruh progres dan mulai baru?")) {
        localStorage.removeItem(STORAGE_KEY);
        window.location.href = 'index.html';
    }
}

function updateHeaderUser(name) {
    const badge = document.getElementById('user-badge');
    const usernameEl = document.getElementById('header-username');
    if (badge && usernameEl && name) {
        usernameEl.innerText = name;
        badge.classList.remove('hidden');
        badge.classList.add('flex');
    }
}

function getSession() {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : null;
}

function saveSession(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
