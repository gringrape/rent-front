import axios from 'axios';

export async function fetchProducts() {
  const url = 'http://3.35.70.80:8080/rent/products/';

  const { data } = await axios.get(url);

  return data.content;
}

// TODO: delete below
export default {};
