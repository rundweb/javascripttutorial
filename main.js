// let nama = prompt("hallo selamat datang silahkan masukan nama kamu");
// let usia = prompt("usia kamu berapa");
let x =prompt("masukan angka kamu disini");
let y =prompt("ditambah dengan angka kamu disni");
let a =prompt(`tebakan kamu berapa ${x} + ${y} berapa ?`)
let z =parseFloat(x) +parseFloat(y);
let b;

if (a == z) {
  b = "benar";
} else {
  b = "salah";
}

// alert(`hallo ${nama} usia kamu ${usia}`);
alert(`jawaban kamu ${a} /dan jawaban yang benar adalah ${z} jadi jawaban kamu ${b}`);
