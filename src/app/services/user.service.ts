import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiPath } from '../config/api-path';
import { Observable, catchError } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private messageService: MessageService,
    private httpClient: HttpClient) {}

  
  getUsers(): Observable<User[]> {
    return this.httpClient
      .get<User[]>(ApiPath.USERS)
      .pipe(catchError(this.errorHandler));
  } 

  getUser(idUser: number): Observable<User> {
    return this.httpClient
      .get<User>(ApiPath.USERS + '/' + idUser)
      .pipe(catchError(this.errorHandler));
  } 
 

  errorHandler(error: any): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(error);

    throw new Error(errorMessage);
  }

}
