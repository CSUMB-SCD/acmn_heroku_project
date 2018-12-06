import { Checkout } from './checkout';
import { PhoneList } from './PhoneList';
import { PhonesComponent } from './phones/phones.component';
import { Phone } from './phone';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  addItem(id: Number, arg1: number): any {
    throw new Error("Method not implemented.");
  }

  
  constructor(private http: HttpClient, private cookieService: CookieService) { }

  public addToCart(id: String, qty: Number){

    let username = this.cookieService.get("user");
    let item = {"prod_id": id, "qty":qty};
    let url = "https://freedomphones-zuul-svc.herokuapp.com/cart-service/addItem/" + username
    return this.http.post<Phone>(url, item);
  }

   getItems(){
    let username = this.cookieService.get("user");
    let url = "https://freedomphones-zuul-svc.herokuapp.com/cart-service/getCart/" + username
    console.log(this.http.get(url));
    return(this.http.get<Checkout>(url));

  }


}
