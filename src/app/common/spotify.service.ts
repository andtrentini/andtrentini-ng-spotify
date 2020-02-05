import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { map, filter } from 'rxjs/operators'

import { Artist } from './artist.model';
import { Album } from './album.model';
import { Track } from './track.model';


@Injectable()
export class SpotifyService {

  token: string;
  clientId: string;
  clientSecret: string;

  artisti: Artist[];

  constructor(private http: HttpClient) { 
    this.clientId = '129442becd3a41a8b59d13c80a9ec3f8';
    this.clientSecret = '4ecb175089b643d898d4b3bc16db606d';
  }

  getToken() {
    let params = new HttpParams();
    params = params.append('grant_type', 'client_credentials');

    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Basic ' + btoa(this.clientId + ':' + this.clientSecret));

    this.http.post<any>('https://accounts.spotify.com/api/token', params, { headers }).subscribe(
      responseData => {        
        this.token = 'Bearer ' + responseData.access_token;
      }
    );
  }

  searchArtist(searchString: string) {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('q', searchString);
    searchParams = searchParams.append('type', 'artist');    
    return this.http.get<any>('https://api.spotify.com/v1/search', 
      {headers: new HttpHeaders({'Authorization': this.token}), params: searchParams}).pipe(
        map(responseData => {
          const artistFounded: Artist[] = [];          
          responseData.artists.items.forEach(artist => {
            artistFounded.push(new Artist(artist.id, artist.name, artist.genres, artist.followers, artist.images));
          })
          return artistFounded;
        })
      );
  }

  getArtistById(artistId: string) {
    return this.http.get<any>('https://api.spotify.com/v1/artists/'+ artistId, 
              {headers: new HttpHeaders({'Authorization': this.token})}).pipe(map(
                artist => {                  
                  return new Album(artist.id, artist.name, artist.genres, artist.followers, artist.images);
                })
              )
  };

  getAAlbumById(albumId: string) {
    console.log(albumId);
    return this.http.get<any>('https://api.spotify.com/v1/albums/'+ albumId, 
              {headers: new HttpHeaders({'Authorization': this.token})}).pipe(map(
                album => {    
                  console.log('s:', album)                                
                  return new Album(album.id, album.name, album.releaseDate, album.totalTracks, album.images);                  
                })
              )
  };

  getArtistAlbums(artistId: string) {    
    let searchParams = new HttpParams();
    searchParams = searchParams.append('limit', '50');    
    return this.http.get<any>('https://api.spotify.com/v1/artists/'+ artistId +'/albums', 
              {headers: new HttpHeaders({'Authorization': this.token}), params: searchParams}).pipe(map(
                responseData => {                  
                  const albumsFounded: Album[] = [];
                  responseData.items.forEach(album => {                    
                    if (album.available_markets.indexOf("IT") >= 0) {
                      albumsFounded.push(new Album(album.id, album.name, album.release_date, album.total_tracks, album.images));
                    }
                })
                return albumsFounded;
                })
              );
  }    

  getAlbumTracks(albumId: string) {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('limit', '50');   
    return this.http.get<any>('https://api.spotify.com/v1/albums/'+ albumId +'/tracks', 
              {headers: new HttpHeaders({'Authorization': this.token}), params: searchParams}).pipe(map(
                responseData => {                  
                  console.log(responseData)
                  const tracksFounded: Track[] = [];
                  responseData.items.forEach(track => {                    
                    if (track.available_markets.indexOf("IT") >= 0) {
                      tracksFounded.push(new Track(track.id, track.name, track.duration_ms, track.track_number, track.preview_url));
                    }
                })                
                return tracksFounded;
                })
              );
  }

}