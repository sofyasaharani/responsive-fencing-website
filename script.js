/** @format */

const toogle = document.querySelector(".toogle");
const active = document.querySelector(".navbar");

toogle.addEventListener("click", function () {
  active.classList.toggle("active");
});

// klik di luar sidebar untuk menghilangkan nav

document.addEventListener("click", function (e) {
  if (!toogle.contains(e.target) && !active.contains(e.target)) {
    active.classList.remove("active");
  }
});
