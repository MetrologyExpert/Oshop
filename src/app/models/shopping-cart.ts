import { ShoppingCartItem } from './shopping-cart-items';
import { Product } from './product';

export class ShoppingCart {

items: ShoppingCartItem[]=[];

constructor(public itemsMap: {[productId:string]: ShoppingCartItem }) {
  this.itemsMap = itemsMap || {};
  for (let productId in itemsMap)
   {
     let item = itemsMap[productId];
     console.log(new ShoppingCartItem({...item, $key: productId}));
     this.items.push(new ShoppingCartItem({...item, $key: productId}));

   }
}

get totalPrice() {
  let sum = 0;
  for (let productId in this.items) 
    sum += this.items[productId].totalPrice;
  return sum;
}

  get totalItemsCount() {
    let count=0;
    for (let productId in this.itemsMap){
   // console.log("item",this.itemsMap[productId].title);
    count += this.itemsMap[productId].quantity;
    }
    return count;
  }

  getQuantity(product: any ) {    
     //console.log("product:", product);
     let item = this.itemsMap[product.key]
    return item ? item.quantity: 0;
    }
}