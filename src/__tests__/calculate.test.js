import * as Calculate from '../logic/calculate';

test('checking behavior of isNumber related to regex matching.', () => {
  const output = Calculate.isNumber('7');
  expect(output).toBe(true);
});
