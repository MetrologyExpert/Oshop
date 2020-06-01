import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let ProductCardComponent = class ProductCardComponent {
    constructor(cartService) {
        this.cartService = cartService;
    }
    addToCart(product) {
        this.cartService.addToCart(product);
    }
    removeFromCart(product) {
        this.cartService.removeFromCart(product);
    }
    getQuantity(product) {
        if (!this.shoppingCart)
            return 0;
        let item = this.shoppingCart.items[product.key];
        return item ? item.quantity : 0;
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