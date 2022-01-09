import { renderHook } from '@testing-library/react-hooks';

import { act } from 'react-dom/test-utils';

import { RecoilRoot } from 'recoil';

import { useProducts, useTopProducts } from './hooks';

import { fetchProducts, fetchTopProducts } from './services/api';

jest.mock('./services/api');

const mockedFetchProducts = fetchProducts as jest.Mock;
const mockedFetchTopProducts = fetchTopProducts as jest.Mock;

describe('useProducts', () => {
  const products = [
    {
      id: 1,
      name: 'Macbook Pro',
      price: 10_000,
      deposit: 150_000,
      thumbnailImage: 'http://example.com',
    },
  ];

  const wrapper = RecoilRoot;
  const render = () => renderHook(() => useProducts(), { wrapper });

  beforeEach(() => {
    mockedFetchProducts.mockResolvedValue(products);
  });

  it('should return products', () => {
    const { result } = render();

    expect(result.current.products).toHaveLength(0);
  });

  it('loads products', async () => {
    const { result } = render();

    await act(async () => {
      await result.current.loadProducts();
    });

    expect(result.current.products).toEqual(products);
  });
});

describe('should return top products', () => {
  const topProducts = [
    { id: 6, name: 'Macbook Pro', thumbnailImage: '' },
  ];

  const wrapper = RecoilRoot;
  const render = () => renderHook(() => useTopProducts(), { wrapper });

  beforeEach(() => {
    mockedFetchTopProducts.mockResolvedValue(topProducts);
  });

  it('should return products', () => {
    const { result } = render();

    expect(result.current.topProducts).toHaveLength(0);
  });

  it('loads top products', async () => {
    const { result } = render();

    await act(async () => {
      await result.current.loadTopProducts();
    });

    expect(result.current.topProducts).toEqual(topProducts);
  });
});
