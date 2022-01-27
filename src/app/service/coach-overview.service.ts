import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Coach} from "../model/coach";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CoachOverviewService {

  private readonly url: string;

  constructor(private http:HttpClient) {
    this.url = `${environment.backendUrl}/users?coach=true`
  }

  getAllCoaches() : Observable<Coach[]>{
    return this.http.get<Coach[]>(this.url);
  }
}
