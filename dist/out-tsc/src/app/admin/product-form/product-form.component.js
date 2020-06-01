import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { take } from 'rxjs/operators';
let ProductFormComponent = class ProductFormComponent {
    constructor(router, route, categoryService, productService) {
        this.router = router;
        this.route = route;
        this.categoryService = categoryService;
        this.productService = productService;
        this.product = {};
        this.categories$ = categoryService.getAll();
        this.id = this.route.snapshot.paramMap.get('id');
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id)
            this.productService.getProduct(this.id).valueChanges().pipe(take(1)).subscribe(p => this.product = p);
    }
    save(product) {
        if (this.id) {
            this.productService.updateProduct(this.id, product);
            console.log(product);
        }
        else {
            this.productService.create(product);
            console.log(product);
        }
        ;
        this.router.navigate(['/admin/products']);
    }
    delete() {
        if (!confirm('re you sure you want to delete this product?'))
            return;
        this.productService.delete(this.id);
        this.router.navigate(['/admin/products']);
    }
};
ProductFormComponent = __decorate([
    Component({
        selector: 'app-product-form',
        templateUrl: './product-form.component.html',
        styleUrls: ['./product-form.component.css']
    })
], ProductFormComponent);
export { ProductFormComponent };
//# sourceMappingURL=product-form.component.js.map