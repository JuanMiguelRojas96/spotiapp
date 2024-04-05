import { Component, Output } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  @Output()
  artistas : any[] = []

  loading : boolean;

  error : boolean;

  errorMessage : string;

  constructor(private spotify:SpotifyService) {
    this.loading = false;
    this.error = false;
    this.errorMessage = '';
  }


  buscar(termino :string) {
    this.loading = true;

    if(termino === '') {
      this.artistas = [];
      this.loading = false;
    }else{
      this.spotify.getArtistas(termino).subscribe({
        next: (data: any) => {
          this.artistas = data;
          this.loading = false;
        },
        error: (errorServicio) => {
          this.loading = false;
          this.error = true;
          this.errorMessage = errorServicio.error.error.message;
        }
      });
    }
  }
}
