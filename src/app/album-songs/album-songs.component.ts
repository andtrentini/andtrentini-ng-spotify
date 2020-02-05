import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpotifyService } from '../common/spotify.service';
import { Album } from '../common/album.model';
import { Artist } from '../common/artist.model';

@Component({
  selector: 'app-album-songs',
  templateUrl: './album-songs.component.html',
  styleUrls: ['./album-songs.component.css']
})
export class AlbumSongsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

}