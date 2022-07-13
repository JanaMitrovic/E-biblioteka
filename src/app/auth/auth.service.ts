import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


interface userDataRegister{
  name: string;
  email: string;
  password: string;
}

interface userDataLogin{
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isUserAuthenticated = false;

  apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {
    
  }

  get isUserAuthenticated():boolean {
    return this._isUserAuthenticated;
  }

  register(user: userDataRegister){
    this._isUserAuthenticated = true;
    return this.http.post<userDataRegister>(`${this.apiUrl}/register`,user);
  }

  logIn(user: userDataLogin){
    this._isUserAuthenticated = true;
    return this.http.post<userDataLogin>(`${this.apiUrl}/login`,user);
  }

  logOut(){
    this._isUserAuthenticated = false;
  }

}
