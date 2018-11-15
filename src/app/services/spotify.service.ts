import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private url = 'Bearer BQAfQNwVa8IolOr9ECTnlZyDmbG1omzpbzNnQwn7pkN4gvWVqU2mmdLUN3Sk7neHydKeBOFlRL7YyxUKt3c';


  private
  constructor(private http: HttpClient) {

    this.getNewReleses();

  }

  getNewReleses() {

    // tslint:disable-next-line:max-line-length


    const headers = new HttpHeaders(
      {
        // tslint:disable-next-line:max-line-length
        'Authorization': this.url
      });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers}).pipe(
      map( data =>   data['albums'].items ));
  }

  getArtista(termino: string){
    const headers = new HttpHeaders(
      {
        // tslint:disable-next-line:max-line-length
        'Authorization': this.url
      });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers}).pipe(
      map( data =>  data['artists'].items)
    );
  }
}
