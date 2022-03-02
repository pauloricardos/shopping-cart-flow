import { useContext } from 'react';

import { ProductContext } from '../providers/ProductContextProvider';

export const useProductContext = () => {
  const context = useContext(ProductContext);

  if (context === undefined) {
    throw new Error('useProductContext must be used inside ProductContextProvider');
  }

  return context;
};
