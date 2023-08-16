import operate from '../logic/operate';

describe('operate', () => {
  it('should return the correct sum', () => {
    const result = operate(8, 5, '+');
    expect(result).toBe('13');
  });
});

it('should return the correct deduction result', () => {
  const result = operate(5, 3, '-');
  expect(result).toBe('2');
});

it('should return the correct product', () => {
  const result = operate(3, 4, 'x');
  expect(result).toBe('12');
});

it('should return the correct quotient', () => {
  const result = operate(24, 4, '÷');
  expect(result).toBe('6');
});

it('should handle division by zero', () => {
  const result = operate(24, 0, '÷');
  expect(result).toEqual("Can't divide by 0.");
});

it('should return the correct result for modulo', () => {
  const result = operate(12, 5, '%');
  expect(result).toBe('2');
});

it('should handle division by zero', () => {
  const result = operate(12, 0, '%');
  expect(result).toBe("Can't find modulo as can't divide by 0.");
});
