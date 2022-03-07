import { IProduct } from '../models/Product';

export enum Types {
  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
}

export type Action =
  | { type: Types.ADD_PRODUCT, payload: IProduct }
  | { type: Types.REMOVE_PRODUCT, payload: IProduct }