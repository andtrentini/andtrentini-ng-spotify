import { Component, Input, OnInit } from '@angular/core';
import { Artist } from '../common/artist.model';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  @Input() artist: Artist;
  constructor() { }

  ngOnInit() {
  }

}