import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { ErrorList } from './ErrorList';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private cookieService: CookieService, private http: HttpClient) { }

  public checkout(): Observable<ErrorList>{
    let username = this.cookieService.get("user");
    let url = "https://freedomphones-checkoutsvc.herokuapp.com/checkout/" + username;
    return this.http.get<ErrorList>(url);
  }
}
