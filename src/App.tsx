import { useState } from 'react'

import { Header } from './components/Header';
import { ProductList } from './components/ProductList';

import { IProduct } from './models/Product';
import { productListMock } from './__mocks__/productList';

import { sum } from './utils/sum';

export function App() {
  const [products, setProducts] = useState<IProduct[]>(productListMock);

  const totalProductsPrice = sum(products.map(product => product.subtotal));

  const totalProducts = sum(products.map(product => product.quantity));

  return (
    <>
      <Header
        totalProductsPrice={totalProductsPrice}
        totalProducts={totalProducts}
      />
      <ProductList
        products={products}
        setProducts={setProducts}
      />
    </>
  );
}
