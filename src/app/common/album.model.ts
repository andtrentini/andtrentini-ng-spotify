const artistURL: string = 'https://api.spotify.com/v1/albums/';

import { Image } from './image.model';

export class Album {
  id: string;
  name: string;
  releaseDate: string;
  totalTracks: number;
  images: Image[];

  constructor(id: string, name: string, releaseDate: string, totalTracks, images: []) {
    this.id = id;    
    this.name = name;    
    this.releaseDate = releaseDate;
    this.totalTracks = totalTracks;
    this.images = [];

    images.forEach(image => {
      this.images.push(new Image(image));
    });
  }  

  getUrl(): string {
    return artistURL+this.id;
  }
}