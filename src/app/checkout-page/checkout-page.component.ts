import { Checkout } from './../checkout';
import { CartService } from './../cart.service';
import { PhoneService } from './../phone.service';
import { Phone } from './../phone';
import { Component, OnInit } from '@angular/core';
import { PhoneList } from '../PhoneList';
import { CartItem } from '../CartItem';



@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {
  items: CartItem[] = [];
  loading = true;
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private phoneService: PhoneService, private cartService: CartService) { }
  total = 0;
  ngOnInit() {
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
            this.total = this.total + new_item.phone.price;
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

  
}
