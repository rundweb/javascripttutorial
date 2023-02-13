const namaClassBtn = document.querySelector('.btn')
const namaClassDipanggil = document.querySelector('.test')

// function untuk memanggil class yang di panggil

namaClassBtn.addEventListener('click', ()=>{
    namaClassBtn.classList.toggle('btn-click')
    namaClassDipanggil.classList.toggle('muncul')

})
