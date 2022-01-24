import { Injectable } from '@angular/core';
import {catchError, Observable, of} from "rxjs";
import {User} from "../model/User";
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {KeycloakService} from "./keycloak.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _url: string;
  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};


  constructor(private http: HttpClient, private keycloakService: KeycloakService) {
    this._url = `${environment.backendUrl}/users`;
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(this._url, user, this.httpOptions)
      .pipe(
        catchError(this.handleError<User>('register'))
      )
      ;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      alert(operation + error.error.message);

      return of(result as T);
    };
  }

  updateUserToCoach(): Observable<any> {
    return this.http.put<any>(this._url + '/' + this.keycloakService.getUsername(), null);
  }
}
