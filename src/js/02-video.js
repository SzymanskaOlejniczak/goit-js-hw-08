import { throttle } from 'lodash';

const iframePlayer = new Vimeo.Player(document.querySelector('#vimeo-player'));

const startTime = parseFloat(localStorage.getItem('videoplayer-current-time')) || 0;

iframePlayer.setCurrentTime(startTime);

function onPlaySeconds(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
  console.log(
    'Local saved time: ' + localStorage.getItem('videoplayer-current-time')
  );
}

iframePlayer.on('timeupdate', throttle(onPlaySeconds, 1000));

