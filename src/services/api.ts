import axios from 'axios';

export async function fetchProducts() {
  const url = 'http://34.133.252.24:8080/rent/products/';
  const { data } = await axios.get(url);

  return data;
}

// TODO: delete below
export default {};
