import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { DataTableResource } from 'angular5-data-table';
let AdminProductsComponent = class AdminProductsComponent {
    constructor(productService) {
        this.productService = productService;
        this.items = [];
        this.subscription = this.productService.getAll().subscribe(products => {
            this.filteredProducts = this.products = products;
            this.InitialiazeTable(products);
        });
        //console.log(this.subscription);
    }
    InitialiazeTable(products) {
        this.tableResource = new DataTableResource(products);
        this.tableResource.query({ offset: 0 })
            .then(items => this.items = items);
        this.tableResource.count().then(count => this.itemCount = count);
    }
    reloadItems(params) {
        if (!this.tableResource)
            return;
        this.tableResource.query(params)
            .then(items => this.items = items);
    }
    filter(query) {
        console.log(query);
        this.filteredProducts = (query) ?
            this.products = this.products.filter(product => product.payload.val().title.toLowerCase().includes(query.toLowerCase())) :
            this.products;
        this.InitialiazeTable(this.filteredProducts);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
AdminProductsComponent = __decorate([
    Component({
        selector: 'app-admin-products',
        templateUrl: './admin-products.component.html',
        styleUrls: ['./admin-products.component.css']
    })
], AdminProductsComponent);
export { AdminProductsComponent };
//# sourceMappingURL=admin-products.component.js.map