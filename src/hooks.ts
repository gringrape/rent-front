/* eslint-disable no-unused-vars */
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { fetchProducts, fetchProduct, fetchTopProducts } from './services/api';

import {
  ProductItem, productsState, productState, topProductsState,
} from './state';

export function useProducts() {
  const products = useRecoilValue(productsState);
  const setProducts = useSetRecoilState(productsState);

  const loadProducts = async () => {
    const data = await fetchProducts();
    setProducts(data);
  };

  return { products, loadProducts };
}

export function useTopProducts() {
  const topProducts = useRecoilValue(topProductsState);
  const setTopProducts = useSetRecoilState(topProductsState);

  const loadTopProducts = async () => {
    const data = await fetchTopProducts();

    setTopProducts(data);
  };

  return { topProducts, loadTopProducts };
}

export function useProduct(): {
   product: ProductItem;
   loadProduct: (id: string) => Promise<void>
   } {
  const product = useRecoilValue(productState);
  const setProduct = useSetRecoilState(productState);

  const loadProduct = async (id: string) => {
    const data = await fetchProduct(id);

    setProduct(data);
  };

  return { product, loadProduct };
}
