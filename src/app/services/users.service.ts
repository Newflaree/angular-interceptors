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

    let headers = new HttpHeaders({
      'x-token': 'lakfejofijsdaflkjdslfkjeoiajlkdsajf'
    })

    return this.http.get( 'https://reqres.in/api/user', {
      params,
    }).pipe(
      map( (resp: any) => resp['data']),
      catchError( err => this.handleError( err ))
    );
  }

  handleError( err: HttpErrorResponse ) {
    console.log( 'Something went wrong' );
    console.warn( err );
    return throwError( `Custom error` );
  }
}
