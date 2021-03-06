import { Injectable } from '@angular/core';
import {CreateSession} from "../model/create-session";
import {catchError, Observable, of} from "rxjs";
import {Session} from "../model/session";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private url: string;
  private httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};


  constructor(private http: HttpClient) {
    this.url = `${environment.backendUrl}/sessions`;
  }

  requestSession(session: CreateSession): Observable<Session>{
    return this.http.post<Session>(this.url, session, this.httpOptions)
      .pipe(
        catchError(this.handleError<Session>())
      );

  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      alert(error.error.message);

      return of(result as T);
    };
  }

  getCoachSessions(): Observable<Session[]> {
    return this.http.get<Session[]>(`${this.url}?coach=${localStorage.getItem('uuid')}`);
  }
}
