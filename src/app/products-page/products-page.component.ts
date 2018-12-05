import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  public addToCart(id: string, qty: number){
    this.cartService.addToCart(id, qty).subscribe(
        
    )
  }
}
