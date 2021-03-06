import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/product.service';
import { Component, OnDestroy, ContentChild} from '@angular/core';
import { Subscription, Observable} from 'rxjs';
import { DataTableResource } from 'angular5-data-table';



@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnDestroy{

  products: any[];
  filteredProducts: any[];
  subscription: Subscription;
  tableResource: DataTableResource<any>;
  items: Product[] = [];
  itemCount: number;

  constructor(private productService: ProductService) {
    this.subscription = this.productService.getAll().subscribe(products => {
      this.filteredProducts = this.products = products; 
      this.InitialiazeTable(products);
          
    });
 
    //console.log(this.subscription);
  }

   private InitialiazeTable(products: any[]){
      this.tableResource = new DataTableResource(products);
       this.tableResource.query({offset:0})
          .then(items => this.items = items);
        this.tableResource.count().then(count => this.itemCount = count);
    }

      reloadItems(params){

        if (!this.tableResource) return;
        this.tableResource.query(params)
         .then(items => this.items = items);
     }
 
 
   filter(query: string) {
    console.log(query);

    this.filteredProducts=(query) ? 
    this.products =  this.products.filter(product => product.title.toLowerCase().includes(query.toLowerCase())) :
    this.products;
    this.InitialiazeTable(this.filteredProducts);
   }
  

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }  
  
}
