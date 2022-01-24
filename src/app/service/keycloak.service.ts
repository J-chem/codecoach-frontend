import {Injectable} from '@angular/core';
import {Observable, Subject, tap} from "rxjs";
import {SignInService} from "./sign-in.service";
import {KeycloakTokenResponse} from "../keycloak/keycloak-token-response";
import * as JWT from 'jwt-decode';
import {KeycloakToken} from "../keycloak/keycloak-token";
import {KeycloakUserInfoService} from "./keycloak-user-info.service";
import {KeycloakUserInfo} from "../keycloak/keycloak-user-info";

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {

  private readonly token_key_name = 'access_token';
  private readonly uuid = 'uuid';
  private _loggedInUser$: Subject<string | null> = new Subject();

  constructor(
    private httpKeycloakService: SignInService,
    private keycloakUserInfoService: KeycloakUserInfoService) {
  }

  get loggedInUser$(): Observable<string | null> {
    return this._loggedInUser$;
  }

  getToken(): string | null {
    return localStorage.getItem(this.token_key_name);
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  logIn(loginData: any): Observable<KeycloakTokenResponse> {
    return this.httpKeycloakService.signIn(loginData)
      .pipe(tap(response => this.setToken(response.access_token)))
      .pipe(tap(response => {
        this.keycloakUserInfoService.getUserinfo(response.access_token)
          .subscribe(userInfo => this.setId(userInfo.sub));
      }));
  }

  logout(): void {
    localStorage.removeItem(this.token_key_name);
    localStorage.removeItem(this.uuid);
    this.sendSignal();
  }

  private setId(id: string) {
    localStorage.setItem(this.uuid, id);
  }

  private setToken(accessToken: string) {
    localStorage.setItem(this.token_key_name, accessToken);
    this.sendSignal();
  }

  sendSignal(): void {
    this._loggedInUser$.next(this.getUsername());
  }

  private getUsername(): string | null {
    let token = this.getToken();
    if (token) {
      return (JWT.default(token) as KeycloakToken).preferred_username
    }
    return null;
  }
}
