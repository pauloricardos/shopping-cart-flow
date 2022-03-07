import { Reducer } from 'react';

import { Types, Action } from './actions';
import { IProduct } from '../models/Product';

import { calculateSubtotal } from '../utils/calculateSubtotal';
import { sum } from '../utils/sum';

export interface InitialState {
  products: IProduct[];
  totalProducts: number;
  totalProductsPrice: number;
}

const newProduct = (product: IProduct, newQuantity: number) => ({
  ...product,
  quantity: newQuantity,
  subtotal: calculateSubtotal(product.price, newQuantity),
});

export const productsReducer: Reducer<InitialState, Action> = (state, action): InitialState => {
  const totalProducts = sum(state.products.map(product => product.quantity));
  const totalProductsPrice = sum(state.products.map(product => product.subtotal));

  switch(action.type) {
    case Types.ADD_PRODUCT: {
      const newProducts = state.products.map((product: IProduct) => {
        if (product.id === action.payload.id) {
          return newProduct(product, action.payload.quantity);
        } else {
          return product;
        }
      });

      return {
        ...state,
        products: newProducts,
        totalProducts,
        totalProductsPrice,
      };
    }
    case Types.REMOVE_PRODUCT: {
      const newProducts = state.products.map((product: IProduct) => {
        if (product.id === action.payload.id) {
          return newProduct(product, action.payload.quantity);
        } else {
          return product;
        }
      });

      return {
        ...state,
        products: newProducts,
        totalProducts,
        totalProductsPrice,
      };
    }
    default:
      return state;
  }
}