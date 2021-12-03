import { Product } from '../models/product.model';
import { ProductActions, ProductsActionsTypes } from './products.actions';
import { Action } from '@ngrx/store';

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
  state: ProductState = initState,
  action: Action
): ProductState {
  switch (action.type) {
    case ProductsActionsTypes.GET_ALL_PRODUCTS:
      return { ...state, dataState: ProductStateEnum.LOADING };

    case ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        dataState: ProductStateEnum.LOADED,
        products: (<ProductActions>action).payload,
      };
    case ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR:
      return {
        ...state,
        dataState: ProductStateEnum.ERROR,
        errorMessage: (<ProductActions>action).payload,
      };
      case ProductsActionsTypes.GET_SELECTED_PRODUCTS:
        return { ...state, dataState: ProductStateEnum.LOADING };

      case ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS:
        return {
          ...state,
          dataState: ProductStateEnum.LOADED,
          products: (<ProductActions>action).payload,
        };
      case ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR:
        return {
          ...state,
          dataState: ProductStateEnum.ERROR,
          errorMessage: (<ProductActions>action).payload,
        };
        case ProductsActionsTypes.GET_PRODUCTS_BYKW:
          return { ...state, dataState: ProductStateEnum.LOADING };

        case ProductsActionsTypes.GET_PRODUCTS_BYKW_SUCCESS:
          return {
            ...state,
            dataState: ProductStateEnum.LOADED,
            products: (<ProductActions>action).payload,
          };
        case ProductsActionsTypes.GET_PRODUCTS_BYKWS_ERROR:
          return {
            ...state,
            dataState: ProductStateEnum.ERROR,
            errorMessage: (<ProductActions>action).payload,
          };

          case ProductsActionsTypes.SELECT_PRODUCT:
            return { ...state, dataState: ProductStateEnum.LOADING };

          case ProductsActionsTypes.SELECT_PRODUCT_SUCCESS:
            let produitModifie:Product = (<ProductActions>action).payload;
            let products = [...state.products];
           let dataproducts = products.map(p=>p.id === produitModifie.id  ? produitModifie :p);
            return {
              ...state,
              dataState: ProductStateEnum.LOADED,
              products:dataproducts,
            };
          case ProductsActionsTypes.SELECT_PRODUCT_ERROR:
            return {
              ...state,
              dataState: ProductStateEnum.ERROR,
              errorMessage: (<ProductActions>action).payload,
            };

            case ProductsActionsTypes.DELETE_PRODUCT:
              return { ...state, dataState: ProductStateEnum.LOADING };
            case ProductsActionsTypes.DELETE_PRODUCT_SUCCESS:
              const produits: Product[] = [...state.products];
              const produitSupprimer:Product = (<ProductActions>action).payload;
              const produitsRestant: Product[] = produits.filter(p=>p.id!=produitSupprimer.id);
              return {
                ...state,
                dataState: ProductStateEnum.LOADED,
                products:produitsRestant,
              };
    default:
      return { ...state };
  }
}
