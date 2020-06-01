import { ShoppingCartService } from './../shopping-cart.service';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit, OnDestroy {
  products: any[] = [];
  filteredProducts: any[] = [];
  cart: any;
  category: string;
  subscription: Subscription;

   constructor(
    route: ActivatedRoute,
    productService:ProductService, 
    private shoppingCartService: ShoppingCartService
    ) {


      productService.getAll().pipe(
        switchMap(products => {
          this.products = products;
        return route.queryParamMap; }))
        .subscribe(params =>
          {
              this.category = params.get('category');
              this.filteredProducts = (this.category) ? 
              this.products.filter(p => p.payload.val().category === this.category) :
              this.products;
              //console.log(this.filteredProducts);
          });
    }
  
    async ngOnInit(){

      this.subscription = (await this.shoppingCartService.getCart()).valueChanges().subscribe(cart => this.cart = cart);

    }

    ngOnDestroy(){
      this.subscription.unsubscribe();
    }


}
     


