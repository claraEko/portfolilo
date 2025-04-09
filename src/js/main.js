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

const dots = document.querySelectorAll("#dot ul li");
const sections = [
  document.querySelector("#aboutme"),
  document.querySelector("#customize-product-card"),
  document.querySelector("#logo-type-card"),
];

window.addEventListener("scroll", () => {
  let currentIndex = -1;

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop + window.innerHeight / 2) {
      currentIndex = index;
    }
  });

  if (currentIndex !== -1) {
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
  }
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", (e) => {
    e.preventDefault();
    sections[index].scrollIntoView({ behavior: "smooth" });
  });
});
