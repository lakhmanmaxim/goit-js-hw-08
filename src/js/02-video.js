import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const VIDEO_CURRENT_TIME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(setVideoCurrentTimeToStorage, 1000));

function setVideoCurrentTimeToStorage() {
  player.getCurrentTime().then(function (seconds) {
    localStorage.setItem(VIDEO_CURRENT_TIME_KEY, seconds);
  });
}

player.setCurrentTime(localStorage.getItem(VIDEO_CURRENT_TIME_KEY));
