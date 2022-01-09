import styled from 'styled-components';

import { useTopProducts } from '../hooks';

interface TopProductProps {
  className?: string;
}

const List = styled.ul`
  display: flex;
  overflow: scroll;
  list-style: none;
  gap: 6px;
  
  ::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
  }
  `;

const Item = styled.li`
  & img {
    max-width: 213px;
    width: 38vw;
    aspect-ratio: 1;
    border-radius: 6px;
  }

  & p {
    margin-top: 11px;
    padding-left: 6px;
    font-size: 13px;
    line-height: 15px;
    font-weight: bold;
  }
`;

export default function TopProducts({ className = '' }: TopProductProps) {
  const { topProducts } = useTopProducts();

  return (
    <List className={className}>
      {topProducts.map(({ id, thumbnailImage, name }) => (
        <Item key={id}>
          <img src={thumbnailImage} alt={name} />
          <p>{name}</p>
        </Item>
      ))}
    </List>
  );
}
