const trackURL: string = 'https://api.spotify.com/v1/tracks/';

export class Track {
  id: string;
  name: string;
  duration: number;
  trackNumber: number;
  previewUrl: string;
  player;

  constructor(id: string, name: string, duration: number, trackNumber: number, previewUrl: string) {
    this.id = id;    
    this.name = name;    
    this.duration = duration;
    this.trackNumber = trackNumber;
    this.previewUrl = previewUrl;   
    this.player = new Audio();
    this.player.src = previewUrl;  
  }  

  getUrl(): string {
    return trackURL+this.id;
  }

  play() {    
    this.player.play();
  }

  stop() {    
    this.player.pause();
    this.player.currentTime = 0;
  }
}