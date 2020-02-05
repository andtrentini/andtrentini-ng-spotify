import { Component, Input, OnInit } from '@angular/core';
import { SpotifyService } from '../common/spotify.service';
import { Artist } from '../common/artist.model';
import { Album } from '../common/album.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-grid',
  templateUrl: './artist-grid.component.html',
  styleUrls: ['./artist-grid.component.css']
})
export class ArtistGridComponent implements OnInit {

  @Input() artists: Artist[];

  constructor(private spotifyService: SpotifyService,
              private router: Router) { }

  ngOnInit() {    
  }

  onAlbumClick(i: number) {        
      this.router.navigate(['albums',this.artists[i].id]);
  }

}