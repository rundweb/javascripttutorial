//mengambil data dari atribut data-duration
const datas = Array.from(document.querySelectorAll("[data-duration]"));

// fillter data dari dalam li ambil yang hanya ada jsnya saja
const datajs = datas.filter((data) => data.innerHTML.includes("js"));

//memanggil dari atribut data-duration , hanya mengambil dat adurationya saja
const dataDuration = datajs.map((datad) => datad.dataset.duration);

//mengubah menit menjadi array , memisahkan titik dua , menjadikan angkanya menjadi int
const waktu = dataDuration.map((waktuDiubah) => {
  const parts = waktuDiubah.split(":").map((part) => parseFloat(part));
  return parts[0] * 60 + parts[1];
});

// menjumlahkan waktu
let jumlah = waktu.reduce((acc, curent) => acc + curent);
console.log(jumlah);

// mengubah menjadi jam menit detik
const jam = Math.floor(jumlah / 3600);
jumlah = jumlah - jam * 3600;
const menit = Math.floor(jumlah / 60);
const detik = jumlah - menit * 60;

console.log(jam);
console.log(menit);
console.log(detik);

// masukan ke dom
const pDurasi = document.querySelector(".total-data");
pDurasi.innerHTML = `${jam} : ${menit} : ${detik}`;

const jumlahvideos = datajs.length;
const jvide = document.querySelector(".jumlah-data");
jvide.innerHTML = `${jumlahvideos} data`;
