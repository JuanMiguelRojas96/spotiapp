import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token = 'BQDnkEjQCzEbW4770ftuXZvG8ZG1hdgdhgyw_0KoQW1mSlcuw0IIiR8KgP2cBK0xZLLQG5417SL0736emLG8Tgoa4V6AuqI2RMBV3eBvjymJOMU2_-s'

  constructor(private http:HttpClient) {   }

  getQuery(query:string) {

    const url = 'https://api.spotify.com/v1/' + query;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });

    return this.http.get(url, {headers});
  }


  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20').pipe( map( (data:any) => data.albums.items ));
  }

  getArtistas(termino:string) {
    return this.getQuery('search?q=' + termino + '&type=artist&limit=15').pipe( map( (data:any) => data.artists.items ));
  }

  getArtista(id:string) {
    return this.getQuery('artists/' + id);
  }

  getTopTracks(id:string) {
    return this.getQuery('artists/'+ id +'/top-tracks').pipe( map( (data:any) => data.tracks ));
  }

}
