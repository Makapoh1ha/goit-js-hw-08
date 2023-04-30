import player  from '@vimeo/player';

import throttle from 'lodash.throttle';

const PLAYER_CURRENT_TIME = "videoplayer-current-time"
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

function onPlayerCurrentTime({ seconds }) {
    localStorage.setItem(PLAYER_CURRENT_TIME, seconds);
}
player.on('timeupdate', throttle(onPlayerCurrentTime, 1000));


setPlayerCurrentTime()

function setPlayerCurrentTime() {
    if (!localStorage.getItem(PLAYER_CURRENT_TIME)) {
        return
    }
    player.setCurrentTime(localStorage.getItem(PLAYER_CURRENT_TIME))
}


