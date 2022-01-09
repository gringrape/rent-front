import { useLayoutEffect } from 'react';
import styled from 'styled-components';

import { useProducts, useTopProducts } from '../hooks';

import Products from './Products';
import TopProducts from './TopProduct';

const Container = styled.div`
  padding: 0 14px;
`;

const Title = styled.h1`
  margin-bottom: 21px;
  font-size: 18px;
  line-height: 21px;
`;

const TopProductsWithStyle = styled(TopProducts)`
  margin-bottom: 39px;
`;

export default function ProductListPage() {
  const { loadProducts } = useProducts();
  const { loadTopProducts } = useTopProducts();

  useLayoutEffect(() => {
    loadProducts();
    loadTopProducts();
  }, []);

  return (
    <Container>
      <Title>
        BEST TOP 10
      </Title>
      <TopProductsWithStyle />
      <Title>NOW 실시간 새로운 등록 아이템</Title>
      <Products />
    </Container>
  );
}
