
document.addEventListener('DOMContentLoaded', function() {
    var videoPlayer = document.getElementById('videoPlayer');

    // Add event listener to start playing the video when it's clicked
    videoPlayer.addEventListener('click', function() {
        this.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    });
});
window.addEventListener('resize', function() {
    var videoWrapper = document.querySelector('.video-wrapper');
    var viewportWidth = window.innerWidth;
    var viewportHeight = window.innerHeight;
    
    // Adjust padding-bottom dynamically based on viewport dimensions
    videoWrapper.style.paddingBottom = (viewportWidth / viewportHeight * 100) + '%';
});
