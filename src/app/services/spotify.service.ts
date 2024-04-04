import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }


  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAZwrbgyB9IrC4lbBP_Ar-BrqcC2J0RPzb4BB8XDcE1VSF4vdDHZi8ArfguiXpQEBwEe6CBXI5gqNbqT7xHQwkbD27fLkeFEC2PlhBNaQGtBY6Y5wI'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers});

  }

  getArtista(termino:string) {


    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAZwrbgyB9IrC4lbBP_Ar-BrqcC2J0RPzb4BB8XDcE1VSF4vdDHZi8ArfguiXpQEBwEe6CBXI5gqNbqT7xHQwkbD27fLkeFEC2PlhBNaQGtBY6Y5wI'
    })

    return this.http.get('https://api.spotify.com/v1/search?q=' + termino + '&type=artist&limit=15', {headers});
  }
}
