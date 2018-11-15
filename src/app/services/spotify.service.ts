import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SpotifyService {



  private token = 'Bearer BQA2gPpRF6c775SzTiS3TMgDSjSSyUPNWDTEzjRDXzYLs4_7zCSIhmzcV-zvNVaCSn_QVXkC2wwvi9ZlJ5w';


  constructor(private http: HttpClient) {

    this.getNewReleses();

  }
  getQuery(query: string) {

    const headers = new HttpHeaders(
      {
        // tslint:disable-next-line:max-line-length
        'Authorization': this.token
      });


    const url = `https://api.spotify.com/v1/${ query }`;


    return this.http.get(url, {headers});
  }

  getNewReleses() {

    return this.getQuery('browse/new-releases').pipe(
      map( data =>   data['albums'].items ));
  }

  getArtistas(termino: string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
      map( data =>  data['artists'].items)
    );
  }
  getArtista(id: string){
    return this.getQuery(`artists/${id}`);
    //.pipe( map( data =>  data['artists'].items));
  }
  getTopTracks(id: string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe( map( data =>  data['tracks']));
  }
}
