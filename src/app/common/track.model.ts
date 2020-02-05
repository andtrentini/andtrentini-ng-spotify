const trackURL: string = 'https://api.spotify.com/v1/tracks/';

export class Track {
  id: string;
  name: string;
  duration: number;
  trackNumber: number;
  previewUrl: string;

  constructor(id: string, name: string, duration: number, trackNumber: number, previewUrl: string) {
    this.id = id;    
    this.name = name;    
    this.duration = duration;
    this.trackNumber = trackNumber;
    this.previewUrl = previewUrl;    
  }  

  getUrl(): string {
    return trackURL+this.id;
  }
}