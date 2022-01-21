import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _userUrl : string;


  constructor(private http: HttpClient) {
    this._userUrl = `${environment.backendUrl}/users`;
  }



  updateUserToCoach(): void {
    const userId = '85669648468486';
    this.http.put(this._userUrl + '/' + userId, null);
  }


}
