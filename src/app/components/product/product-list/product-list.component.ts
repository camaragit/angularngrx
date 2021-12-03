import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductState, ProductStateEnum } from 'src/app/ngrx/products.reducer';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  readonly ProductStateEnum = ProductStateEnum;
  @Input() state!: Observable<ProductState>;
  constructor() { }

  ngOnInit(): void {
  }

}
