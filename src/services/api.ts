import axios from 'axios';

export async function fetchProducts() {
  const url = 'https://rentproject.xyz/rent/products/';

  const { data } = await axios.get(url);

  return data.content;
}

export async function fetchProduct(id: string) {
  const url = `https://rentproject.xyz/rent/products/${id}`;

  const { data } = await axios.get(url);

  return data;
}
