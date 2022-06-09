import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest 
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  constructor() { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders({
      'x-token': 'lakfejofijsdaflkjdslfkjeoiajlkdsajf'
    })

    const reqClone = req.clone({
      headers
    })

    return next.handle( reqClone ).pipe(
      catchError( this.handleError )
    )
  }

  handleError( err: HttpErrorResponse ) {
    console.log( 'Something went wrong' );
    console.warn( err );
    return throwError( `Custom error` );
  }
}
