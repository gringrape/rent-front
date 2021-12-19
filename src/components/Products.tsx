import styled from 'styled-components';

import { useProducts } from '../hooks';

const ThumbnailImage = styled.img`
  width: 210px;
  height: 210px;
  object-fit: cover;
  object-position: center top;
  border-radius: 12px;
`;

const List = styled.ul`
  display: grid;
  grid: auto-flow / repeat(4, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid: auto-flow / 1fr 1fr 1fr;
  }

  @media (max-width: 660px) {
    grid: auto-flow / 1fr 1fr;
  }
`;

const ListItem = styled.li`
  list-style: none;
  max-width: 250px;
`;

const Title = styled.p`
`;

export default function Products() {
  const { products } = useProducts();

  return (
    <List>
      {products.map(({
        id, name, price, deposit, thumbnailImage,
      }) => (
        <ListItem key={id}>
          <p>
            <ThumbnailImage src={`${thumbnailImage}`} alt="상품 썸네일" />
          </p>
          <Title>{name}</Title>
          <p>
            일당:
            {' '}
            {price}
          </p>
          <p>
            보증금:
            {' '}
            {deposit}
          </p>
        </ListItem>
      ))}
    </List>
  );
}
