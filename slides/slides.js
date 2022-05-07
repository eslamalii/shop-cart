var slides = document.querySelectorAll(".slide");
var slideBg = document.getElementById("slideshow");
var leftBtn = document.getElementById("left");
var rightBtn = document.getElementById("right");

let activeSlide = 0;

const setBackground = () => {
  slideBg.style.backgroundImage = slides[activeSlide].style.backgroundImage;
};

const setAvticeSlide = () => {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[activeSlide].classList.add("active");
};

const increaseSlide = () => {
  activeSlide++;
  if (activeSlide > slides.length - 1) activeSlide = 0;
  setBackground();
  setAvticeSlide();
};

rightBtn.addEventListener("click", () => {
  increaseSlide();
});

leftBtn.addEventListener("click", () => {
  activeSlide--;
  if (activeSlide < 0) activeSlide = slides.length - 1;
  setBackground();
  setAvticeSlide();
});

setInterval(() => {
  increaseSlide();
}, 3000);

setBackground();
