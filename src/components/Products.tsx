import { useProducts } from '../hooks';

export default function Products() {
  const { products } = useProducts();

  return (
    <ul>
      {products.map(({
        id, name, price, deposit, thumbnailImage,
      }) => (
        <li key={id}>
          <h2>{name}</h2>
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
          <p>
            썸네일:
            <img src={`http://${thumbnailImage}`} alt="상품 썸네일" />
          </p>
        </li>
      ))}
    </ul>
  );
}
