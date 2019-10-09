import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  public apiUrl = 'https://swapi.co/api'

  constructor(private http: HttpClient) { }

  getStarShips(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/starships/");
  }
  getStarShipsUrl(url): Observable<any> {
    return this.http.get<any>(url);
  }
  getDetailStarShips(id): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/starships/"+id);
}
}

