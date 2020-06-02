import { ShoppingCartItem } from './shopping-cart-items';
import { config } from 'rxjs';

export class ShoppingCart {


constructor(public items: ShoppingCartItem[]){}

  get productIds(){
    return Object.keys(this.items);
   
  }

  get totalItemsCount() {
    let count=0;
    for (let productId in this.items)
    count += this.items[productId].quantity;
    return count;
  }
}