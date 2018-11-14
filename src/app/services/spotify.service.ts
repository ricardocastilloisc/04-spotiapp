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

    const headers = new HttpHeaders(
      {
        // tslint:disable-next-line:max-line-length
        'Authorization': 'Bearer BQDYL_PFLx2pVOaTMH1FyC6zvwbhN8aO5Etu2BzKajXnc_VMAeEFm53jO5NCpsprGneNtGGrJ8pzSoUI4AtamMoNoc-hcPVyWhDfoM3fN8VajoFSeJPLQl5q4wEfIsrsbw9iDR1aVNgEZRsQ16z2pgSoEdH-cyU1OQ'
      });
    this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers}).subscribe
    (
      data => {
        console.log(data);
      }
    );
  }
}
