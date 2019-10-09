import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  public apiUrl = 'https://swapi.co/api'

  constructor(private http: HttpClient) { }
  
  getStarShips(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/people/");
  }

}
