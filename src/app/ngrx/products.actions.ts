import { Action } from "@ngrx/store";
import { Product } from '../models/product.model';

export enum ProductsActionsTypes{
  GET_ALL_PRODUCTS ="[Products] Get all products",
  GET_ALL_PRODUCTS_SUCCESS ="[Products] Get all products success",
  GET_ALL_PRODUCTS_ERROR ="[Products] Get all products error",
}
export class GetALLProductsAction implements Action{
  type: ProductsActionsTypes= ProductsActionsTypes.GET_ALL_PRODUCTS;
  constructor(public payload:Product[]){

  }

}
export class GetALLProductsActionSuccess implements Action{
  type: ProductsActionsTypes= ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS;
  constructor(public payload:any){

  }

}
export class GetALLProductsActionError implements Action{
  type: ProductsActionsTypes= ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR;
  constructor(public payload:any){
  }

}
export type ProductActions = GetALLProductsAction | GetALLProductsActionError| GetALLProductsActionSuccess;

