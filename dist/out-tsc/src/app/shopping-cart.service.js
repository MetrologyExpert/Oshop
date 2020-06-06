import { __awaiter, __decorate } from "tslib";
import { ShoppingCart } from './models/shopping-cart';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { map } from 'rxjs/operators/map';
let ShoppingCartService = class ShoppingCartService {
    constructor(db) {
        this.db = db;
    }
    create() {
        return this.db.list('/shopping-carts').push({
            dateCreated: new Date().getTime()
        });
    }
    getCart() {
        return __awaiter(this, void 0, void 0, function* () {
            //FirebaseObjectObservable is deprecated
            let cartId = yield this.getOrCreateCartId();
            return this.db.object('/shopping-carts/' + cartId).
                snapshotChanges()
                .pipe(map((items) => new ShoppingCart(items.payload.child('/items').exportVal())));
            //.valueChanges().pipe(map((cart: {items: {[productId: string]: ShoppingCartItem}}) => new ShoppingCart(cart.items)));
        });
    }
    getOrCreateCartId() {
        return __awaiter(this, void 0, void 0, function* () {
            let cartId = localStorage.getItem('cartId');
            if (cartId)
                return cartId;
            let result = yield this.create();
            localStorage.setItem('cartId', result.key);
            return result.key;
        });
    }
    getItem(cartId, productId) {
        return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
    }
    addToCart(product) {
        return __awaiter(this, void 0, void 0, function* () {
            this.updateItem(product, 1);
        });
    }
    removeFromCart(product) {
        return __awaiter(this, void 0, void 0, function* () {
            this.updateItem(product, -1);
        });
    }
    updateItem(product, change) {
        return __awaiter(this, void 0, void 0, function* () {
            let cartId = yield this.getOrCreateCartId();
            let item$ = this.getItem(cartId, product.key);
            item$.snapshotChanges().pipe(take(1)).subscribe((item) => {
                item$.update({
                    title: product.title,
                    imageUrl: product.imageUrl,
                    price: product.price,
                    quantity: (item.payload.child("quantity").exportVal() || 0) + change
                });
            });
        });
    }
};
ShoppingCartService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ShoppingCartService);
export { ShoppingCartService };
//# sourceMappingURL=shopping-cart.service.js.map