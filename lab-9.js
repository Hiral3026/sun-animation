const sun = document.getElementById('sun');
const sky = document.getElementById('sky');
const playPauseBtn = document.getElementById('play-button');

playPauseBtn.addEventListener('click', function() {
  if (sun.style.animationPlayState === 'paused') {
    sun.style.animationPlayState = 'running';
    sky.style.animationPlayState = 'running';
    
  } else {
    sun.style.animationPlayState = 'paused';
    sky.style.animationPlayState = 'paused';
    
  }
});
