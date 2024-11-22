// carrousel 1
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.thumbnail-wrapper');
    const mainImage = document.getElementById('main-image');
    const upButton = document.getElementById('up-button');
    const downButton = document.getElementById('down-button');
    const thumbnails = document.querySelectorAll('.thumbnail-wrapper img'); 
    const totalImages = thumbnails.length; 
    const itemsPerPage = 3; // Mostrar 3 imágenes por vez
    let currentIndex = 0; // Índice de la imagen actual

    
    function updateCarrusel() {
        
        thumbnails.forEach((thumbnail, index) => {
            if (index >= currentIndex && index < currentIndex + itemsPerPage) {
                thumbnail.style.display = "block"; // Mostrar miniaturas en el rango actual
            } else {
                thumbnail.style.display = "none"; // Ocultar las demás miniaturas
            }
        });

        
        thumbnails.forEach((thumbnail) => {
            thumbnail.addEventListener('click', function () {
                mainImage.src = this.src;
            });
        });
    }

    mainImage.addEventListener('mousemove', (e) => {
        const rect = mainImage.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
    
        mainImage.style.transformOrigin = `${x}% ${y}%`;
        mainImage.style.transform = 'scale(2)';
    });
    
    mainImage.addEventListener('mouseleave', () => {
        mainImage.style.transform = 'scale(1)';
        mainImage.style.transformOrigin = 'center';
    });

    
    upButton.addEventListener('click', function () {
        // Solo podemos ir "hacia atrás" si no estamos en el primer grupo
        if (currentIndex > 0) {
            currentIndex -= itemsPerPage; // Mover hacia atrás tres imágenes
        }
        updateCarrusel(); 
    });

    
    downButton.addEventListener('click', function () {
        // Mover el índice hacia adelantepara que se vean imágenes 3, 4, 5
        if (currentIndex + itemsPerPage < totalImages - 1) {
            currentIndex += itemsPerPage; // Mover hacia adelante tres imágenes
        } else if (currentIndex + itemsPerPage === totalImages - 1) {
            
            currentIndex = totalImages - itemsPerPage; // Ajusto el índice al último grupo
        }
        updateCarrusel(); 
    });



   
    updateCarrusel();

    




    // Lógica para el carrusel 2
    const carrusel2 = document.querySelector(".carousel-track");
    const items = document.querySelectorAll(".carrusel-item");
    const btnPrev = document.querySelector(".carousel-button.left");
    const btnNext = document.querySelector(".carousel-button.right");

    const puntos = document.querySelectorAll("#puntos li");

    if (carrusel2 && items.length > 0 && btnPrev && btnNext) {
        let currentIndex = 0;
        const itemsPerPage = 4;

        
        function updateCarrusel2() {
            // Oculto todos los ítems
            items.forEach(item => item.classList.remove("visible"));

            // Muestro los ítems de la página actual
            for (let i = currentIndex; i < currentIndex + itemsPerPage && i < items.length; i++) {
                items[i].classList.add("visible");
            }

            // calculo y desplazo
            const itemWidth = items[0].offsetWidth; // Ancho de cada ítem
            const scrollToPosition = currentIndex * itemWidth;
            carrusel2.scrollLeft = scrollToPosition;

            // Actualizar los puntos
            updatePuntos();
        }

        // Función para actualizar los puntos
        function updatePuntos() {
            puntos.forEach((punto, index) => {
                const icon = punto.querySelector("i");
                if (index === Math.floor(currentIndex / itemsPerPage)) {
                    icon.classList.remove("fa-regular");
                    icon.classList.add("fa-solid");
                    punto.classList.add("activo");
                } else {
                    icon.classList.remove("fa-solid");
                    icon.classList.add("fa-regular");
                    punto.classList.remove("activo");
                }
            });
        }

        //  botones
        btnPrev.addEventListener("click", () => {
            currentIndex -= itemsPerPage;
            if (currentIndex < 0) {
                currentIndex = items.length - itemsPerPage;
            }
            updateCarrusel2();
        });

        btnNext.addEventListener("click", () => {
            currentIndex += itemsPerPage;
            if (currentIndex >= items.length) {
                currentIndex = 0;
            }
            updateCarrusel2();
        });

        // Agregar funcionalidad clickeable a los puntos
        puntos.forEach((punto, index) => {
            punto.addEventListener("click", () => {
                currentIndex = index * itemsPerPage;
                updateCarrusel2();
            });
        });

       
        updateCarrusel2();
    }
});
