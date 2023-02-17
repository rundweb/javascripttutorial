//acttive classes and remove classes

// const actives = document.querySelectorAll("a");

// actives.forEach((button) => {
//   button.addEventListener("click", function () {
//     actives.forEach((act) => act.classList.remove("active"));
//     this.classList.add("active");
//   });
// });
const bx = document.querySelector(".bx-menu");
// const testing = document.querySelector(".testing");
const menu = document.querySelector(".nav-list");
// dark mode
function dark() {
  document.body.classList.toggle("dark");
  bx.classList.toggle("bx-x");
  //   testing.classList.toggle("ontesting");
  menu.classList.toggle("list-active");
}

document.querySelectorAll(".nav-list").forEach((n) =>
  n.addEventListener("click", () => {
    document.body.classList.remove("dark");
    bx.classList.remove("bx-x");
    //   testing.classList.toggle("ontesting");
    menu.classList.remove("list-active");
  })
);
