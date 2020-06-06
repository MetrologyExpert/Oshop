import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
let BsNavbarComponent = class BsNavbarComponent {
    constructor(afAuth, shoppingCartService) {
        this.afAuth = afAuth;
        this.shoppingCartService = shoppingCartService;
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.user$ = this.afAuth.authState;
            this.cart$ = yield this.shoppingCartService.getCart();
        });
    }
    logout() {
        this.afAuth.signOut();
    }
};
BsNavbarComponent = __decorate([
    Component({
        selector: 'bs-navbar',
        templateUrl: './bs-navbar.component.html',
        styleUrls: ['./bs-navbar.component.css']
    })
], BsNavbarComponent);
export { BsNavbarComponent };
//# sourceMappingURL=bs-navbar.component.js.map