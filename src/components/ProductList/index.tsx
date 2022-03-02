import { ProductListItem } from '../ProductListItem';

import { IProduct } from '../../models/Product';

import { calculateSubtotal } from '../../utils/calculateSubtotal';
import { useProductContext } from '../../hooks/useProductContext';

export function ProductList() {
  const { products, setProducts } = useProductContext();

  const newProduct = (product: IProduct, newQuantity: number) => ({
    ...product,
    quantity: newQuantity,
    subtotal: calculateSubtotal(product.price, newQuantity),
  });

  const handleAddProduct = (productId: number) => setProducts(() => {
    const newProducts = products.map((product: IProduct) => {
      if (product.id === productId) {
        const newQuantity: number = product.quantity + 1;

        return newProduct(product, newQuantity);
      } else {
        return product;
      }
    });

    return newProducts;
  });

  const handleRemoveProduct = (productId: number) => setProducts(() => {
    const newProducts = products.map((product: IProduct) => {
      if (product.id === productId) {
        const newQuantity: number = product.quantity - 1;

        return newProduct(product, newQuantity);
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
