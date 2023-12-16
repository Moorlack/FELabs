document.getElementById('playButton').addEventListener('click', function() {
  var video = document.getElementById('myVideo');
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});
