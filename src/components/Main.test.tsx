import { render } from '@testing-library/react';

import { RecoilRoot } from 'recoil';

import { productsState } from '../state';

import Main from './Main';

describe('Main', () => {
  const products = [
    {
      id: 1,
      name: 'Macbook Pro',
      price: 10_000,
      deposit: 150_000,
      thumbnailImage: 'http://example.com',
    },
  ];

  // TODO: Define type of any
  const initializeState = ({ set }: { set: any}) => {
    set(productsState, products);
  };

  it('renders a list of products', () => {
    const { container } = render(
      <RecoilRoot initializeState={initializeState}>
        <Main />
      </RecoilRoot>,
    );

    expect(container).toHaveTextContent('Macbook Pro');
    expect(container).toHaveTextContent('일당');
    expect(container).toHaveTextContent('10000');
    expect(container).toHaveTextContent('보증금');
    expect(container).toHaveTextContent('150000');
  });
});
