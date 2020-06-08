import { ShoppingCartItem } from './models/shopping-cart-items';
import { Product } from './models/product';
import { ShoppingCart } from './models/shopping-cart';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Injectable, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { take } from 'rxjs/operators';
import { map } from 'rxjs/operators/map';
import { Observable, pipe } from 'rxjs';
import { runInThisContext } from 'vm';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    }
    );
  }

  async getCart():Promise<Observable<ShoppingCart>>{
    //FirebaseObjectObservable is deprecated
    let cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/' + cartId).
    snapshotChanges()
    .pipe(map((items) => new ShoppingCart(items.payload.child('/items').exportVal())));
    //.valueChanges().pipe(map((cart: {items: {[productId: string]: ShoppingCartItem}}) => new ShoppingCart(cart.items)));
  }

  async addToCart(product: Product){
    this.updateItem(product, 1);
   }
 
   async removeFromCart(product: Product){
     this.updateItem(product, -1);
   }

   async clearCart(){
     let cartId = await this.getOrCreateCartId();
     this.db.object('/shopping-carts/'+cartId +'/items').remove();
   }

  private async getOrCreateCartId(): Promise<string>{
    let cartId = localStorage.getItem('cartId');
    if(cartId)  return cartId
    
      let result = await this.create();
          localStorage.setItem('cartId', result.key);
          return result.key;
  }

  private getItem(cartId: string, productId: string) {
    return this.db.object<any>('/shopping-carts/' + cartId + '/items/' + productId);
  }

 
 private async updateItem(product: any, change: number)
 { let cartId = await this.getOrCreateCartId();
   let item$ = this.getItem(cartId,product.key);
        item$.snapshotChanges().pipe(take(1)).subscribe((item) => {   
          let q = (item.payload.child("quantity").exportVal()|| 0) + change; 
           if (q ===0) item$.remove()
           else  
        item$.update({
          title: product.title,
          imageUrl: product.imageUrl,
          price: product.price,
          quantity: q
       });
      
      });

    }
}
  