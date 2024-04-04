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

  constructor(private spotify:SpotifyService) { }


  buscar(termino :string) {
    this.spotify.getArtista(termino).subscribe((data:any) => {
      this.artistas = data;
    })
  }
}
