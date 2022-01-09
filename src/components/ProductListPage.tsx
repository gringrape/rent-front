import { useEffect } from 'react';
import styled from 'styled-components';

import { useProducts } from '../hooks';

import Products from './Products';

const Container = styled.div`
  padding: 0 14px;
`;

const Title = styled.h1`
  margin-bottom: 21px;
  font-size: 18px;
  line-height: 21px;
`;

export default function ProductListPage() {
  const { loadProducts } = useProducts();

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <Container>
      <Title>NOW 실시간 새로운 등록 아이템</Title>
      <Products />
    </Container>
  );
}
