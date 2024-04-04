import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token = 'BQD3IjSD-B32XcBdG0e7alHczp2KTOeKvaPZ8czJ-KHk1xBTWry6KNEa1jjgPoMdXMSoKSWTOJBRVYaYCM9HtOcWFPjuO1W7PtEkoFksY_MY_dJlRnk'

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
