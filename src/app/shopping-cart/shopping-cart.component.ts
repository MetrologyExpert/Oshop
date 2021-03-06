import { Observable } from 'rxjs';
import { ShoppingCartService } from './../shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart$:Observable<ShoppingCart>;


  constructor(private shoppingcartService: ShoppingCartService) { }

  async ngOnInit() {
    this.cart$ = await this.shoppingcartService.getCart();
  }

  clearCart() {
    this.shoppingcartService.clearCart();
  }
}
