import { Header } from './components/Header';
import { ProductList } from './components/ProductList';

import { ProductContextProvider } from './providers/ProductContextProvider';

export function App() {
  return (
    <ProductContextProvider>
      <Header />
      <ProductList />
    </ProductContextProvider>
  );
}
