import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Expertise} from "../model/expertise";
import {CoachOverview} from "../model/coach-overview";
import {Topic} from "../model/topic";
import {User} from "../model/user";


@Injectable({
  providedIn: 'root'
})
export class CoachOverviewService {

  private readonly url: string;

  constructor(private http:HttpClient) {
    this.url = environment.backendUrl;
  }

  getAllCoaches() : Observable<User[]>{
    return this.http.get<User[]>(`${this.url}/users?coach=true`);
  }

  getAllTopics() : Observable<Topic[]>{
    return this.http.get<Topic[]>(`${this.url}/topics`);
  }

  getAllLevels() : Observable<Expertise[]> {
    return this.http.get<Expertise[]>(`${this.url}/levels`);
  }
}
