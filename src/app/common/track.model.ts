const trackURL: string = 'https://api.spotify.com/v1/tracks/';
const playBaseUrl: string = 'https://open.spotify.com/embed/album/';

import { faPlayCircle, faStopCircle } from '@fortawesome/free-solid-svg-icons';

export class Track {
  id: string;
  name: string;
  duration: number;
  trackNumber: number;
  previewUrl: string;
  playStatus: boolean = false;
  player;

  faPlay = faPlayCircle;
  faStop = faStopCircle;


  constructor(id: string, name: string, duration: number, trackNumber: number, previewUrl: string) {
    this.id = id;    
    this.name = name;    
    this.duration = duration;
    this.trackNumber = trackNumber;
    this.previewUrl = previewUrl;   
    this.player = new Audio();
    //this.player.src = previewUrl;  
    this.player.src = playBaseUrl + this.id;  
  }  

  getUrl(): string {
    return trackURL+this.id;
  }

  play() {    
    this.player.play();
    this.playStatus = true;
  }

  stop() {    
    this.player.pause();
    this.player.currentTime = 0;
    this.playStatus = false;
  }

  getIcon() {
    if (this.playStatus) {
      return this.faStop;
    } 
    else {
      return this.faPlay;
    }
  }
}