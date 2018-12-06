import { Checkout } from './../checkout';
import { CartService } from './../cart.service';
import { PhoneService } from './../phone.service';
import { Phone } from './../phone';
import { Component, OnInit } from '@angular/core';
import { PhoneList } from '../PhoneList';
@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {
  phones$: any;
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private PhoneService: PhoneService, private cartService: CartService) { }

  ngOnInit() {
    this.getPhones();
  }

  getPhones() {
    this.cartService.getItems().subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      Phone => this.phones$ = Phone);
   }
}
