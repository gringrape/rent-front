import { atom } from 'recoil';

export interface Product {
  id: number;
  name: string;
  price: number;
  deposit: number;
  thumbnailImage: string;
  city: string;
}

export interface TopProduct {
  id: number;
  thumbnailImage: string;
  name: string;
}

export const productsState = atom<Product[]>({
  key: 'productsState',
  default: [],
});

export const topProductsState = atom<TopProduct[]>({
  key: 'topProductsState',
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
