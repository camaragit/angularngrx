import { GetProductsByKeywordAction } from './../../../ngrx/products.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetALLProductsAction, GetSelectedProductsAction } from '../../../ngrx/products.actions';

@Component({
  selector: 'app-product-nav-bar',
  templateUrl: './product-nav-bar.component.html',
  styleUrls: ['./product-nav-bar.component.scss'],
})
export class ProductNavBarComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}
  onGetAllProduct() {
    this.store.dispatch(new GetALLProductsAction({}));
  }
  onGetSelectedProduct() {
    this.store.dispatch(new GetSelectedProductsAction({}));
  }
  onSearch(input :any){
    console.log(input.keyword);
    this.store.dispatch(new GetProductsByKeywordAction(input.keyword));
  }
}
