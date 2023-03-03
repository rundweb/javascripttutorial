const boxBtn = document.querySelector('.add-box'),
    popupBox = document.querySelector('.popup-box'),
    closeBtn = popupBox.querySelector('header p'),
    inputTitle = popupBox.querySelector('input'),
    inputDesc = popupBox.querySelector('textarea'),
    addBtn = popupBox.querySelector('button')

const bulans = ['januari','Febuari','Maret','April']
const namaHaris = ['minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu']
const notes = JSON.parse(localStorage.getItem('notes') || '[]')

boxBtn.addEventListener('click', () => {
    popupBox.classList.add('show')
})

function showNotes() {
    document.querySelectorAll('.note').forEach(note => note.remove())
    notes.forEach((note)=>{
        let divTag =   `<div class="note">
            <p>${note.judul}</p>
            <p>${note.desc}</p>
            <p>${note.tanggal}</p>
        </div>`

        boxBtn.insertAdjacentHTML('afterend',divTag)
    })
}

showNotes()

closeBtn.addEventListener('click', () => {
    inputTitle.value = ''
    inputDesc.value = ''
    popupBox.classList.remove('show')
})

addBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let noteTitle = inputTitle.value,
        noteDesc = inputDesc.value,
        objDate = new Date(),
        bulan = bulans[objDate.getMonth()],
        hari = objDate.getDate(),
        tahun = objDate.getFullYear(),
        namaHari = namaHaris[objDate.getDay()]

    let noteInfo = {
        judul: noteTitle,
        desc: noteDesc,
        tanggal: `${namaHari} ${hari} ${bulan} ${tahun}`
    }

    notes.push(noteInfo)

    localStorage.setItem('notes', JSON.stringify(notes))

    closeBtn.click()
    showNotes()
})