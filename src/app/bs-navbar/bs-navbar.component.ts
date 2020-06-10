import { AuthService } from './../auth.service';
import { ShoppingCartItem } from './../models/shopping-cart-items';
import { ShoppingCartService } from './../shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  cart$: Observable<ShoppingCart>;

  constructor(public auth: AuthService, private shoppingCartService: ShoppingCartService ) {
    
  }

async ngOnInit(){
  
  this.cart$ = await this.shoppingCartService.getCart();
}


logout(){
  this.auth.logout();
}

}
