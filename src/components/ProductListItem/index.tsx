import { IProduct } from '../../models/Product';

interface ProductListItemProps {
  product: IProduct,
  handleAddProductQuantity: (productId: number) => void;
  handleRemoveProductQuantity: (productId: number) => void;
}

export function ProductListItem({
  product,
  handleAddProductQuantity,
  handleRemoveProductQuantity
  }: ProductListItemProps
) {
  return (
    <>
      <li>
        {product.name}
      </li>
      <li>
        Quantity: {product.quantity}
      </li>
      <li>
        Price: {product.price}
      </li>
      <li>
        Subtotal: {product.subtotal}
      </li>
      <button type="button" onClick={() => handleAddProductQuantity(product.id)}>
        Add to cart
      </button>
      <button type="button" onClick={() => handleRemoveProductQuantity(product.id)}>
        Remove
      </button>
    </>
  )
}
