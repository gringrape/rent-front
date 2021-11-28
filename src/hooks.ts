import { useRecoilValue, useSetRecoilState } from 'recoil';
import { fetchProducts } from './services/api';

import { productsState } from './state';

export function useProducts() {
  const products = useRecoilValue(productsState);
  const setProducts = useSetRecoilState(productsState);

  const loadProducts = async () => {
    const data = await fetchProducts();
    setProducts(data);
  };

  return { products, loadProducts };
}

// TODO: delete this
export default {};
