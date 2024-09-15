document.querySelectorAll('.video-thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        const videoId = this.getAttribute('data-video-id');
        const iframe = document.createElement('iframe');
        iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1`);
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
        iframe.setAttribute('allowfullscreen', true);
        iframe.setAttribute('loading', 'lazy');
        const playButton = this.parentNode.querySelector('.play-button');
        if (playButton) {playButton.remove();}
        this.parentNode.replaceChild(iframe, this);
    });
});

document.querySelectorAll('.cov').forEach(cov => {cov.addEventListener('click', () => {cov.classList.toggle('show-before');});});