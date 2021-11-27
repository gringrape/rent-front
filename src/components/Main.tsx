import { useEffect } from 'react';

import { useProducts } from '../hooks';

import Products from './Products';

export default function Main() {
  const { loadProducts } = useProducts();

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <h1>상품 목록</h1>
      <Products />
    </>
  );
}
