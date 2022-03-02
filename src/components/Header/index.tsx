import { currencyFormatter } from '../../utils/currencyFormatter';

import { Container } from './styles';

interface HeaderProps {
  totalProductsPrice: number;
  totalProducts: number;
}

export function Header({ totalProductsPrice, totalProducts }: HeaderProps) {
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