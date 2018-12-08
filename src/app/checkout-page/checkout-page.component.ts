import { MessageService } from './../message.service';
import { Checkout } from './../checkout';
import { CartService } from './../cart.service';
import { PhoneService } from './../phone.service';
import { Phone } from './../phone';
import { Component, OnInit } from '@angular/core';
import { PhoneList } from '../PhoneList';
import { CartItem } from '../CartItem';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { CheckoutService } from '../checkout.service';
import { ErrorList } from '../ErrorList';


@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {
  items: CartItem[] = [];
  loading = true;
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private phoneService: PhoneService, private cartService: CartService, private cookieService: CookieService, private router: Router
    ,public messageService: MessageService, private checkoutService: CheckoutService) { }
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

  public getTotal(){  
    this.total = 0;
    for(let item of this.items){
      this.total += item.buying * item.phone.price
    }
  }

  removeItem(id:string){
    this.cartService.deleteItems(id).subscribe(
      result => {
        console.log(result);
      },
      error => {
      
      },
      () => {
      
      }
    );


  }


  updateCart(buying:number, id:string){
   this.removeItem(id);

  this.cartService.addToCart(id,buying).subscribe(
    result => {
      console.log(result);
    },
    error => {
    
    },
    () => {
    }
    );
    this.getTotal();
    }

checkout(){
  this.messageService.clear()
  this.checkoutService.checkout().subscribe(
    errs => {
      if(!errs.empty){
        let err_strings = errs.errors;
        for(let err in err_strings){
          this.messageService.add(err_strings[err]);
        }
      }
      else{
        this.router.navigate(["/confirmation"])
      }
    }
  )
}
  

}
