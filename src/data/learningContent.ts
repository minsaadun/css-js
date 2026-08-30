import { QuizQuestion, DebugItem, ScenarioQuestion, PredictQuestion } from '../types';

export const SCENARIOS: ScenarioQuestion[] = [
  {
    id: 1,
    scenario: 'Anda hanya mahu menukar warna SATU heading sahaja secara pantas pada elemen tersebut tanpa mengubah elemen lain.',
    options: [
      { label: 'Inline CSS (<h1 style="color:red;">)', type: 'Inline', explanation: 'Tepat! Inline CSS ditulis terus pada atribut elemen tertentu untuk perubahan pantas.', correct: true },
      { label: 'Internal CSS (<style> dalam fail)', type: 'Internal', explanation: 'Boleh juga, tetapi Inline lebih pantas jika hanya untuk satu elemen khusus.', correct: false },
      { label: 'External CSS (fail .css berasingan)', type: 'External', explanation: 'External lebih sesuai untuk keseluruhan website, bukan perubahan ringkas 1 elemen.', correct: false },
    ],
  },
  {
    id: 2,
    scenario: 'Anda sedang membina website 5 halaman dan mahu semua halaman berkongsi tema warna serta font yang sama.',
    options: [
      { label: 'Inline CSS (Tulis pada setiap elemen)', type: 'Inline', explanation: 'Kurang sesuai kerana anda terpaksa mengulang kod pada ratusan elemen.', correct: false },
      { label: 'Internal CSS (Tulis dalam setiap fail HTML)', type: 'Internal', explanation: 'Anda terpaksa salin kod <style> dalam 5 fail berbeza. Jika ubah warna, perlu edit 5 fail!', correct: false },
      { label: 'External CSS (Pautkan fail style.css)', type: 'External', explanation: 'Tepat! Satu fail CSS boleh dipautkan kepada semua 5 fail HTML menggunakan tag <link>. Mengubah 1 fail akan mengubah seluruh website.', correct: true },
    ],
  },
  {
    id: 3,
    scenario: 'Anda sedang membuat latihan amali ringkas dalam SATU fail HTML dan mahu styling tersusun di bahagian atas dokumen.',
    options: [
      { label: 'Inline CSS', type: 'Inline', explanation: 'Inline akan membuatkan kod HTML anda berselerak jika banyak styling.', correct: false },
      { label: 'Internal CSS (<style> dalam <head>)', type: 'Internal', explanation: 'Tepat! Internal CSS sangat ideal untuk latihan amali satu halaman kerana semua kod berada dalam satu fail.', correct: true },
      { label: 'External CSS', type: 'External', explanation: 'Boleh digunakan tetapi memerlukan pengurusan fail .css tambahan untuk latihan satu halaman.', correct: false },
    ],
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    category: 'CSS Basics',
    type: 'multiple-choice',
    question: 'Apakah maksud singkatan CSS?',
    options: [
      'Cascading Style Sheets',
      'Computer Style System',
      'Creative Styling Source',
      'Coded Sheet Styles',
    ],
    correctIndex: 0,
    explanation: 'CSS bermaksud Cascading Style Sheets, digunakan untuk mereka bentuk persembahan dan susun atur halaman web.',
  },
  {
    id: 2,
    category: 'Style Sheets',
    type: 'multiple-choice',
    question: 'Manakah cara penulisan INLINE CSS yang betul dalam HTML?',
    options: [
      '<h1 style="color: blue;">Hello</h1>',
      '<h1 css="color: blue;">Hello</h1>',
      '<style>h1 { color: blue; }</style>',
      '<link rel="stylesheet" color="blue">',
    ],
    correctIndex: 0,
    explanation: 'Inline CSS ditulis menggunakan atribut style="..." terus di dalam pembuka tag HTML.',
  },
  {
    id: 3,
    category: 'Style Sheets',
    type: 'multiple-choice',
    question: 'Tag HTML manakah yang digunakan untuk memautkan fail External CSS?',
    options: [
      '<link rel="stylesheet" href="style.css">',
      '<style src="style.css">',
      '<script href="style.css">',
      '<css link="style.css">',
    ],
    correctIndex: 0,
    explanation: 'Tag <link rel="stylesheet" href="namafail.css"> diletakkan dalam bahagian <head> untuk memuatkan External CSS.',
  },
  {
    id: 4,
    category: 'Selectors',
    type: 'multiple-choice',
    question: 'Simbol apakah yang digunakan untuk CLASS selector dalam CSS?',
    options: [
      'Titik ( . ) contoh: .card',
      'Pagar ( # ) contoh: #card',
      'Bintang ( * ) contoh: *card',
      'Dolar ( $ ) contoh: $card',
    ],
    correctIndex: 0,
    explanation: 'Class selector menggunakan simbol titik (.namaClass), manakala ID selector menggunakan tanda pagar (#namaID).',
  },
  {
    id: 5,
    category: 'Selectors',
    type: 'multiple-choice',
    question: 'Jika kod CSS ialah "#tajuk { color: red; }", elemen HTML manakah yang akan dipilih?',
    options: [
      '<h1 id="tajuk">Selamat Datang</h1>',
      '<h1 class="tajuk">Selamat Datang</h1>',
      '<tajuk>Selamat Datang</tajuk>',
      'Semua elemen <h1>',
    ],
    correctIndex: 0,
    explanation: 'Simbol # merujuk kepada atribut id="tajuk". ID mestilah unik dalam satu halaman.',
  },
  {
    id: 6,
    category: 'Box Model',
    type: 'multiple-choice',
    question: 'Dalam CSS Box Model, ruang di antara CONTENT dan BORDER dipanggil:',
    options: [
      'Padding',
      'Margin',
      'Outline',
      'Spacing',
    ],
    correctIndex: 0,
    explanation: 'Padding ialah ruang dalaman antara content dan border. Margin pula ialah ruang di luar border.',
  },
  {
    id: 7,
    category: 'Box Model',
    type: 'true-false',
    question: 'Margin digunakan untuk menolak elemen lain di luar garisan border.',
    options: [
      'BENAR (True)',
      'PALSU (False)',
    ],
    correctIndex: 0,
    explanation: 'Benar! Margin mencipta ruang kosong di sekeliling luar sempadan (border) sesuatu elemen.',
  },
  {
    id: 8,
    category: 'JavaScript',
    type: 'multiple-choice',
    question: 'Apakah peranan utama JavaScript dalam pembangunan web?',
    options: [
      'Menambah kelakuan interaktif dan tindakan (Behavior / Action)',
      'Membina struktur asas teks dan perenggan',
      'Menukar warna background dan saiz font sahaja',
      'Menyimpan fail ke dalam pangkalan data secara terus',
    ],
    correctIndex: 0,
    explanation: 'HTML membina struktur (Structure), CSS menggayakan rupa (Presentation), dan JavaScript mengendalikan interaktiviti (Behavior/Interaction).',
  },
  {
    id: 9,
    category: 'JavaScript',
    type: 'multiple-choice',
    question: 'Tag apakah yang digunakan untuk menulis kod JavaScript dalam HTML?',
    options: [
      '<script> ... </script>',
      '<javascript> ... </javascript>',
      '<js> ... </js>',
      '<style> ... </style>',
    ],
    correctIndex: 0,
    explanation: 'Tag <script> digunakan untuk memasukkan skrip JavaScript dalam dokumen HTML.',
  },
  {
    id: 10,
    category: 'JavaScript',
    type: 'multiple-choice',
    question: 'Apakah fungsi kaedah alert("Selamat Datang") dalam JavaScript?',
    options: [
      'Memaparkan kotak dialog popup peringatan kepada pengguna',
      'Mencetak teks ke pencetak komputer',
      'Menghapus isi kandungan borang',
      'Menukar warna latar belakang menjadi merah',
    ],
    correctIndex: 0,
    explanation: 'alert() ialah kaedah popup dialog box untuk memaparkan mesej ringkas kepada pengguna.',
  },
  {
    id: 11,
    category: 'Events',
    type: 'multiple-choice',
    question: 'Event apakah yang berlaku apabila pengguna menekan / mengklik pada sebuah button?',
    options: [
      'onclick',
      'onchange',
      'onsubmit',
      'onhover',
    ],
    correctIndex: 0,
    explanation: 'onclick dicetuskan apabila elemen diklik oleh tetikus atau sentuhan jari pengguna.',
  },
  {
    id: 12,
    category: 'Events',
    type: 'multiple-choice',
    question: 'Event apakah yang paling sesuai digunakan apabila pengguna memilih item baru dalam dropdown <select>?',
    options: [
      'onchange',
      'onclick',
      'onsubmit',
      'onload',
    ],
    correctIndex: 0,
    explanation: 'onchange dicetuskan apabila nilai input (seperti select dropdown, checkbox, radio) berubah nilainya.',
  },
  {
    id: 13,
    category: 'Events',
    type: 'multiple-choice',
    question: 'Event onsubmit biasanya diletakkan pada tag HTML yang mana?',
    options: [
      '<form onsubmit="...">',
      '<input onsubmit="...">',
      '<p onsubmit="...">',
      '<div onsubmit="...">',
    ],
    correctIndex: 0,
    explanation: 'onsubmit diletakkan pada tag <form> untuk menyemak data sebelum borang dihantar.',
  },
  {
    id: 14,
    category: 'Form Validation',
    type: 'multiple-choice',
    question: 'Mengapakah Form Validation menggunakan JavaScript penting sebelum data dihantar?',
    options: [
      'Memastikan pengguna mengisi maklumat wajib dengan format yang betul sebelum diproses',
      'Menjadikan borang lebih berwarna-warni',
      'Menukar bahasa laman web secara automatik',
      'Memuat turun fail CSS secara automatik',
    ],
    correctIndex: 0,
    explanation: 'Form validation menyemak input pengguna (contohnya memastikan ruangan tidak kosong atau email ada @) bagi mengelakkan ralat data.',
  },
  {
    id: 15,
    category: 'CSS Basics',
    type: 'find-error',
    question: 'Cari kesalahan dalam sintaks CSS berikut: "h1 { color blue; }"',
    options: [
      'Tertinggal tanda titik bertindih ( : ) selepas property color',
      'Perkataan h1 mesti ada tanda pagar #',
      'Tanda kurungan {} salah',
      'Warna blue mesti dalam huruf besar',
    ],
    correctIndex: 0,
    explanation: 'Sintaks CSS yang betul ialah property: value; (contoh: color: blue;). Wajib ada titik bertindih (:).',
  },
];

