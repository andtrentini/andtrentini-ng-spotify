import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SpotifyService } from './common/spotify.service';
import { ArtistComponent } from './artist/artist.component';
import { ArtistGridComponent } from './artist-grid/artist-grid.component';
import { AlbumGridComponent } from './album-grid/album-grid.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'albums/:artistId', component: AlbumGridComponent}
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HomeComponent, ArtistComponent, ArtistGridComponent, AlbumGridComponent ],
  bootstrap:    [ AppComponent ],
  providers: [SpotifyService]
})
export class AppModule { }
