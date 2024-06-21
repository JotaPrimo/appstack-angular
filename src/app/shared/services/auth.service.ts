import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { LoginResponse } from '../interfaces/login-response.interface';
import { apiPath } from '@app/config/index';

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) { }

  login(username: string, password: string): Observable<string> {
    let body = new HttpParams()
      .set('username', username)
      .set('password', password)

      return this.httpClient.post<LoginResponse>(apiPath.AUTH, body)
        .pipe(
          map(res => res.token),
          catchError(this.handleError)
        )
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Erro no lado do cliente
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // Erro no lado do servidor
      errorMessage = `Server-side error: ${error.status} ${error.message}`;
    }
    return throwError(errorMessage);
  }

}
