import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SpotifyService } from './common/spotify.service';
import { ArtistComponent } from './artist/artist.component';
import { ArtistGridComponent } from './artist-grid/artist-grid.component';
import { AlbumGridComponent } from './album-grid/album-grid.component';

import { AlbumSongsComponent } from './album-songs/album-songs.component';
import { UrlSanitizePipe } from './common/url-sanitize.pipe';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'albums/:artistId', component: AlbumGridComponent},
  {path: 'tracks/:albumId', component: AlbumSongsComponent}
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes), FontAwesomeModule ],
  declarations: [ AppComponent, HomeComponent, ArtistComponent, ArtistGridComponent, AlbumGridComponent, AlbumSongsComponent, UrlSanitizePipe ],
  bootstrap:    [ AppComponent ],
  providers: [SpotifyService]
})
export class AppModule { }
