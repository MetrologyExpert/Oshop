import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let ProductsFilterComponent = class ProductsFilterComponent {
    constructor(categoryService) {
        this.categories$ = categoryService.getAll();
    }
    ngOnInit() {
    }
};
__decorate([
    Input('category')
], ProductsFilterComponent.prototype, "category", void 0);
ProductsFilterComponent = __decorate([
    Component({
        selector: 'products-filter',
        templateUrl: './products-filter.component.html',
        styleUrls: ['./products-filter.component.css']
    })
], ProductsFilterComponent);
export { ProductsFilterComponent };
//# sourceMappingURL=products-filter.component.js.map