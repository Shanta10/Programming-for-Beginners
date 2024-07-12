document.addEventListener('DOMContentLoaded', () => {
    // Cargar imágenes al completarse la carga del DOM
    const images = document.querySelectorAll('.image img');
    images.forEach(img => {
        const src = img.getAttribute('src');
        const image = new Image();
        image.src = src;
        image.onload = () => {
            img.classList.add('loaded');
        };
    });

    // Mostrar las secciones al hacer scroll
    window.addEventListener('scroll', () => {
        const subtopics = document.querySelectorAll('.subtopic');
        subtopics.forEach(subtopic => {
            const rect = subtopic.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                subtopic.classList.add('visible');
            } else {
                subtopic.classList.remove('visible');
            }
        });
    });

    // Función para mostrar el título al inicio
    const showTitle = () => {
        const header = document.querySelector('header');
        header.style.display = 'block';
        setTimeout(() => {
            header.style.opacity = '1';
        }, 500); // Mostrar después de 0.5 segundos
    };

    showTitle(); // Llamar a la función al cargar la página
});
