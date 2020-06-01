import { Component} from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { take, map } from 'rxjs/operators';
import * as firebase from 'firebase/app';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent  {

 
  categories$;
  product = <any>{};
  id;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService:CategoryService, 
    private productService: ProductService )
     {
      this.categories$ = categoryService.getAll();


      this.id = this.route.snapshot.paramMap.get('id');
  

       this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) this.productService.getProduct(this.id).valueChanges().pipe(take(1)).subscribe(p => this.product = p);
     }


   save(product){

    if (this.id) 
    {
      this.productService.updateProduct(this.id, product);
      console.log(product);
    }
         else

    {
      this.productService.create(product);
      console.log(product);
    };

    this.router.navigate(['/admin/products']);
   }

   delete(){
     if (!confirm('re you sure you want to delete this product?')) return ;

        this.productService.delete(this.id);
        this.router.navigate(['/admin/products']);
   
  
   }
}
