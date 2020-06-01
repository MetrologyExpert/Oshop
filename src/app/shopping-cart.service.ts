import { ShoppingCartItem } from './models/shopping-cart-items';
import { Product } from './models/product';
import { ShoppingCart } from './models/shopping-cart';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Injectable, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { take } from 'rxjs/operators';
import { map } from 'rxjs/operators/map';
import { Observable, pipe } from 'rxjs';

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
    return this.db.object('/shopping-carts/' + cartId).valueChanges()
    .pipe(map((x: ShoppingCart) => new ShoppingCart(x.items)));
    //snapshotChanges()
    //.pipe(map(x => new ShoppingCart(x.payload.exportVal().items)));;
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

  async addToCart(product: Product){
   this.updateItemQuantity(product, 1);
  }

  async removeFromCart(product: Product){
    this.updateItemQuantity(product, -1);
  }

  

private async updateItemQuantity(product: any, change: number)
{ let cartId = await this.getOrCreateCartId();
  let item$ = this.getItem(cartId,product.key);
       item$.snapshotChanges().pipe(take(1)).subscribe((item) => {           
       item$.update({quantity:(item.payload.child("quantity").exportVal()|| 0) + change });
      });


}

}
  