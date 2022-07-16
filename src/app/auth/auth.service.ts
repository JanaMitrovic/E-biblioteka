import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import axios, { Axios} from 'axios';


interface userDataRegister{
  name: string;
  email: string;
  password: string;
}

interface userDataLogin{
  success: any;
  access_token: any;
  token_type: any;
  role: any;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isUserAuthenticated = false;

  apiUrl = 'http://localhost:8000/api';
  user = null;
  role = null;

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
    this.user = this.http.post<userDataLogin>(`${this.apiUrl}/login`,user);
    this.user.subscribe(res => {this.role = res.role });
    return this.user;
  }

  getRole(){
    console.log(this.role);
    return this.role;
  }

  logOut(){
    this._isUserAuthenticated = false;

    var config = {
      method: 'post',
      url: 'http://localhost:8000/api/logout',
      headers: {
        Authorization: "Bearer " + window.sessionStorage.getItem('access_tocken')
      }
    }

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      window.sessionStorage.setItem('access_tocken', null);
      location.reload();
    }).catch(function (error){
      console.log(error);
    })

  }

}
