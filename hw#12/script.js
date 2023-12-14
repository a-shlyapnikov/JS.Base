const containerEl = document.querySelector('.container');
const playerEl = document.createElement('video');
playerEl.src = 'video.mp4';
playerEl.classList.add('player');

const controls = document.createElement('div');
controls.classList.add('controls');

const btnPlay = document.createElement('div');
btnPlay.innerHTML = `<i class="fa-solid fa-play"></i>`
btnPlay.classList.add('btn')

const btnPause = document.createElement('div');
btnPause.innerHTML = `<i class="fa-solid fa-pause"></i>`
btnPause.classList.add('btn')

const volume = document.createElement('input');
volume.type = 'range';
volume.min = 0;
volume.max = 10;
volume.step = 1;
volume.value = 5;

playerEl.volume = 0.5;

controls.appendChild(btnPlay);
controls.appendChild(btnPause);
controls.appendChild(volume);

containerEl.appendChild(playerEl)
containerEl.appendChild(controls);


btnPlay.addEventListener('click', function (e) {
    playerEl.play();
});

btnPause.addEventListener('click', function (e) {
    playerEl.pause();
});

volume.addEventListener('change', function (e) {
    playerEl.volume = e.target.value / 10;
});




