import { Product } from '../models/product.model';
import { ProductActions, ProductsActionsTypes } from './products.actions';

export enum ProductStateEnum {
  LOADING = 'LOADING',
  LOADED = 'LOADED',
  ERROR = 'ERROR',
  INITIAL = 'INITIAL',
}
export interface ProductState {
  products: Product[];
  errorMessage: string;
  dataState: ProductStateEnum;
}
const initState: ProductState = {
  products: [],
  dataState: ProductStateEnum.INITIAL,
  errorMessage: '',
};
export function productReducer(
  state: ProductState,
  action: ProductActions
): ProductState {
  switch (action.type) {
    case ProductsActionsTypes.GET_ALL_PRODUCTS:
      return { ...state, dataState: ProductStateEnum.LOADING };
    case ProductsActionsTypes.GET_ALL_PRODUCTS:
      return { ...state, dataState: ProductStateEnum.LOADING };
    case ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        dataState: ProductStateEnum.LOADED,
        products: action.payload,
      };
    case ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR:
      return {
        ...state,
        dataState: ProductStateEnum.ERROR,
        errorMessage: action.payload,
      };

    default:
      return { ...state };
  }
}