export const PREDICT_QUESTIONS: PredictQuestion[] = [
  {
    id: 1,
    title: 'Aktiviti 1: Button Onclick Alert',
    code: `<button onclick="alert('Selamat Datang ke STM!')">
  Klik Saya
</button>`,
    question: 'Apakah yang akan berlaku apabila pengguna menekan butang "Klik Saya"?',
    options: [
      'Popup dialog box muncul dengan mesej "Selamat Datang ke STM!"',
      'Teks butang bertukar menjadi "Selamat Datang ke STM!"',
      'Halaman web ditutup secara automatik',
      'Warna butang bertukar menjadi merah',
    ],
    correctIndex: 0,
    explanation: 'Atribut onclick memanggil fungsi alert() yang membuka popup dialog dengan mesej teks tersebut.',
  },
  {
    id: 2,
    title: 'Aktiviti 2: Class Selector Styling',
    code: `/* CSS */
.tajuk-utama {
  color: green;
  font-size: 24px;
}

<!-- HTML -->
<h1 class="tajuk-utama">Kolej Komuniti</h1>
<p>Kursus Web Development</p>`,
    question: 'Elemen manakah yang akan berwarna hijau (green) dan bersaiz 24px?',
    options: [
      'Hanya <h1>Kolej Komuniti</h1> sahaja',
      'Kedua-dua <h1> dan <p>',
      'Hanya <p>Kursus Web Development</p>',
      'Tiada elemen yang berubah',
    ],
    correctIndex: 0,
    explanation: 'Selector .tajuk-utama hanya memilih elemen yang mempunyai class="tajuk-utama", iaitu tag <h1>.',
  },
  {
    id: 3,
    title: 'Aktiviti 3: Box Model Spacing',
    code: `div {
  background-color: lightblue;
  padding: 30px;
  border: 5px solid navy;
}`,
    question: 'Apakah kesan penambahan "padding: 30px;" kepada elemen <div>?',
    options: [
      'Ruang jarak 30px terhasil di bahagian DALAM antara teks dengan garisan border navy',
      'Ruang jarak 30px terhasil di bahagian LUAR menolak kotak lain',
      'Ketebalan garisan border menjadi 30px',
      'Saiz teks bertukar menjadi 30px',
    ],
    correctIndex: 0,
    explanation: 'Padding berada di dalam sempadan (border), memberi ruang bernafas kepada kandungan (content) di dalam kotak.',
  },
  {
    id: 4,
    title: 'Aktiviti 4: Onchange Dropdown Theme',
    code: `<select onchange="document.body.style.backgroundColor = this.value">
  <option value="white">Putih</option>
  <option value="yellow">Kuning</option>
</select>`,
    question: 'Apakah yang berlaku apabila pengguna menukar pilihan dropdown kepada "Kuning"?',
    options: [
      'Warna latar belakang keseluruhan dokumen (body) bertukar kepada kuning',
      'Mesej popup alert kuning akan muncul',
      'Teks dropdown akan dipadam',
      'Tiada sebarang perubahan berlaku',
    ],
    correctIndex: 0,
    explanation: 'Event onchange mengesan pertukaran pilihan dan menukar document.body.style.backgroundColor kepada nilai "yellow".',
  },
  {
    id: 5,
    title: 'Aktiviti 5: CSS Text Properties',
    code: `p {
  text-align: center;
  font-weight: bold;
  text-decoration: underline;
}`,
    question: 'Bagaimanakah rupa teks perenggan <p> selepas menerima gaya CSS di atas?',
    options: [
      'Teks berada di tengah, berhuruf tebal, dan bergaris di bawah',
      'Teks berada di kiri, berhuruf condong, dan bergaris di atas',
      'Teks berwarna kelabu dan berkelip-kelip',
      'Teks dipadam dari paparan',
    ],
    correctIndex: 0,
    explanation: 'text-align: center (ke tengah), font-weight: bold (tebal), text-decoration: underline (bergaris bawah).',
  },
  {
    id: 6,
    title: 'Aktiviti 6: Form Validation onsubmit check',
    code: `<form onsubmit="if(document.getElementById('nama').value == '') { alert('Nama wajib diisi!'); return false; }">
  <input type="text" id="nama">
  <button type="submit">Hantar</button>
</form>`,
    question: 'Jika pengguna menekan butang "Hantar" tanpa memasukkan sebarang teks dalam input nama, apakah yang berlaku?',
    options: [
      'Popup "Nama wajib diisi!" muncul dan borang dihalang daripada dihantar (return false)',
      'Borang dihantar seperti biasa tanpa sebarang amaran',
      'Komputer akan dimulakan semula (restart)',
      'Input nama akan hilang dari skrin',
    ],
    correctIndex: 0,
    explanation: 'Kod JavaScript memeriksa jika nilai input kosong; jika ya, ia memaparkan alert dan return false untuk membatalkan penghantaran borang.',
  },
];

