import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private url = 'Bearer BQCI6329YaeELSPumqRLuTfecDAYqfB0dxJn4Et5QWSVp2PMw72XtJZY5Z6Ifh0vJRkR-zoOCfXAJ-6IfphxT5OzRrsOmcA1yf8VZ-cEJuGfSeNjbRxP0QHFfx2fGnTdVeK9QRsibaRDNQwLWUWmyoG8tnBUA3exRQ';

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

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }

  getArtista(termino: string){
    const headers = new HttpHeaders(
      {
        // tslint:disable-next-line:max-line-length
        'Authorization': this.url
      });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers});
  }
}
