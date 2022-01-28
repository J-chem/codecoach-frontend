import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Coach} from "../model/coach";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Level} from "../model/level";
import {TopicWithId} from "../model/topic-with-id";
import {CoachOverview} from "../model/coach-overview";

@Injectable({
  providedIn: 'root'
})
export class CoachOverviewService {

  private readonly url: string;

  constructor(private http:HttpClient) {
    this.url = environment.backendUrl;
  }

  getAllCoaches() : Observable<CoachOverview[]>{
    return this.http.get<CoachOverview[]>(`${this.url}/users?coach=true`);
  }

  getAllTopics() : Observable<TopicWithId[]>{
    return this.http.get<TopicWithId[]>(`${this.url}/topics`);
  }

  getAllLevels() : Observable<Level[]> {
    return this.http.get<Level[]>(`${this.url}/levels`);
  }
}
