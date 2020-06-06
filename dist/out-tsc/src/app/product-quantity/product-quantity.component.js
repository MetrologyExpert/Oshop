import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let ProductQuantityComponent = class ProductQuantityComponent {
    constructor(cartService) {
        this.cartService = cartService;
    }
    addToCart() {
        this.cartService.addToCart(this.product);
    }
    removeFromCart() {
        this.cartService.removeFromCart(this.product);
    }
};
__decorate([
    Input('product')
], ProductQuantityComponent.prototype, "product", void 0);
__decorate([
    Input('shopping-cart')
], ProductQuantityComponent.prototype, "shoppingCart", void 0);
ProductQuantityComponent = __decorate([
    Component({
        selector: 'product-quantity',
        templateUrl: './product-quantity.component.html',
        styleUrls: ['./product-quantity.component.css']
    })
], ProductQuantityComponent);
export { ProductQuantityComponent };
//# sourceMappingURL=product-quantity.component.js.map