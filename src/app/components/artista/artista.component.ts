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
  TopTracks: any[] = [];
  loadingArtist: boolean;
  constructor(private router: ActivatedRoute, private _spotifyService: SpotifyService) {

    this.loadingArtist = true;
    this.router.params.subscribe( paramas => {
        this.getArtista(paramas['id']);
        this.getTopTracks(paramas['id']);
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
  getTopTracks(id: string) {
    this._spotifyService.getTopTracks(id).subscribe(
      res => {
        console.log(res);
        this.TopTracks = res;
        console.log('aqui esta el objeto');
        console.log(this.TopTracks);
      }
    );
  }
}
