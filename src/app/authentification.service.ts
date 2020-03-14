import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
import { User } from './models/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
   

  constructor(private httpclient:HttpClient){}
  getConnexion(user:User){
    return this.httpclient.post<User>(`${environment.apiUrl}/login_check`,user);
  }
}