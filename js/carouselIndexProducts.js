// Script para el segundo carrusel
(function () {
  const track = document.querySelector('.carousel__track');
  const items = document.querySelectorAll('.carousel__item');
  const leftArrow = document.querySelector('.carousel__arrow--left');
  const rightArrow = document.querySelector('.carousel__arrow--right');
  const indicatorsContainer = document.querySelector('.carousel__indicators');

  let visibleItems = 2;
  let currentPage = 0;
  let itemWidth;


  function updateVisibleItems() {
    const width = window.innerWidth;
    visibleItems = width >= 1024 ? 5 : width >= 576 ? 3 : 2;
    createIndicators();
    updateCarousel();
  }

  function createIndicators() {
    const totalPages = Math.ceil(items.length / visibleItems);
    indicatorsContainer.innerHTML = '';
    for (let i = 0; i < totalPages; i++) {
      const indicator = document.createElement('button');
      indicator.classList.add('carousel__indicator');
      if (i === currentPage) indicator.classList.add('carousel__indicator--active');
      indicator.dataset.page = i;
      indicatorsContainer.appendChild(indicator);
    }
  }

  function updateCarousel() {
    itemWidth = items[0].getBoundingClientRect().width;

    // Mueve el track según la página actual
    const offset = currentPage * itemWidth * visibleItems;
    track.style.transform = `translateX(-${offset}px)`;
  
    // Actualiza los indicadores
    const indicators = document.querySelectorAll('.carousel__indicator');
    indicators.forEach((indicator, index) => indicator.classList.toggle('carousel__indicator--active', index === currentPage));
  
    // Para depuración}
  }


  leftArrow.addEventListener('click', () => {
    currentPage = currentPage === 0 ? Math.ceil(items.length / visibleItems) - 1 : currentPage - 1;
    updateCarousel();
  });

  rightArrow.addEventListener('click', () => {
    const totalPages = Math.ceil(items.length / visibleItems);
    currentPage = currentPage === totalPages - 1 ? 0 : currentPage + 1;
    updateCarousel();
  });

  indicatorsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('carousel__indicator')) {
      currentPage = parseInt(e.target.dataset.page, 10);
      updateCarousel();
    }
  });

  window.addEventListener('resize', updateVisibleItems);
  updateVisibleItems();

  console.log({
    itemWidth,
    visibleItems,
    currentPage,
    transformValue: -currentPage * visibleItems * itemWidth,
  });
})();

