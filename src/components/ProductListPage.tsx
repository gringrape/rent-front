import { useLayoutEffect } from 'react';
import styled from 'styled-components';

import { useProducts, useTopProducts } from '../hooks';
import Footer from './Footer';
import Navigation from './Navigation';

import Products from './Products';
import TopProducts from './TopProduct';

const Container = styled.div`
  padding: 0 14px;
  max-height: 800px;
`;

const NavigationWithStyle = styled(Navigation)`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 600px;
  background-color: white;
`;

const TopTitle = styled.h1`\
  margin-top: 93px;
  margin-bottom: 21px;
  font-size: 18px;
  line-height: 21px;
`;

const Title = styled.h1`
  margin-bottom: 21px;
  font-size: 18px;
  line-height: 21px;
`;

const TopProductsWithStyle = styled(TopProducts)`
  margin-bottom: 39px;
`;

const FooterWithStyle = styled(Footer)`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  width: 100%;
  max-width: 600px;
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
      <NavigationWithStyle />
      <TopTitle>
        BEST TOP 10
      </TopTitle>
      <TopProductsWithStyle />
      <Title>NOW 실시간 새로운 등록 아이템</Title>
      <Products />
      <FooterWithStyle />
    </Container>
  );
}
