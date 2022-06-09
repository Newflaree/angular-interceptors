import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    let params = new HttpParams().append('page', '1');
    params = params.append('name', 'Camilo López');

    let headers = new HttpHeaders({
      'x-token': 'lakfejofijsdaflkjdslfkjeoiajlkdsajf'
    })

    return this.http.get( 'https://reqres.in/api/user', {
      params,
      headers
    });
  }
}
