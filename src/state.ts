import { atom } from 'recoil';

export interface Product {
  id: number;
  name: string;
  price: number;
  deposit: number;
  thumbnailImage: string;
}

export const productsState = atom<Product[]>({
  key: 'productsState',
  default: [],
});
