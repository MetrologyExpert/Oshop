import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
let ShoppingCartComponent = class ShoppingCartComponent {
    constructor(shoppingcartService) {
        this.shoppingcartService = shoppingcartService;
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.cart$ = yield this.shoppingcartService.getCart();
        });
    }
};
ShoppingCartComponent = __decorate([
    Component({
        selector: 'app-shopping-cart',
        templateUrl: './shopping-cart.component.html',
        styleUrls: ['./shopping-cart.component.css']
    })
], ShoppingCartComponent);
export { ShoppingCartComponent };
//# sourceMappingURL=shopping-cart.component.js.map