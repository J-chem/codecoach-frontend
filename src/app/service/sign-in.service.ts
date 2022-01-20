import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {KeycloakTokenResponse} from "../keycloak/keycloak-token-response";

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = `https://keycloak.switchfully.com/auth/realms/java-oct-2021/protocol/openid-connect/token`
  }

  signIn(signInData: any): Observable<any> {
    const signInBody = new URLSearchParams();
    signInBody.set('username', signInData.email);
    signInBody.set('password', signInData.password);
    signInBody.set('client_id', 'CodeCoach-Dwaynians');
    signInBody.set('grant_type', 'password');
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    let postReturn = this.http.post<any>(this.url, signInBody, options);
    console.log(postReturn.subscribe())
    return postReturn;
  }
}
