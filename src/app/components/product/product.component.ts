import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { ProductState } from 'src/app/ngrx/products.reducer';
import { ProductStateEnum } from '../../ngrx/products.reducer';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  productsState$!: Observable<ProductState>;

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.productsState$ = this.store.pipe(map((state) => state.catalogState));
  }
}
