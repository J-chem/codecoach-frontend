import {Injectable} from '@angular/core';
import {catchError, Observable, of} from "rxjs";
import {User} from "../model/user";
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CreateUser} from "../model/create-user";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly url!: string;
  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};


  constructor(private http: HttpClient) {
    this.url = `${environment.backendUrl}/users`;
  }

  register(user: CreateUser): Observable<User> {
    return this.http.post<User>(this.url, user, this.httpOptions)
      .pipe(
        catchError(this.handleError<User>('register'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      alert(operation + error.error.message);

      return of(result as T);
    };
  }

  updateUserToCoach(): Observable<any> {
    const url = `${this.url}/${localStorage.getItem('uuid')}/become-a-coach`;
    return this.http.post<any>(url, null);
  }

  getUserById(userId: string | null): Observable<User> {
    if (userId === null) {
      console.log("no user logged in");
    }
    return this.http.get<User>(`${this.url}/${userId}`);
  }

  getLoggedInUser(): Observable<User>{
    const url = `${this.url}/${localStorage.getItem('uuid')}`;
    return this.http.get<User>(url, this.httpOptions).pipe(
      catchError(this.handleError<User>('getUser'))
    );
  }

  isUserEmailTaken(userEmail: string): Observable<boolean> {
    console.log(`isUserEmailTaken ${userEmail}`);
    const url = `${this.url}/useremailavailability`
    return this.http.post<boolean>(url, userEmail);
  }

  saveProfile(editedProfile: User): Observable<User> {
    console.log(editedProfile.id)
    const url = `${this.url}/${editedProfile.id}`;
    return this.http.put<User>(url, editedProfile);
  }
}
