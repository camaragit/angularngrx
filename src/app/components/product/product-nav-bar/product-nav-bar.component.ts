import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetALLProductsAction } from '../../../ngrx/products.actions';

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
  onGetSelectedProduct() {}
}
