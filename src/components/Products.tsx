import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useProducts } from '../hooks';

const ThumbnailImage = styled.img`
  aspect-ratio: 1;
  width: 100%;
  object-fit: cover;
  object-position: center top;
  border-radius: 6px;
  cursor: pointer;
`;

const List = styled.ul`
  display: grid;
  grid: auto-flow / 1fr 1fr 1fr;
  column-gap: 15px;
  row-gap: 18px;
`;

const ListItem = styled.li`
  list-style: none;
`;

const Title = styled.p`
  margin-top: 8px;
  font-size: 13px;
  line-height: 15px;
  font-weight: bold;
`;

const Price = styled.p`
  color: #FF5800;
  font-size: 12px;
  line-height: 14px;
`;

const SubBlock = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Category = styled.p`
  font-size: 9px;
  line-height: 11px;
`;

const City = styled.p`
  margin-top: 8px;
  font-size: 10px;
  line-height: 12px;
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
        id, name, price, thumbnailImage, city,
      }) => (
        <ListItem key={id}>
          <p>
            <ThumbnailImage
              onClick={() => handleClickItem(id)}
              src={`${thumbnailImage}`}
              alt="상품 썸네일"
            />
          </p>
          <SubBlock>
            <Category>
              [책]
            </Category>
            <Price>
              {price}
              원/일
            </Price>
          </SubBlock>
          <Title>{name.trim()}</Title>
          <City>
            {city}
          </City>
        </ListItem>
      ))}
    </List>
  );
}
