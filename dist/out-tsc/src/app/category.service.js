import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let CategoryService = class CategoryService {
    constructor(db) {
        this.db = db;
    }
    getAll() {
        return this.db.list('/categories').snapshotChanges();
    }
};
CategoryService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CategoryService);
export { CategoryService };
//# sourceMappingURL=category.service.js.map