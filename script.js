document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener referencias a los elementos
    const videoPlayer = document.getElementById('myVideoPlayer');
    const sourceElement = videoPlayer.querySelector('source');
    const currentVideoNameDisplay = document.getElementById('currentVideoName');
    const thumbnails = document.querySelectorAll('.thumbnail-item'); // Obtener todos los ítems de la galería
    // const actionButton = document.getElementById('actionButton'); // Referencia para el nuevo botón

    // Función para actualizar el nombre del video en la interfaz
    function updateVideoNameDisplay(name) {
        currentVideoNameDisplay.textContent = name;
    }

    // Función principal para cargar un nuevo video
    function loadNewVideo(src, name, poster) {
        // Pausar el video actual
        videoPlayer.pause();

        // 2. Actualizar la fuente del video y el póster
        sourceElement.src = src;
        videoPlayer.poster = poster;
        
        // 3. Cargar el reproductor
        videoPlayer.load();

        // 4. Actualizar el nombre en la interfaz
        updateVideoNameDisplay(name);

        // Opcional: Iniciar la reproducción automáticamente (puede ser bloqueado por el navegador)
        // videoPlayer.play().catch(error => {
        //     console.warn("Auto-play bloqueado.", error);
        // });
    }

    // 5. Agregar un "escuchador de eventos" a cada miniatura
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            // A. Obtener datos del video del atributo 'data-'
            const selectedVideoSrc = thumbnail.dataset.src;
            const selectedVideoName = thumbnail.dataset.name;
            const selectedVideoPoster = thumbnail.dataset.poster;

            // B. Cargar el video
            loadNewVideo(selectedVideoSrc, selectedVideoName, selectedVideoPoster);

            // C. **Dinámico:** Manejar el estado 'active' para indicar la selección
            // Remover la clase 'active' de todos
            thumbnails.forEach(t => t.classList.remove('active'));

            // Agregar la clase 'active' al ítem clickeado
            thumbnail.classList.add('active');
        });
    });
    
    // Inicialización: Asegurar que el nombre y el estado 'active' sean correctos al cargar
    updateVideoNameDisplay(document.querySelector('.thumbnail-item.active').dataset.name);

    // *****************************************************************
    // EJEMPLO de cómo agregar funcionalidad al nuevo botón:
    /*
    if (actionButton) {
        actionButton.addEventListener('click', () => {
            // Reemplaza esta alerta con la acción que desees, por ejemplo, un enlace:
            window.location.href = 'https://ejemplo.com/pagina-de-pago';
        });
    }
    */
    // *****************************************************************
});
