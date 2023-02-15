const angka = [1, 2, 4, 6, 8, -2, -1, -4, -3, 3];

const newAngka = angka.reduce(
  (nilaiAwal, nilaiSelanjutnya) => nilaiAwal + nilaiSelanjutnya , 20
);

console.log(newAngka)

// 20 itu adalah nilai paling awal