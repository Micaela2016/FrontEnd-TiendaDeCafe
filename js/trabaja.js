// Escucha el evento de submit del formulario
document.querySelector(".trabaja__form").addEventListener("submit", function(event) {
    let isValid = true;    
    const inputs = document.querySelectorAll(".trabaja__form-input:not([name='telefono']):not([name='your-cv'])");
    inputs.forEach(input => {        
        const errorMessage = input.nextElementSibling;      
        if (input.value.trim() === "") {
            errorMessage.textContent = "El campo es obligatorio.";
            errorMessage.style.display = "block"; 
            isValid = false;
        } else {
            errorMessage.style.display = "none"; 
        }
    });   
    if (!isValid) {
        event.preventDefault();
    }
});
