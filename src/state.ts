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

export interface ProductItem {
  deposit: number;
  description: string;
  id: number;
  images: [
    {
      originalFileName: string;
      serverFileName: string;
    }
  ],
  name: string;
  price: number;
}

export const productState = atom<ProductItem>({
  key: 'productState',
  default: {} as ProductItem,
});
