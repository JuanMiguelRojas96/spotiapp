import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token = 'BQB3PzztIkm9CKHveXk-B10CcRPvGss_NzbPzyhev9cG7bIYqE4eH6or0wDes4Rnk2mhZTa3t-Tv-CuupqMWu_40K8jB6go391FbI1sv1VwnMzswS8g'

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

  getArtista(termino:string) {
    return this.getQuery('search?q=' + termino + '&type=artist&limit=15').pipe( map( (data:any) => data.artists.items ));
  }
}
