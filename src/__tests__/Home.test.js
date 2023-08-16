import { render } from '@testing-library/react';
import Home from '../routes/Home';

test('renders text to homepage', () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});
