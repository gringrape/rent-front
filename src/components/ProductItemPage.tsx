import { useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useProduct } from '../hooks';

export default function Main() {
  const { id } = useParams<{ id: string }>();
  const { product, loadProduct } = useProduct();

  useLayoutEffect(() => {
    if (id) {
      loadProduct(id);
    }
  }, []);

  return (
    <>
      <h1>상품 상세</h1>
      <p>{product.name}</p>
      <p>{product.deposit}</p>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </>
  );
}
