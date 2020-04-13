/* eslint-env jest */
import adder from '../example';

describe('Adder', () => {
  test('adds two numbers', () => {
    expect(adder(5, 3)).toEqual(8);
  });
});
