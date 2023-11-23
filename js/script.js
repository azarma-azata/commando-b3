document.getElementById('pauseButton').addEventListener('click', function() {
    var video = document.querySelector('.video-container video');
    if (video.paused) {
        video.play();
        this.innerText = '⏸️';
    } else {
        video.pause();
        this.innerText = 'Play';
    }
});