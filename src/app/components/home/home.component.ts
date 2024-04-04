import { Component, Output } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  @Output()
  nuevasCanciones: any[] = [];

  loading : boolean;

  constructor(private spotify:SpotifyService) {

    this.loading = true;

    this.spotify.getNewReleases().subscribe((data: any) => {
      this.nuevasCanciones = data;
      this.loading = false;
    })
  }

}
