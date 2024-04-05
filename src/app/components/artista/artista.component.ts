import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrl: './artista.component.css'
})
export class ArtistaComponent {

  artista: any = {};
  topTracks: any[] = [];
  loading: boolean;
  error: boolean;
  errorMessage: string;

  constructor(private router: ActivatedRoute, private spotify:SpotifyService) {
    this.loading = true;
    this.error = false;
    this.errorMessage = '';

    this.router.params.subscribe( params => {
      this.getArtista(params['id'])
      this.getTopTracks(params['id'])
    })

  }

  getArtista(id:string) {
    this.loading = true;
    this.spotify.getArtista(id).subscribe({
        next: (artista:any) => {
            this.artista = artista;
            this.loading = false;
        },
        error: (errorServicio) => {
            this.loading = false;
            this.error = true;
            this.errorMessage = errorServicio.error.error.message;
        }
    });
}

  getTopTracks(id:string) {
    this.spotify.getTopTracks(id).subscribe( (topTracks:any) => {
      this.topTracks = topTracks;
      console.log(topTracks);
    })
  }

}
