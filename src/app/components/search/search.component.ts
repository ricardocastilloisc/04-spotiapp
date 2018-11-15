import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  loading:boolean;
  artistas: any [] = [];
  constructor(private _spotifyService: SpotifyService) { }

  ngOnInit() {
  }


  buscar(termino: string) {

    this.loading = true;

    this._spotifyService.getArtista(termino).subscribe
    (
      (data: any) => {
        this.artistas = data;
        this.loading = false;
      }
    );
  }

}
