//function

// function Pegawai(nama, jabatan, gaji) {
//   this.nama = nama;
//   this.jabatan = jabatan;
//   this.gaji = gaji;

//   this.kerja = function (tambahGaji) {
//     this.gaji = this.gaji * tambahGaji;

//     console.log(`selamat ${this.nama} gaji kamu bertambah`);
//   };
// }

// let faldo = new Pegawai("faldo", "it division", 125000);

// menggunakan protype oop menggunakan class //
class Pegawai {
  constructor(nama, gaji) {
    this.nama = nama;
    this.gaji = gaji;
  }

  kerja(tambahGaji) {
    this.gaji += tambahGaji;
    console.log(`gaji kamu bertambah jadi jadi ${this.gaji}`);
  }
}

let faldo = new Pegawai("faldo", 200);
