import { CategoryService } from 'src/app/category.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.css']
})
export class ProductsFilterComponent implements OnInit {
  
  categories$;
  @Input('category') category;
  
  constructor(categoryService: CategoryService) {

    this.categories$ = categoryService.getAll();


   }

  ngOnInit(): void {
  }

}
