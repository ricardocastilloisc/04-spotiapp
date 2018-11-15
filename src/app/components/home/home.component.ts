import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  nuevasCanciones: any [] = [];
  constructor( private spotify: SpotifyService) {
    this.spotify.getNewReleses().subscribe
    (
      (data: any) =>
      {
        console.log(data)
        this.nuevasCanciones = data;
      }
    );
  }

  ngOnInit() {
  }


}
