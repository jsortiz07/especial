document.addEventListener('DOMContentLoaded', function() {
    const surpriseMessage = document.getElementById('surprise-message');
    const card = document.querySelector('.card');

    // Mostrar carta después de que el panda y el corazón lleguen al centro
    setTimeout(() => {
        card.style.opacity = 1; // Hacer visible la carta
        card.style.animation = "appear 1s forwards"; // Aplicar animación
        surpriseMessage.textContent = '¡El panda te envía mucho amor y amistad! 💖';
        surpriseMessage.style.opacity = 1;
    }, 6000); // Después de 6 segundos
});
