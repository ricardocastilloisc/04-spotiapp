import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SpotifyService {



  private text1 = 'Bearer ';

  private text2 = 'BQC7Ul89yW9Dkza2srN64e_HdkyYH6dwkA3wz3cciHi4OzcQPpipA3_2xRj2F5z5KK72SAWUXxD_YDB0fbo';

  private token = this.text1 + this.text2;

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
