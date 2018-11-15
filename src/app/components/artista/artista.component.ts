import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
  artista: any = {};
  loadingArtist: boolean;
  constructor(private router: ActivatedRoute, private _spotifyService: SpotifyService) {

    this.loadingArtist = true;
    this.router.params.subscribe( paramas => {
        this.getArtista(paramas['id']);
      });

   }

  ngOnInit() {
  }

  getArtista(id: string) {
    this.loadingArtist = true;
    this._spotifyService.getArtista(id).subscribe(
      res =>  {
        console.log(res);
        this.artista = res;
        this.loadingArtist = false;
      });
  }
}
