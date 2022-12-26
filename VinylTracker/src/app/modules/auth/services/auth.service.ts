import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpMethods } from '../../shared/enums/http-methods';
import { HttpService } from '../../shared/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpService: HttpService, private router: Router) { }

  register(userInput: any): Observable<any> {
    const newUser = {
      "username": userInput.username,
      "password": userInput.password,
      "email": userInput.email
    }

    return this.httpService.dispatchData({
      method: HttpMethods.Post,
      url: '/user',
      options: {
        body: newUser
      }
    });
  }

  login(userInput: any): Observable<any>{
    const newUser = {
      "username": userInput.username,
      "password": userInput.password,
      "email": userInput.email
    }

    return this.httpService.dispatchData({
      method: HttpMethods.Post,
      url: '/user/login',
      options: {
        body: newUser
      }
    });
  }
}
