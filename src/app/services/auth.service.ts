// import { HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { SignIn, SignUp } from '../models/sign-up.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  apiUrl = 'http://142.93.6.205:4001/user/session';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  public signUp(user: SignUp){
    return this.http.post(`${this.apiUrl}/user`,user)
  }
  public signIn(user: any){
    console.log(`user: ${user}`);

    return this.http.post(`${this.apiUrl}`,user)
  }
}