export const DEBUG_ITEMS: DebugItem[] = [
  {
    id: 'debug-css-1',
    title: '1. Ralat Titik Bertindih CSS (Missing Colon)',
    category: 'CSS',
    description: 'Pelajar cuba menukar warna teks h1 kepada biru tetapi styling tidak berfungsi.',
    buggyCode: `h1 {
  color blue;
  font-size: 28px;
}`,
    fixedCode: `h1 {
  color: blue;
  font-size: 28px;
}`,
    hint: 'Perhatikan antara property "color" dan nilainya "blue". Simbol apakah yang tertinggal?',
    explanation: 'Dalam CSS, setiap pasangan property dan value mesti dipisahkan dengan tanda titik bertindih ( : ) bukan jarak semata-mata.',
  },
  {
    id: 'debug-css-2',
    title: '2. Ralat Simbol ID Selector (Wrong ID Symbol)',
    category: 'CSS',
    description: 'Pelajar mahu menggayakan <h1 id="tajuk"> tetapi menggunakan simbol titik.',
    buggyCode: `.tajuk {
  color: red;
  text-align: center;
}`,
    fixedCode: `#tajuk {
  color: red;
  text-align: center;
}`,
    hint: 'Elemen HTML menggunakan id="tajuk". Apakah simbol pemilih (selector) untuk ID?',
    explanation: 'Simbol titik (.) adalah untuk class, manakala simbol pagar (#) adalah untuk ID.',
  },
  {
    id: 'debug-js-1',
    title: '3. Ralat Tanda Petik Popup (Unclosed String in alert)',
    category: 'JavaScript',
    description: 'Fungsi alert tidak muncul kerana terdapat ralat sintaks string.',
    buggyCode: `<script>
  alert("Selamat Belajar STM);
</script>`,
    fixedCode: `<script>
  alert("Selamat Belajar STM");
</script>`,
    hint: 'Periksa tanda petik (" ") di dalam kurungan alert. Adakah ia ditutup dengan betul?',
    explanation: 'Setiap teks rentetan (string) mesti mempunyai tanda pembuka dan penutup tanda petik yang sepadan seperti "teks".',
  },
  {
    id: 'debug-events-1',
    title: '4. Ejaan Event Salah (Typo in onclick)',
    category: 'Events',
    description: 'Butang diklik tetapi tiada sebarang tindakan berlaku.',
    buggyCode: `<button onclik="alert('Tahniah!')">
  Klik Saya
</button>`,
    fixedCode: `<button onclick="alert('Tahniah!')">
  Klik Saya
</button>`,
    hint: 'Semak ejaan perkataan "onclik". Huruf apakah yang tertinggal?',
    explanation: 'Nama event rasmi HTML ialah "onclick" (ada huruf "c"). Ejaan yang salah menyebabkan browser tidak mengenali event tersebut.',
  },
  {
    id: 'debug-css-3',
    title: '5. Unit Nilai CSS Tertinggal (Missing px unit)',
    category: 'CSS',
    description: 'Font size tidak membesar seperti yang diharapkan.',
    buggyCode: `p {
  font-size: 24;
  color: #333333;
}`,
    fixedCode: `p {
  font-size: 24px;
  color: #333333;
}`,
    hint: 'Dalam CSS, nilai saiz memerlukan unit ukuran seperti px (piksel).',
    explanation: 'Nilai saiz dalam CSS (kecuali 0) memerlukan unit seperti px, rem, em, atau % agar browser tahu skala pengiraan.',
  },
];

