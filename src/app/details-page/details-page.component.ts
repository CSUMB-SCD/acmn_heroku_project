import { MessageService } from './../message.service';
import { CartService } from './../cart.service';
import { Observable } from 'rxjs';
import { PhoneService } from './../phone.service';
import { Phone } from './../phone';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {
@Input()

  phone_id$: string;
  phone: Phone;
  submitted = false;
  value: number;

  constructor( private route: ActivatedRoute,
    // tslint:disable-next-line:no-shadowed-variable
    private Phone: PhoneService, private location: Location, private CartService: CartService,
      private messageService: MessageService) {
      this.route.params.subscribe( params => this.phone_id$ = params.id);
    }

  ngOnInit(): void {
    this.Phone.getPhone(this.phone_id$).subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      Phone => this.phone = Phone
    );
  }

  addItemsD(value: number){
    console.log("value" + value);
    this.submitted = true;
    if(this.phone.qty == 0){
      return;
    }
    this.CartService.addToCart(this.phone_id$, value).subscribe(
      result => {
        console.log(result);
      },
      error => {
      
      },
      () => {
      
      }
    );
  }  
}
