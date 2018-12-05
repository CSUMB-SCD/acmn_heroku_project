import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }

  public authUser(username: String){
    let url = "https://freedomphones-zuul-svc.herokuapp.com/user-service/getUser/" + username;
    return this.http.get(url);
  }
}
