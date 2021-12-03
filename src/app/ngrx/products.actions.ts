import { Action } from '@ngrx/store';
import { Product } from '../models/product.model';

export enum ProductsActionsTypes {
  GET_ALL_PRODUCTS = '[Products] Get all products',
  GET_ALL_PRODUCTS_SUCCESS = '[Products] Get all products success',
  GET_ALL_PRODUCTS_ERROR = '[Products] Get all products error',
  GET_SELECTED_PRODUCTS = '[Products] Get selected products',
  GET_SELECTED_PRODUCTS_SUCCESS = '[Products] Get selected products success',
  GET_SELECTED_PRODUCTS_ERROR = '[Products] Get selected products error',
  GET_PRODUCTS_BYKW = '[Products] Get products by keyword',
  GET_PRODUCTS_BYKW_SUCCESS = '[Products] Get products by keyword success',
  GET_PRODUCTS_BYKWS_ERROR = '[Products] Get  products by keyword error',
  SELECT_PRODUCT = '[Products] Select product',
  SELECT_PRODUCT_SUCCESS = '[Products] Select sucess',
  SELECT_PRODUCT_ERROR = '[Products] Select error',
  DELETE_PRODUCT = '[Products] delete product',
  DELETE_PRODUCT_SUCCESS = '[Products] delete sucess',
  DELETE_PRODUCT_ERROR = '[Products] delete error'
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
  type: ProductsActionsTypes = ProductsActionsTypes.GET_SELECTED_PRODUCTS;
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
export class GetProductsByKeywordAction implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_PRODUCTS_BYKW;
  constructor(public payload: any) {}
}
export class GetProductsByKeywordActionSuccess implements Action {
  type: ProductsActionsTypes =
    ProductsActionsTypes.GET_PRODUCTS_BYKW_SUCCESS;
  constructor(public payload: any) {}
}
export class GetProductsByKeywordActionError implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_PRODUCTS_BYKWS_ERROR;
  constructor(public payload: any) {}
}
export class OnselectProductAction implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_PRODUCTS_BYKW;
  constructor(public payload: any) {}
}
export class OnselectProductActionSuccess implements Action {
  type: ProductsActionsTypes =
    ProductsActionsTypes.GET_PRODUCTS_BYKW_SUCCESS;
  constructor(public payload: any) {}
}
export class OnselectProductActionError implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_PRODUCTS_BYKWS_ERROR;
  constructor(public payload: any) {}
}
export class selectProductAction implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.SELECT_PRODUCT;
  constructor(public payload: Product) {}
}
export class selectProductActionSuccess implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.SELECT_PRODUCT_SUCCESS;
  constructor(public payload: Product) {}
}
export class selectProductActionError implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.SELECT_PRODUCT_ERROR;
  constructor(public payload: any) {}
}
export class deleteProductAction implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.DELETE_PRODUCT;
  constructor(public payload: Product) {}
}
export class deleteProductActionSuccess implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.DELETE_PRODUCT_SUCCESS;
  constructor(public payload: any) {}
}
export class deleteProductActionError implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.DELETE_PRODUCT_ERROR;
  constructor(public payload: any) {}
}

export type ProductActions =
  | GetALLProductsAction
  | GetALLProductsActionError
  | GetALLProductsActionSuccess
  | GetSelectedProductsAction
  | GetSelectedProductsActionSuccess
  | GetSelectedProductsActionError
  | GetProductsByKeywordAction
  |GetProductsByKeywordActionError
  |GetProductsByKeywordActionSuccess | selectProductAction | selectProductActionSuccess |selectProductActionError
  |GetProductsByKeywordActionSuccess | deleteProductAction | deleteProductActionError |deleteProductActionSuccess;
