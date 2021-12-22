import { useRecoilValue, useSetRecoilState } from 'recoil';
import { fetchProducts, fetchProduct } from './services/api';

import { productsState, productState } from './state';

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
export function useProduct() {
  const product = useRecoilValue(productState);
  const setProduct = useSetRecoilState(productState);

  const loadProduct = async (id: string) => {
    const data = await fetchProduct(id);
    setProduct(data);
  };

  return { product, loadProduct };
}
