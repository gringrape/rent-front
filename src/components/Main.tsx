import styled from 'styled-components';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ProductListPage from './ProductListPage';
import ProductItemPage from './ProductItemPage';

const Layout = styled.div`
  max-width: 768px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Main() {
  return (
    <Layout>
      <Router basename="/rent-front">
        <Routes>
          <Route path="/" element={<ProductListPage />} />
          <Route path="/:id" element={<ProductItemPage />} />
        </Routes>
      </Router>
    </Layout>
  );
}
