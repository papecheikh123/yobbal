import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
import { User } from './models/user';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
   

  constructor(private httpclient:HttpClient){}
  getConnexion(user:User){
    return this.httpclient.post<User>(`${environment.apiUrl}/login_check`,user);
    pipe(map(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      return user;
  }));
}
  }
