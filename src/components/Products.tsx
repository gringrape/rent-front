import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useProducts } from '../hooks';

const ThumbnailImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  object-position: center top;
  border-radius: 12px;
  cursor: pointer;
`;

const List = styled.ul`
  display: grid;
  grid: auto-flow / 1fr 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 660px) {
    grid: auto-flow / 320px 320px;

    & > li {
      max-width: 320px;
    }
  }

  @media (max-width: 450px) {
    grid: auto-flow / 320px;

    & > li {
      max-width: 320px;
    }
  }
`;

const ListItem = styled.li`
  list-style: none;
`;

const Title = styled.p`
`;

export default function Products() {
  const { products } = useProducts();

  const navigate = useNavigate();

  const handleClickItem = (id: number) => {
    navigate(`/${id}`);
  };

  return (
    <List>
      {products.map(({
        id, name, price, deposit, thumbnailImage,
      }) => (
        <ListItem key={id}>
          <p>
            <ThumbnailImage
              onClick={() => handleClickItem(id)}
              src={`${thumbnailImage}`}
              alt="상품 썸네일"
            />
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
