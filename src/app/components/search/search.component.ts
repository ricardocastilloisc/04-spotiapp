import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistas: any [] = [];
  constructor(private _spotifyService: SpotifyService) { }

  ngOnInit() {
  }


  buscar(termino: string) {

    this._spotifyService.getArtista(termino).subscribe
    (
      (data: any) =>
      {
        this.artistas = data.artists.items;
      }
    );
  }

}
