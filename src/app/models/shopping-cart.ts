import { ShoppingCartItem } from './shopping-cart-items';
import { config } from 'rxjs';

export class ShoppingCart {
items: ShoppingCartItem[] = [];

constructor(public itemsMap:{ [productId:string]: ShoppingCartItem} ) {
  this.itemsMap = itemsMap || {};

  for (let productId in itemsMap) {
    let item = itemsMap[productId];	           
    let x = new ShoppingCartItem;
    Object.assign(x, item);
    x.$key = productId;
    this.items.push(x);
 
  // for(let productId in itemsMap){
  //   this.items.push(itemsMap[productId]);
  }

}

 
  get totalItemsCount() {
    let count=0;
    for (let productId in this.itemsMap)
    count += this.itemsMap[productId].quantity;
    return count;
  }
}