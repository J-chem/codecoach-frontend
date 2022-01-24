import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {KeycloakService} from "./keycloak.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _userUrl: string;


  constructor(private http: HttpClient, private keycloakService: KeycloakService) {
    this._userUrl = `${environment.backendUrl}/users`;
  }

  updateUserToCoach(): Observable<any> {
    return this.http.put<any>(this._userUrl + '/' + this.keycloakService.getUsername(), null);
  }
}
