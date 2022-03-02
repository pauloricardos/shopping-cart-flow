import { createContext, useState, ReactNode } from 'react';

import { IProduct } from '../models/Product';
import { productListMock } from '../__mocks__/productList';
import { sum } from '../utils/sum';

interface ProductContextProviderProps {
  children: ReactNode;
}

interface ProductContextValue {
  products: IProduct[];
  setProducts: (value: () => IProduct[]) => void;
  totalProductsPrice: number;
  totalProducts: number,
}

export const ProductContext = createContext<ProductContextValue | undefined>(undefined);

export const ProductContextProvider = ({ children }: ProductContextProviderProps) => {
  const [products, setProducts] = useState<IProduct[]>(productListMock);

  const totalProductsPrice = sum(products.map(product => product.subtotal));

  const totalProducts = sum(products.map(product => product.quantity));

  const state = {
    products,
    setProducts,
    totalProductsPrice,
    totalProducts,
  }

  return (
    <ProductContext.Provider value={state}>
      {children}
    </ProductContext.Provider>
  )
}