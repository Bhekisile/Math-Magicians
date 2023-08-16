import { fireEvent, render } from '@testing-library/react';
import Calculator from '../components/Calculator';
// import CalculatorParts from '../components/CalculatorParts';

describe('Calculator Component', () => {
  it('renders the calculator with correct heading', () => {
    const { container, getByText } = render(<Calculator />);
    fireEvent.click(getByText('1'));
    expect(container.firstChild).toMatchSnapshot();
  });
});
