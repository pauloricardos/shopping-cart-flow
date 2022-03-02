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
  const handleAddProductQuantity = (productId: number) => setProducts(() => {
    const updatedProducts = products.map((product: IProduct) => {
      if (product.id === productId) {
        const newQuantity: number = product.quantity + 1;

        return {
          ...product,
          quantity: newQuantity,
          subtotal: calculateSubtotal(product.price, newQuantity),
        }
      } else {
        return product;
      }
    });

    return updatedProducts;
  });

  const handleRemoveProductQuantity = (productId: number) => setProducts(() => {
    const updatedProducts = products.map((product: IProduct) => {
      if (product.id === productId) {
        const newQuantity: number = product.quantity - 1;

        return {
          ...product,
          quantity: newQuantity,
          subtotal: calculateSubtotal(product.price, newQuantity),
        }
      } else {
        return product;
      }
    });

    return updatedProducts;
  });

  return (
    <main>
      {products.map(product => (
        <ul key={product.id}>
          <ProductListItem
            product={product}
            handleAddProductQuantity={handleAddProductQuantity}
            handleRemoveProductQuantity={handleRemoveProductQuantity}
          />
        </ul>
      ))}
    </main>
  )
}
