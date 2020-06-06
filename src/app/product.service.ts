import { Product } from 'src/app/models/product';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { kStringMaxLength } from 'buffer';
import { stringify } from 'querystring';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[];
  constructor(private db: AngularFireDatabase) { }

    create(product) {
  
      return this.db.list('/products/').push(product);
    }

    //getAll() {
     //return  this.db.list<Product>('/products/').valueChanges().subscribe((values)=>{ values.forEach((value)=> this.products)});;
     //return this.db.list<Product>('/products');
    //};

    getAll() {
      return this.db.list<Product>('/products').snapshotChanges()
        .pipe(
          map(actions =>
            actions.map(a => ({ key: a.key, ...a.payload.val() }))
          )
        );
    }
    

    getProduct(productId) {
      return this.db.object('/products/' + productId);
    }

    updateProduct(productId, product){
      return this.db.object('/products/' + productId).update(product);

    }

    delete(productId){
      return this.db.object('/products/' + productId).remove();
    }

}
