let nama = "rundweb";
let usia = 23;
let tinggiBadan = 175.6;
let beratBadan;
let pacar = 2;

beratBadan = 81;

//pengkodisian menggunakan if
// if (pacar == null) {
//   pacar = "belum punya pacar";
// } else {
//   pacar = "sudah punya pacar";
// }



// pengkondisian menggunakan switch
switch (pacar) {
    case 1:
        pacar = "saya mempunyai pacar"
        break;

    default:
        pacar = "saya tidak mempunyai pacar"
        break;
}

alert(
  `nama saya ${nama}, usia saya ${usia}, tinggi badan saya adalah ${tinggiBadan}, dan berat badan saya ${beratBadan}, dan pacar saya ${pacar}`
);
