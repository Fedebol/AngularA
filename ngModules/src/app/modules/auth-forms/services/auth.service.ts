import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  login = () => {
    console.log('hacer proceso de login');
  }

  register = () => {
    console.log('hacer proceso de register');
  }
  logout = () => {
    console.log('hacer proceso de logout');
  }
}



