import { IProduct } from '../../models/Product';

interface ProductListItemProps {
  product: IProduct,
  handleAddProduct: (productId: number, productQuantity: number) => void;
  handleRemoveProduct: (productId: number, productQuantity: number) => void;
}

export function ProductListItem({
  product,
  handleAddProduct,
  handleRemoveProduct
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
      <button
        type="button"
        onClick={() => handleAddProduct(product.id, product.quantity + 1)}
      >
        Add to cart
      </button>
      <button
        type="button"
        onClick={() => handleRemoveProduct(product.id, product.quantity - 1)}
        disabled={product.quantity === 0}
      >
        Remove
      </button>
    </>
  )
}
