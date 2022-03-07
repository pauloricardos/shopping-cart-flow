import { ProductListItem } from '../ProductListItem';

import { IProduct } from '../../models/Product';

import { Types } from '../../store/actions';
import { useProductContext } from '../../hooks/useProductContext';

export function ProductList() {
  const { state: { products }, dispatch } = useProductContext();

  const handleAddProduct = (product: IProduct) => dispatch({
    type: Types.ADD_PRODUCT,
    payload: {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: product.quantity + 1,
      subtotal: product.subtotal
    }
  });

  const handleRemoveProduct = (product: IProduct) => dispatch({
    type: Types.REMOVE_PRODUCT,
    payload: {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: product.quantity - 1,
      subtotal: product.subtotal
    }
  });

  return (
    <main>
      {products.map((product: IProduct) => (
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
