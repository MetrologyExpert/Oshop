import { Product } from 'src/app/models/product';
import { AngularFireDatabase } from '@angular/fire/database/';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

   getAll() {
    return this.db.list<Product>('/categories').snapshotChanges();


    }
}

