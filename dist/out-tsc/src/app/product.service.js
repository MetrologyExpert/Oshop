import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
let ProductService = class ProductService {
    constructor(db) {
        this.db = db;
    }
    create(product) {
        return this.db.list('/products/').push(product);
    }
    //getAll() {
    //return  this.db.list<Product>('/products/').valueChanges().subscribe((values)=>{ values.forEach((value)=> this.products)});;
    //return this.db.list<Product>('/products');
    //};
    getAll() {
        return this.db.list('/products').snapshotChanges()
            .pipe(map(actions => actions.map(a => (Object.assign({ key: a.key }, a.payload.val())))));
    }
    getProduct(productId) {
        return this.db.object('/products/' + productId);
    }
    updateProduct(productId, product) {
        return this.db.object('/products/' + productId).update(product);
    }
    delete(productId) {
        return this.db.object('/products/' + productId).remove();
    }
};
ProductService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ProductService);
export { ProductService };
//# sourceMappingURL=product.service.js.map