// Script para el primer carrusel
(function() {
  const slides = document.querySelectorAll('.carouselPrincipal__slide');
  const dots = document.querySelectorAll('.carouselPrincipal__dot');
  const prevButton = document.querySelector('.carouselPrincipal__arrow--prev');
  const nextButton = document.querySelector('.carouselPrincipal__arrow--next');
  const container = document.querySelector('.carouselPrincipal__container');

  let currentIndex = 0;

  let currentSlide = 0;

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

document.addEventListener("DOMContentLoaded", () => {
  const contents = document.querySelectorAll(".carouselPrincipal__content");
  contents.forEach((content) => {
    setTimeout(() => {
      content.classList.add("show");
    }, 500); // Retraso para que la transición sea visible
  });
});

function resetAnimations() {
  slides.forEach((slide) => {
    const content = slide.querySelector(".carouselPrincipal__content");
    content.classList.remove("show");
    
    // Reinicia la animación quitando la clase y volviéndola a aplicar con un pequeño retraso
    setTimeout(() => {
      content.style.opacity = "0";
      content.style.transform = "translateY(20px)";
    }, 100);
  });
}

function showSlide(index) {
  // Reinicia las animaciones de todos los contenidos
  resetAnimations();

  // Muestra el slide actual y anima su contenido
  slides.forEach((slide, i) => {
    const content = slide.querySelector(".carouselPrincipal__content");
    if (i === index) {
      slide.classList.add("carouselPrincipal__slide--active");

      // Activa la transición después de un pequeño retraso para que se note la animación
      setTimeout(() => {
        content.classList.add("show");
      }, 100);
    } else {
      slide.classList.remove("carouselPrincipal__slide--active");
    }
  });

  // Actualizar indicadores
  indicators.forEach((dot, i) => {
    dot.classList.toggle("carouselPrincipal__dot--active", i === index);
  });
}

nextArrow.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

prevArrow.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

// Inicializa el primer slide
showSlide(currentSlide);