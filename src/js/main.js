var bigStar = document.querySelector(".big-star");
var smalStar = document.querySelector(".smal-star");

function bigRotateStars() {
  bigStar.classList.remove("is-active");
  void bigStar.offsetWidth;
  bigStar.classList.add("is-active");
}
function bigZoomStars() {
  bigStar.classList.remove("zoom");
  void bigStar.offsetWidth;
  bigStar.classList.add("zoom");
}
function smalRotateStars() {
  smalStar.classList.remove("is-active");
  void bigStar.offsetWidth;
  smalStar.classList.add("is-active");
}
function smalZoomStars() {
  smalStar.classList.remove("zoom");
  void bigStar.offsetWidth;
  smalStar.classList.add("zoom");
}
bigStar.addEventListener("mouseenter", bigRotateStars);
bigStar.addEventListener("click", bigZoomStars);
smalStar.addEventListener("mouseenter", smalRotateStars);
smalStar.addEventListener("click", smalZoomStars);
