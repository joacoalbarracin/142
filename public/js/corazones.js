document.addEventListener('DOMContentLoaded', function () {
    const heartIcon = document.querySelector('.fa-heart');
    const duration = 3000; // Duración en milisegundos (3 segundos)

    heartIcon.addEventListener('click', function () {
        createHearts();
    });

    function createHearts() {
        const heartContainer = document.createElement('div');
        heartContainer.classList.add('heart-container');
        document.body.appendChild(heartContainer);

        const heartCount = 100; // Número de corazones

        // Función para crear un corazón
        function createHeart() {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.top = Math.random() * window.innerHeight + 'px';
            heart.innerHTML = '♥';
            heartContainer.appendChild(heart);

            // Agregar un pequeño retraso antes de cambiar la opacidad
            setTimeout(() => {
                heart.style.opacity = 1; // Cambiar la opacidad a 1 para hacerlo visible
            }, 10); // Pequeño retraso en milisegundos

            return heart;
        }

        // Crear corazones iniciales
        const initialHearts = [];
        for (let i = 0; i < heartCount; i++) {
            initialHearts.push(createHeart());
        }

        // Eliminar corazones después de la duración
        setTimeout(() => {
            initialHearts.forEach(heart => {
                heart.style.opacity = 0; // Cambiar la opacidad gradualmente a 0
                setTimeout(() => {
                    heart.remove(); // Eliminar el corazón después de la transición
                }, 1000); // Tiempo de la transición en milisegundos
            });
        }, duration);

        const startTime = Date.now();
    }
});
