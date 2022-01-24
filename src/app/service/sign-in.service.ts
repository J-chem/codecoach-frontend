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

  signIn(signInData: any): Observable<KeycloakTokenResponse> {
    const signInBody = new URLSearchParams();
    signInBody.set('username', signInData.email);
    signInBody.set('password', signInData.password);
    signInBody.set('client_id', 'CodeCoach-Dwaynians');
    signInBody.set('grant_type', 'password');
    signInBody.set('client_secret', '955ad0e4-455f-4bab-ab35-e78337f426d4')
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    return this.http.post<KeycloakTokenResponse>(this.url, signInBody, options);
  }
}
