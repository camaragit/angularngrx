import { Action } from '@ngrx/store';

export enum ProductsActionsTypes {
  GET_ALL_PRODUCTS = '[Products] Get all products',
  GET_SELECTED_PRODUCTS = '[Products] Get selected products',
  GET_ALL_PRODUCTS_SUCCESS = '[Products] Get all products success',
  GET_SELECTED_PRODUCTS_SUCCESS = '[Products] Get selected products success',
  GET_ALL_PRODUCTS_ERROR = '[Products] Get all products error',
  GET_SELECTED_PRODUCTS_ERROR = '[Products] Get selected products error',
}
export class GetALLProductsAction implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS;
  constructor(public payload: any) {}
}
export class GetALLProductsActionSuccess implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS;
  constructor(public payload: any) {}
}
export class GetALLProductsActionError implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR;
  constructor(public payload: any) {}
}
export class GetSelectedProductsAction implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS;
  constructor(public payload: any) {}
}
export class GetSelectedProductsActionSuccess implements Action {
  type: ProductsActionsTypes =
    ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS;
  constructor(public payload: any) {}
}
export class GetSelectedProductsActionError implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR;
  constructor(public payload: any) {}
}
export type ProductActions =
  | GetALLProductsAction
  | GetALLProductsActionError
  | GetALLProductsActionSuccess
  | GetSelectedProductsAction
  | GetSelectedProductsActionSuccess
  | GetSelectedProductsActionError;
