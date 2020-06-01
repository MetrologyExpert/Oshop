import { ShoppingCartItem } from './../models/shopping-cart-items';
import { ShoppingCartService } from './../shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth/';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/internal/Observable';
import { ShoppingCart } from '../models/shopping-cart';
import { AngularFireObject } from '@angular/fire/database/database';
@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  user$: Observable<firebase.User>;
  shoppingCartItemCount:number;
  cart$: Observable<any>;

  constructor(private afAuth: AngularFireAuth, private shoppingCartService: ShoppingCartService ) {
    
  }

async ngOnInit(){
  this.user$ = this.afAuth.authState;
  
  let cart$ = await this.shoppingCartService.getCart();
    //  cart$.subscribe(cart => {
    //    this.shoppingCartItemCount = 0;
    //    for (let productId in cart.items) {
    //      this.shoppingCartItemCount += cart.items[productId].quantity;}});
    // console.log(this.shoppingCartItemCount);
}


logout(){
  this.afAuth.signOut();
}

}
