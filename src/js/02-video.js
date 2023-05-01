import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const onPlay = function (e) {
  const currentTime = e.seconds;

  
  save(STORAGE_KEY, currentTime);
};

player.on('timeupdate', onPlay);

const timeForLoad = load(STORAGE_KEY);
player
  .setCurrentTime(timeForLoad)
  .then(function (seconds) {
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
