// var slides = document.querySelectorAll(".card");
// var currentSlide = 0;
// var slideInterval = setInterval(nextSlide, 5000);

// function nextSlide() {
//   slides[currentSlide].style.display = "none";
//   currentSlide = (currentSlide + 1) % slides.length;
//   slides[currentSlide].style.display = "flex";
// }
const carouselTrack = document.querySelector('.carousel-track');
const slideWidth = document.querySelector('.carousel-slide').offsetWidth;
const numSlides = document.querySelectorAll('.carousel-slide').length;
let currentIndex = 0;
let autoplayInterval;

function moveToSlide(index) {
  carouselTrack.style.transform = `translateX(-${index * slideWidth}px)`;
  currentIndex = index;
}

function startAutoplay() {
  autoplayInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % numSlides;
    moveToSlide(currentIndex);
  }, 3000); // Set the autoplay interval (in milliseconds)
}

function stopAutoplay() {
  clearInterval(autoplayInterval);
}

startAutoplay();