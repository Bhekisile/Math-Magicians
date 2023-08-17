import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import DisplayQuote from '../components/DisplayQuote';
import '@testing-library/jest-dom';

describe('display quote', () => {
  it('render quote', () => {
    const { asFragment } = render(<DisplayQuote />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('displays loading state', () => {
    const { getByText } = render(<DisplayQuote />);
    expect(getByText('Loading...')).toBeDefined();
  });

  test('displays error state', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      ok: false,
      json: () => Promise.resolve({}),
    }));

    const { findByText } = render(<DisplayQuote />);
    const errorElement = await findByText(/Error:/i);
    expect(errorElement).toBeDefined();

    global.fetch.mockRestore();
  });

  test('displays fetched quote', async () => {
    const quote = 'Test quote';

    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve([{ quote, author: 'Test author' }]),
    }));

    const { findByText } = await act(async () => render(<DisplayQuote />));

    const quoteElement = await findByText(new RegExp(quote));
    expect(quoteElement).toBeInTheDocument();

    global.fetch.mockRestore();
  });
});
