import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }

  obtenerFrase(){
    return this._http.get('https://api.chucknorris.io/jokes/random');
  }
}