export const COMMON_MISTAKES = [
  {
    topic: 'CSS Syntax',
    wrong: 'color blue;',
    correct: 'color: blue;',
    desc: 'Lupa meletakkan titik bertindih (:) antara property dan value.',
  },
  {
    topic: 'CSS Semicolon',
    wrong: 'color: red font-size: 20px',
    correct: 'color: red; font-size: 20px;',
    desc: 'Lupa meletakkan tanda koma bertitik (;) di hujung setiap deklarasi.',
  },
  {
    topic: 'Selector Confusion',
    wrong: '<h1 class="header"> -> #header {}',
    correct: '<h1 class="header"> -> .header {}',
    desc: 'Guna simbol # untuk class atau guna simbol . untuk ID.',
  },
  {
    topic: 'JavaScript Quotes',
    wrong: 'alert(Hello World);',
    correct: 'alert("Hello World");',
    desc: 'Lupa meletakkan tanda petik (" ") untuk teks dalam alert.',
  },
  {
    topic: 'Event Spelling',
    wrong: '<button onclik="...">',
    correct: '<button onclick="...">',
    desc: 'Ejaan event salah seperti onclik, onsumbit, atau onchangee.',
  },
  {
    topic: 'Box Model Misunderstanding',
    wrong: 'Guna Margin untuk tolak teks di dalam kotak',
    correct: 'Guna Padding untuk ruang dalam, Margin untuk ruang luar',
    desc: 'Tertukar antara fungsi Padding (dalam border) dan Margin (luar border).',
  },
];

