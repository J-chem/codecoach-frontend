import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../model/User";
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _url: string;
  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};


  constructor(private http: HttpClient) {
    this._url = `http://${environment.backendUrl}/users`;
  }
  register(user: User): Observable<User> {
    return this.http.post<User>(this._url, user, this.httpOptions);
  }
}
