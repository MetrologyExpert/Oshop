import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { switchMap } from 'rxjs/operators';
let ProductsComponent = class ProductsComponent {
    constructor(route, productService, shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
        this.products = [];
        this.filteredProducts = [];
        productService.getAll().pipe(switchMap(products => {
            this.products = products;
            return route.queryParamMap;
        }))
            .subscribe(params => {
            this.category = params.get('category');
            this.filteredProducts = (this.category) ?
                this.products.filter(p => p.payload.val().category === this.category) :
                this.products;
            console.log(this.filteredProducts);
        });
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            (yield this.shoppingCartService.getCart()).subscribe(cart => this.cart = cart);
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
ProductsComponent = __decorate([
    Component({
        selector: 'app-products',
        templateUrl: './products.component.html',
        styleUrls: ['./products.component.css']
    })
], ProductsComponent);
export { ProductsComponent };
//# sourceMappingURL=products.component.js.map