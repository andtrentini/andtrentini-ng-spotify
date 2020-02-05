const artistURL: string = 'https://api.spotify.com/v1/artists/';

import { Image } from './image.model';

export class Artist {
  id: string;
  name: string;
  genres: string[];
  followers: number;
  images: Image[];

  constructor(id: string, name: string, genres: [], followers, images: []) {
    this.id = id;    
    this.name = name;    
    this.genres = genres;
    this.followers = followers.total;
    this.images = [];

    images.forEach(image => {
      this.images.push(new Image(image));
    });
  }  

  getUrl(): string {
    return artistURL+this.id;
  }

}