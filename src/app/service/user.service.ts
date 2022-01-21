import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {KeycloakService} from "./keycloak.service";
import {catchError, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _userUrl: string;


  constructor(private http: HttpClient, private keycloakService: KeycloakService) {
    this._userUrl = `${environment.backendUrl}/users`;
  }

  updateUserToCoach(): void {
    this.keycloakService.loggedInUser$
      .subscribe(userName => {
        this.http.put(this._userUrl + '/' + userName, null)
          .pipe(catchError(error => {
            console.log(error);
            return throwError(error);
          }));
      });
  }

}
