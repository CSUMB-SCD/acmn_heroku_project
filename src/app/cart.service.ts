import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  public addToCart(id: String, qty: Number){
    let username = this.cookieService.get("user");
    let item = {"prod_id": id, "qty":qty};
    let url = "https://freedomphones-cartsvc.herokuapp.com/addItem/" + username
    return this.http.post(url, item);
  }
}
