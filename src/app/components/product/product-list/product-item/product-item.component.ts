import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../../../../models/product.model';
import { ProductActions, selectProductAction, deleteProductAction } from '../../../../ngrx/products.actions';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
@Input() product!: Product;
  constructor(private store:Store) { }

  ngOnInit(): void {
  }
  onSelect(product: Product){
     this.store.dispatch(new selectProductAction(product))

  }

  onDelete(product:Product){
    this.store.dispatch(new deleteProductAction(product))

  }

}
