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
  document.querySelector("#Mise-en-page"),
  document.querySelector("#customize-product-card"),
  document.querySelector("#logo-type-card"),
];

var body = document.querySelector("body");

body.addEventListener("scroll", () => {
  let currentIndex = -1;

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (body.scrollTop >= sectionTop + window.innerHeight / 2) {
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

var cursor = document.querySelector(".cursor");
var links = document.querySelectorAll("a");

var onMouseMove = function (event) {
  cursor.style.top = event.y - 15 + "px";
  cursor.style.left = event.x - 15 + "px";
};

var onMouseEnter = function () {
  cursor.style.backgroundImage = "url('../icon/curser.svg')";
};

var onMouseLeave = function () {
  cursor.style.backgroundImage = "url('../icon/pointeur.svg')";
};

document.addEventListener("mousemove", onMouseMove);

links.forEach((link) => {
  link.addEventListener("mouseenter", onMouseEnter);
  link.addEventListener("mouseleave", onMouseLeave);
});
