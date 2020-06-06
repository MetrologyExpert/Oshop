import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let ProductCardComponent = class ProductCardComponent {
    constructor(cartService) {
        this.cartService = cartService;
    }
    addToCart() {
        this.cartService.addToCart(this.product);
    }
};
__decorate([
    Input('product')
], ProductCardComponent.prototype, "product", void 0);
__decorate([
    Input('shopping-cart')
], ProductCardComponent.prototype, "shoppingCart", void 0);
ProductCardComponent = __decorate([
    Component({
        selector: 'product-card',
        templateUrl: './product-card.component.html',
        styleUrls: ['./product-card.component.css']
    })
], ProductCardComponent);
export { ProductCardComponent };
//# sourceMappingURL=product-card.component.js.map