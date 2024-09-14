document.addEventListener('DOMContentLoaded', () => {
    const mainContainer = document.querySelector('.main');
    const images = document.querySelectorAll('.vidi img');
    function updateVideo(videoId) {
        mainContainer.innerHTML = `
                    <iframe
                        src="https://www.youtube.com/embed/${videoId}"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                `;
    }
    function setActiveImage(img) {
        images.forEach(image => image.classList.remove('active'));
        img.classList.add('active');
    }
    const defaultVideoId = images[0].getAttribute('data-id').split('?')[0];
    updateVideo(defaultVideoId);
    setActiveImage(images[0]);
    images.forEach(img => {
        img.addEventListener('click', () => {
            const videoId = img.getAttribute('data-id').split('?')[0];
            updateVideo(videoId);
            setActiveImage(img);
        });
    });
});