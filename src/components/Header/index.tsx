import { currencyFormatter } from '../../utils/currencyFormatter';

import { useProductContext } from '../../hooks/useProductContext';

import { Container } from './styles';

export function Header() {
  const { state: { totalProducts, totalProductsPrice } } = useProductContext();

  return (
    <Container>
      <h1>
        Thoughtworks Interview
      </h1>
      <div>
        Total Products: {totalProducts}
        <br />
        Total Price: {currencyFormatter(totalProductsPrice)}
      </div>
    </Container>
  )
}