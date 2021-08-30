import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  urlApi = 'https://swapi.dev/api/'

  constructor(private http: HttpClient) { }

  getPeople(): Observable<any> {
    const resource = "people";
    return this.http.get(this.urlApi + resource)
  }
}
