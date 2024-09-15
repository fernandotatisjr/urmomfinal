// Function to handle video play
function playVideo(thumbnail) {
    const videoId = thumbnail.getAttribute('data-video-id');
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1`);
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    iframe.setAttribute('allowfullscreen', true);
    iframe.setAttribute('loading', 'lazy');
    const playButton = thumbnail.parentNode.querySelector('.play-button');
    if (playButton) {playButton.remove();}
    thumbnail.parentNode.replaceChild(iframe, thumbnail);
}
document.querySelectorAll('.video-thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        playVideo(this);
    });
});
document.querySelectorAll('.play-button').forEach(button => {
    button.addEventListener('click', function() {
        const thumbnail = this.parentNode.querySelector('.video-thumbnail');
        if (thumbnail) {
            playVideo(thumbnail);
        }
    });
});

document.querySelectorAll('.cov').forEach(cov => {cov.addEventListener('click', () => {cov.classList.toggle('show-before');});});