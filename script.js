document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener referencias a los elementos
    const videoSelector = document.getElementById('videoSelector');
    const videoPlayer = document.getElementById('myVideoPlayer');
    const sourceElement = videoPlayer.querySelector('source');

    // 2. Agregar un "escuchador de eventos" al selector
    videoSelector.addEventListener('change', (event) => {
        // Obtener el valor (la ruta del archivo) del video seleccionado
        const selectedVideoSrc = event.target.value;

        // 3. Actualizar la fuente del video
        sourceElement.src = selectedVideoSrc;
        
        // 4. Cargar y Recargar el Reproductor
        // Pausar el video actual (si se está reproduciendo)
        videoPlayer.pause(); 
        
        // Indicar al reproductor que cargue la nueva fuente
        videoPlayer.load(); 
        
        // Opcional: Iniciar la reproducción del nuevo video automáticamente
        // videoPlayer.play(); 
    });
});
