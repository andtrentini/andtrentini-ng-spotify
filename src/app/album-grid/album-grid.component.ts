import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpotifyService } from '../common/spotify.service';
import { Album } from '../common/album.model';
import { Artist } from '../common/artist.model';


@Component({
  selector: 'app-album-grid',
  templateUrl: './album-grid.component.html',
  styleUrls: ['./album-grid.component.css']
})
export class AlbumGridComponent implements OnInit {
    
  artist: Artist;
  albums: Album[];

  constructor(private activatedRoute: ActivatedRoute,
              private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let artistId = params.artistId;
      this.spotifyService.getArtistById(artistId).subscribe(artist => {
        this.artist = artist;
        console.log(this.artist);
        this.spotifyService.getArtistAlbums(artistId).subscribe(albums => {
          this.albums = albums;
          console.log(this.albums);
        })
      });
    })
  }

}