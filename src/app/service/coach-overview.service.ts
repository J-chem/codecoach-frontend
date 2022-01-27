import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Coach} from "../model/coach";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Topic} from "../model/topic";
import {Level} from "../model/level";

@Injectable({
  providedIn: 'root'
})
export class CoachOverviewService {

  private readonly url: string;

  constructor(private http:HttpClient) {
    this.url = `${environment.backendUrl}`
  }

  getAllCoaches() : Observable<Coach[]>{
    return this.http.get<Coach[]>(`${this.url}/users?coach=true`);
  }

  getAllTopics() : Observable<Topic[]>{
    return this.http.get<Topic[]>(`${this.url}/topics`);
  }

  getAllLevels() : Observable<Level[]> {
    return this.http.get<Level[]>(`${this.url}/levels`);
  }
}