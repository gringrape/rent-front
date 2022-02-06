import { fireEvent, render } from '@testing-library/react';

import ReservePage from './ReservePage';

const PRICE = 500;
const mockProduct = {
  name: '원형 대형 러그',
  price: PRICE,
};

const mockNavigate = jest.fn();

jest.mock('../hooks', () => ({
  useProduct: () => ({
    product: mockProduct,
  }),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('ReservePage', () => {
  beforeAll(() => {
    jest.useFakeTimers().setSystemTime(new Date('2022-02-01').getTime());
  });

  it('renders product name', () => {
    const { container } = render(<ReservePage />);

    expect(container).toHaveTextContent(mockProduct.name);
  });

  it('renders product owner', () => {
    const { container } = render(<ReservePage />);

    expect(container).toHaveTextContent('사용자 101');
  });

  describe('navigation', () => {
    it('renders go back button', () => {
      const { getByRole } = render(<ReservePage />);

      fireEvent.click(getByRole('button', { name: 'goback' }));

      expect(mockNavigate).toBeCalledWith(-1);
    });

    it('renders home button', () => {
      const { getByRole } = render(<ReservePage />);

      fireEvent.click(getByRole('button', { name: 'home' }));

      expect(mockNavigate).toBeCalledWith('/');
    });
  });

  describe('calendar', () => {
    it('renders date range and duration in days and price', () => {
      const { container, getByText } = render(<ReservePage />);

      fireEvent.click(getByText('1'));
      fireEvent.click(getByText('27'));

      expect(container).toHaveTextContent('2022년 02월 01일');
      expect(container).toHaveTextContent('2022년 02월 27일');

      expect(container).toHaveTextContent('26일');

      expect(container).toHaveTextContent(`${26 * PRICE}원`);
    });
  });

  it('renders reservation button', () => {
    const { getByText } = render(<ReservePage />);

    fireEvent.click(getByText('예약하기'));
  });
});
