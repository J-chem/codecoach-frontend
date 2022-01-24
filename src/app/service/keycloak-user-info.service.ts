import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {KeycloakUserInfo} from "../keycloak/keycloak-user-info";

@Injectable({
  providedIn: 'root'
})
export class KeycloakUserInfoService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = 'https://keycloak.switchfully.com/auth/realms/java-oct-2021/protocol/openid-connect/userinfo';
  }

  getUserinfo(token: string): Observable<KeycloakUserInfo>{
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Authorization', `Bearer ${token}`)
    };
    return this.http.get<KeycloakUserInfo>(this.url, options);
  }
}
