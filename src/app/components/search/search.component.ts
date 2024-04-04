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

  constructor(private spotify:SpotifyService) {
    this.loading = false;
  }


  buscar(termino :string) {
    this.loading = true;

    if(termino === '') {
      this.artistas = [];
      this.loading = false;
    }else{
      this.spotify.getArtista(termino).subscribe((data:any) => {
        this.artistas = data;
        this.loading = false;
      })
    }
  }
}
