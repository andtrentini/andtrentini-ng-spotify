import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpotifyService } from '../common/spotify.service';
import { Album } from '../common/album.model';
import { Track } from '../common/track.model';

@Component({
  selector: 'app-album-songs',
  templateUrl: './album-songs.component.html',
  styleUrls: ['./album-songs.component.css']
})
export class AlbumSongsComponent implements OnInit {

  album: Album;
  tracks: Track[];

  test;

  constructor(private activatedRoute: ActivatedRoute,
              private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let albumId = params.albumId;
      this.spotifyService.getAAlbumById(albumId).subscribe(album => {
        this.album = album; 
        console.log(this.album);               
        this.spotifyService.getAlbumTracks(albumId).subscribe(tracks => {
          this.tracks = tracks;
          this.test = this.tracks[0].previewUrl;
          console.log(this.tracks);
        })
      });
    })
  }

}