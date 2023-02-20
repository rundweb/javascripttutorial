const activeClass = document.querySelectorAll("li a");
const navResp = document.querySelector(".nav-resp");
const searching = document.getElementById("button");
const toggleSearch = document.querySelector(".search");
const toggleMenu = document.querySelector(".toggle");
const iconToggle = document.querySelector(".bx-menu");

activeClass.forEach((button) => {
  button.addEventListener("click", function () {
    activeClass.forEach((act) => act.classList.remove("active"));
    this.classList.add("active");
  });
});

searching.addEventListener("click", () => {
  toggleSearch.classList.toggle("search-active");
});

document.querySelectorAll("ul").forEach((n) =>
  n.addEventListener("click", () => {
    toggleSearch.classList.remove("search-active");
    navResp.classList.remove("menu-active");
  })
);

toggleMenu.addEventListener("click", () => {
  navResp.classList.toggle("menu-active");
  iconToggle.classList.toggle("bx-x");
});

// document.querySelectorAll("ul-resp").forEach((n) =>
//   n.addEventListener("click", () => {

//   })
// );
