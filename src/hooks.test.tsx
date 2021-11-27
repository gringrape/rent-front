import { renderHook } from '@testing-library/react-hooks';

import { act } from 'react-dom/test-utils';

import { RecoilRoot } from 'recoil';

import { useProducts } from './hooks';

import { fetchProducts } from './services/api';

jest.mock('./services/api');

const mockedFetchProducts = fetchProducts as jest.Mock;

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
