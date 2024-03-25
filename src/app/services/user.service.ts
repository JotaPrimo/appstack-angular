import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiPath } from '../config/api-path';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { MessageService } from './message.service';
import { httpOptions } from '../config/http-options';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userDelete: User | any;

  constructor(
    private messageService: MessageService,
    private httpClient: HttpClient) {}

  
  getUsers(): Observable<User[]> {
    return this.httpClient
      .get<User[]>(ApiPath.USERS)
      .pipe(catchError(this.errorHandler));
  } 

  getUser(idUser: number): Observable<User> {
    console.log(idUser);
    
    return this.httpClient
      .get<User>(ApiPath.USERS + '/' + idUser)
      .pipe(catchError(this.errorHandler));
  } 

  store(user: User): Observable<User> {
    return this.httpClient
      .post<User>(ApiPath.USERS, JSON.stringify(user), httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  update(id: number, user: User): Observable<User> {
    console.log("update");
    
    console.log(id, user);
    
    return this.httpClient
      .put<User>(ApiPath.USERS + '/' + id, JSON.stringify(user), httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  ativarUser(idUser: number): Observable<void> {
    return this.httpClient
      .patch<void>(ApiPath.USERS + '/' + idUser, httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  delete(id: number) {
    return this.httpClient
      .delete<User>(ApiPath.USERS + '/' + id, httpOptions)
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
