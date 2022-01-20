import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

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
    signInBody.set('client_id', 'order');
    signInBody.set('client_secret', 'afc74d17-d5e9-49bf-8f59-ac22538505b6');
    signInBody.set('grant_type', 'password');
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    return this.http.post<URLSearchParams>(this.url, signInBody, options);
  }
}
