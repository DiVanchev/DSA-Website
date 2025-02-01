document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("backgroundMusic");
    const playBtn = document.getElementById("playBtn");
    const stopBtn = document.getElementById("stopBtn");
    const pauseBtn = document.getElementById("pauseBtn")
    const volumeSlider = document.getElementById("volumeSlider")

    playBtn.addEventListener("click", function () {
        audio.play();
    });

    stopBtn.addEventListener("click", function () {
        audio.pause();
        audio.currentTime = 0;
    });
    pauseBtn.addEventListener("click", function () {
        if (audio.currentTime > 0) { 
            if (!audio.paused) {
                audio.pause();  
            } else {
                audio.play();  
            }
        }
    });
    volumeSlider.addEventListener("input", function () {
        audio.volume = volumeSlider.value;  
    });
});
