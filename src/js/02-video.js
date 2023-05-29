
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

 
player.on('timeupdate', throttle(saveTime, 1000));

function saveTime(event) {
   localStorage.setItem('videoplayer-current-time', JSON.stringify (event.seconds));
   console.log(set);

};

player.setCurrentTime(localStorage.getItem('videoplayer-current-time',) || 0);
 

const currentTime = localStorage.getItem('videoplayer-current-time');
console.log(currentTime);


