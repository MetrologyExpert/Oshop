import { ShoppingCartItem } from './shopping-cart-items';
export class ShoppingCart {
    constructor(itemsMap) {
        this.itemsMap = itemsMap;
        this.items = [];
        this.itemsMap = itemsMap || {};
        for (let productId in itemsMap) {
            let item = itemsMap[productId];
            let x = new ShoppingCartItem();
            Object.assign(x, item);
            x.$key = productId;
            this.items.push(x);
        }
    }
    get totalPrice() {
        let sum = 0;
        for (let productId in this.items)
            sum += this.items[productId].totalPrice;
        return sum;
    }
    get totalItemsCount() {
        let count = 0;
        for (let productId in this.itemsMap)
            count += this.itemsMap[productId].quantity;
        return count;
    }
    getQuantity(product) {
        console.log("product:", product);
        console.log("item", this.itemsMap);
        let item = this.itemsMap[product.key];
        return item ? item.quantity : 0;
    }
}
//# sourceMappingURL=shopping-cart.js.map