import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {

    this.getNewReleses();

  }

  getNewReleses() {

    // tslint:disable-next-line:max-line-length
    let url = 'Bearer BQAewGVn0WqKCdIYeMqr0NZ_Dqb7EYTpOnzOy7y2LB8DIcmZwGBp7PtcDu1tumcIhLcGvXLuXoQwck8hTcc';

    const headers = new HttpHeaders(
      {
        // tslint:disable-next-line:max-line-length
        'Authorization': url
      });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }
}
