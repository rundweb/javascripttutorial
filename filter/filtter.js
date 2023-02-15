const angka = [1, 2, 4, 6, 8, -2, -1, -4, -3, 3];

// mencari angk alebih dari 3 meenggunakan for
// const angkanya = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] > 3) {
//     angkanya.push(angka[i]);
//   }
// }

// console.log(angkanya);

const anewAngka = angka.filter((a) => a > 3);

console.log(anewAngka);
