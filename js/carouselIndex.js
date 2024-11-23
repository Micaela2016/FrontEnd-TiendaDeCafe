// Script para el primer carrusel
(function() {
  const slides = document.querySelectorAll('.carouselPrincipal__slide');
  const dots = document.querySelectorAll('.carouselPrincipal__dot');
  const prevButton = document.querySelector('.carouselPrincipal__arrow--prev');
  const nextButton = document.querySelector('.carouselPrincipal__arrow--next');
  const container = document.querySelector('.carouselPrincipal__container');

  let currentIndex = 0;

  function updateCarousel(index) {
    currentIndex = (index + slides.length) % slides.length;
    container.style.transform = `translateX(-${currentIndex * 100}%)`;
    slides.forEach((slide, i) => slide.classList.toggle('carouselPrincipal__slide--active', i === currentIndex));
    dots.forEach((dot, i) => dot.classList.toggle('carouselPrincipal__dot--active', i === currentIndex));
  }

  prevButton.addEventListener('click', () => updateCarousel(currentIndex - 1));
  nextButton.addEventListener('click', () => updateCarousel(currentIndex + 1));
  dots.forEach((dot, i) => dot.addEventListener('click', () => updateCarousel(i)));

  updateCarousel(currentIndex);
})();
