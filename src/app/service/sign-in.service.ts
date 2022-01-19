import { Injectable } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {observable} from "rxjs";
import {SignInBody} from "../sign-in-body";

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = `https://keycloak.switchfully.com/auth/realms/java-oct-2021/protocol/openid-connect/token`
  }

  signIn(signInForm: FormGroup) {
     // let signFormBody = new SignInBody(signInForm.email, signInForm.password);
      return this.http.post<SignInBody>(this.url, signInForm);
  }
}
