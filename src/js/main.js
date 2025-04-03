var bigStar = document.querySelector(".big-star");
var smalStar = document.querySelector(".smal-star");

function bigRotateStars() {
  bigStar.classList.remove("is-active");
  void bigStar.offsetWidth;
  bigStar.classList.add("is-active");
}
function smalRotateStars() {
  smalStar.classList.remove("is-active");
  void bigStar.offsetWidth;
  smalStar.classList.add("is-active");
}
bigStar.addEventListener("mouseenter", bigRotateStars);
smalStar.addEventListener("mouseenter", smalRotateStars);
