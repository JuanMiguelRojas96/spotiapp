import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  nuevasCanciones: any[] = [];

  constructor(private spotify:SpotifyService) {

    this.spotify.getNewReleases().subscribe((data: any) => {
      this.nuevasCanciones = data.albums.items
    })
  }

}
