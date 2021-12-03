import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from '../services/product.service';
import { catchError, map, mergeMap, Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { GetSelectedProductsActionSuccess, GetSelectedProductsActionError, selectProductAction, selectProductActionError, selectProductActionSuccess, ProductActions, deleteProductActionSuccess, deleteProductActionError } from './products.actions';
import { Product } from '../models/product.model';
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
  getSelectedProductsEffect: Observable<Action> = createEffect(() =>
  this.effectActions.pipe(
    ofType(ProductsActionsTypes.GET_SELECTED_PRODUCTS),
    mergeMap(() => {
      return this.productService.getAlltSelectedProduct().pipe(
        map((products) => new GetSelectedProductsActionSuccess(products)),
        catchError((err) => of(new GetSelectedProductsActionError(err)))
      );
    })
  )
);
getProductsByKeywordEffect: Observable<Action> = createEffect(() =>
this.effectActions.pipe(
  ofType(ProductsActionsTypes.GET_PRODUCTS_BYKW),
  mergeMap((action:any) => {
    return this.productService.seachProducts(action.payload).pipe(
      map((products) => new GetSelectedProductsActionSuccess(products)),
      catchError((err) => of(new GetSelectedProductsActionError(err)))
    );
  })
)
);
selectProductEffect: Observable<Action> = createEffect(() =>
this.effectActions.pipe(
  ofType(ProductsActionsTypes.SELECT_PRODUCT),
  mergeMap((action:any) => {
    let prod: Product = {...action.payload};
    return this.productService.selectProduct(prod).pipe(
      map((product: Product) => new selectProductActionSuccess(product)),
      catchError((err) => of(new selectProductActionError(err)))
    );
  })
)
);
deleteProductEffect: Observable<Action> = createEffect(() =>
this.effectActions.pipe(
  ofType(ProductsActionsTypes.DELETE_PRODUCT),
  mergeMap((action:any) => {
    let prod: Product = {...action.payload};
    return this.productService.deleteProduct(prod).pipe(
      map(() => new deleteProductActionSuccess(prod)),
      catchError((err) => of(new deleteProductActionError(err)))
    );
  })
)
);
}
