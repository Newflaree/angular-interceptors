import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';

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


    return this.http.get( 'https://reqes.in/api/user', {
      params,
    }).pipe(
      map( (resp: any) => resp['data'])
    );
  }

}
