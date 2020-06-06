import { __decorate } from "tslib";
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
//Routes
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { DataTableModule } from 'angular5-data-table';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
//Ng B Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//Category Service
import { CategoryService } from './category.service';
import { ProductService } from './product.service';
import { ShoppingCartService } from './shopping-cart.service';
import { FormsModule } from '@angular/forms';
import { ProductsFilterComponent } from './products/products-filter/products-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            BsNavbarComponent,
            HomeComponent,
            ProductsComponent,
            ShoppingCartComponent,
            CheckOutComponent,
            OrderSuccessComponent,
            MyOrdersComponent,
            AdminProductsComponent,
            AdminOrdersComponent,
            ProductFormComponent,
            ProductsFilterComponent,
            ProductCardComponent,
            ProductQuantityComponent,
        ],
        imports: [
            BrowserModule,
            FormsModule,
            DataTableModule.forRoot(),
            AppRoutingModule,
            AngularFireModule.initializeApp(environment.firebase),
            AngularFireDatabaseModule,
            AngularFireAuthModule,
            NgbModule,
            RouterModule.forRoot([
                { path: '', component: ProductsComponent },
                { path: 'shopping-cart', component: ShoppingCartComponent },
                { path: 'products', component: ProductsComponent },
                { path: 'check-out', component: CheckOutComponent },
                { path: 'my/orders', component: MyOrdersComponent },
                { path: 'order-success', component: OrderSuccessComponent },
                { path: 'login', component: LoginComponent },
                { path: 'admin/products/new', component: ProductFormComponent },
                { path: 'admin/products/:id', component: ProductFormComponent },
                { path: 'admin/products', component: AdminProductsComponent },
                { path: 'admin/orders', component: AdminOrdersComponent }
            ]),
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        providers: [CategoryService,
            ProductService,
            ShoppingCartService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map