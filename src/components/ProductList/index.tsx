import { ProductListItem } from '../ProductListItem';

import { IProduct } from '../../models/Product';

import { calculateSubtotal } from '../../utils/calculateSubtotal';

interface ProductListProps {
  products: IProduct[];
  setProducts: (value: () => IProduct[]) => void;
}

export function ProductList({
  products, setProducts
}: ProductListProps) {
  const newProduct = (product: IProduct, newQuantity: number) => ({
    ...product,
    quantity: newQuantity,
    subtotal: calculateSubtotal(product.price, newQuantity),
  });

  const handleAddProduct = (productId: number, productQuantity: number) => setProducts(() => {
    const newProducts = products.map((product: IProduct) => {
      if (product.id === productId) {
        return newProduct(product, productQuantity);
      } else {
        return product;
      }
    });

    return newProducts;
  });

  const handleRemoveProduct = (productId: number, productQuantity: number) => setProducts(() => {
    const newProducts = products.map((product: IProduct) => {
      if (product.id === productId) {
        return newProduct(product, productQuantity);
      } else {
        return product;
      }
    });

    return newProducts;
  });

  return (
    <main>
      {products.map(product => (
        <ul key={product.id}>
          <ProductListItem
            product={product}
            handleAddProduct={handleAddProduct}
            handleRemoveProduct={handleRemoveProduct}
          />
        </ul>
      ))}
    </main>
  )
}
