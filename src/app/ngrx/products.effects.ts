import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from '../services/product.service';
import { catchError, map, mergeMap, Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import {
  GetALLProductsActionError,
  ProductsActionsTypes,
  GetALLProductsActionSuccess,
} from './products.actions';

@Injectable()
export class ProductEffects {
  constructor(
    private productService: ProductService,
    private effectActions: Actions
  ) {}
  getAllProductsEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(ProductsActionsTypes.GET_ALL_PRODUCTS),
      mergeMap(() => {
        return this.productService.getAllProduct().pipe(
          map((products) => new GetALLProductsActionSuccess(products)),
          catchError((err) => of(new GetALLProductsActionError(err)))
        );
      })
    )
  );
}
