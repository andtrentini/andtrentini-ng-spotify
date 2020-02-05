import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SpotifyService } from '../common/spotify.service';
import { Artist } from '../common/artist.model'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('artistaInput', {static: false}) artistaInput: ElementRef;
  artists: Artist[];  

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.spotifyService.getToken();
  }

  onArtistaInputChange() {
    let searchString = this.artistaInput.nativeElement.value;
    if (searchString) {
      this.spotifyService.searchArtist(searchString).subscribe(artists => {
      this.artists = artists;      
      })    
    }
  }  

}