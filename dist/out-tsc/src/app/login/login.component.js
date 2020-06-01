import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as firebase from 'firebase';
let LoginComponent = class LoginComponent {
    constructor(afAuth) {
        this.afAuth = afAuth;
    }
    login() {
        this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map