export const INDUSTRY_TIPS = [
  {
    id: 1,
    title: 'Gunakan External CSS untuk Projek Sebenar',
    badge: 'Best Practice',
    text: 'Dalam industri, sentiasa asingkan styling ke dalam fail style.css (External CSS). Ini memudahkan pengemaskinian tema satu website dari satu tempat sahaja.',
  },
  {
    id: 2,
    title: 'Gunakan Class untuk Elemen yang Boleh Berulang',
    badge: 'CSS Rule',
    text: 'Gunakan Class (.card, .btn) untuk styling yang boleh digunakan berulang kali. Simpan ID (#header, #borang) untuk elemen yang unik 1 sahaja pada halaman.',
  },
  {
    id: 3,
    title: 'Sentiasa Lakukan Form Validation Dua Peringkat',
    badge: 'Security',
    text: 'Client-side validation dengan JavaScript memberikan maklum balas pantas mesra pengguna. Namun, server-side validation tetap diperlukan untuk keselamatan data.',
  },
  {
    id: 4,
    title: 'Buka Console Browser (F12) untuk Debugging',
    badge: 'Developer Tool',
    text: 'Jika kod JavaScript anda tidak berfungsi, tekan kekunci F12 pada keyboard dan buka tab "Console" untuk melihat mesej ralat merah yang tepat!',
  },
];
