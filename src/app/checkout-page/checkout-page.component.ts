import { Checkout } from './../checkout';
import { CartService } from './../cart.service';
import { PhoneService } from './../phone.service';
import { Phone } from './../phone';
import { Component, OnInit } from '@angular/core';
import { PhoneList } from '../PhoneList';
import { CartItem } from '../CartItem';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {
  items: CartItem[] = [];
  loading = true;
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private phoneService: PhoneService, private cartService: CartService, private cookieService: CookieService, private router: Router) { }
  total = 0;
  ngOnInit() {
    if(!this.cookieService.get("user")){
      this.router.navigate(["/signin"])
    }
    this.getPhones();
    console.log(this.items)
    this.loading=false;
  }

  getPhones() {
    this.cartService.getItems().subscribe(
    response => {
      for(let item in response.items){
        this.phoneService.getPhone(item).subscribe(
          Item => {
            let new_item = new CartItem(Item, response.items[item].quantity);
            this.items.push(new_item);
            this.total = this.total + (new_item.phone.price * new_item.buying);
          },
          error => {console.log(error)}
        )
      }
    },
    error => {

    },
    () => {
    }
   )};

   getCost = function(item) {
    return item.qty * item.price;
  };

  addItem(id:string, amount: number){
    console.log(id)
    console.log(amount)
    return;

  }

 

}
