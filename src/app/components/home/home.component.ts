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

  error : boolean;

  errorMessage : string;

  constructor(private spotify:SpotifyService) {

    this.loading = true;
    this.error = false;
    this.errorMessage = '';

    this.spotify.getNewReleases().subscribe({
      next: (data: any) => {
        this.nuevasCanciones = data;
        this.loading = false;
      },
      error: (errorServicio) => {
        this.error = true;
        this.loading = false;
        this.errorMessage = errorServicio.error.error.message;
        console.log(errorServicio);
      }
    });
  }

}
