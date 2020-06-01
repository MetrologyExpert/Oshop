import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let ProductService = class ProductService {
    constructor(db) {
        this.db = db;
    }
    create(product) {
        return this.db.list('/products/').push(product);
    }
    getAll() {
        //return  this.db.list<Product>('/products/').valueChanges().subscribe((values)=>{ values.forEach((value)=> this.products)});;
        return this.db.list('/products').snapshotChanges();
    }
    ;
    // getAllx(){
    //   return this.db.list('/products').snapshotChanges()
    //     .pipe(
    //       map(actions =>
    //         actions.map(a => <Product>{}
    //           )));
    //}
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