let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');

function showSlide(index) {
  const totalSlides = slides.length;
  if (index >= totalSlides) index = 0;
  if (index < 0) index = totalSlides - 1;

  document.querySelector('.slides').style.transform = `translateX(-${index * 100}vw)`;
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle('active', i === index);
  });

  currentIndex = index;
}

function goToSlide(index) {
  showSlide(index);
}

// Auto-slide every 5 seconds
setInterval(() => {
  showSlide(currentIndex + 1);
}, 6000);

// Initialize the first slide
showSlide(currentIndex);
