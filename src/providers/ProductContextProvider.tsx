import { createContext, Dispatch, ReactNode, useReducer } from 'react';

import { productsReducer, InitialState } from '../store/reducers';
import { Action } from '../store/actions';
import { productListMock } from '../__mocks__/productList';

interface ProductContextProviderProps {
  children: ReactNode;
}

const initialState = {
  products: productListMock,
  totalProducts: 0,
  totalProductsPrice: 0,
}

export const ProductContext = createContext<{
  state: InitialState;
  dispatch: Dispatch<Action>
}>({ state: initialState, dispatch: () => null, });

export const ProductContextProvider = ({ children }: ProductContextProviderProps) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  )
}