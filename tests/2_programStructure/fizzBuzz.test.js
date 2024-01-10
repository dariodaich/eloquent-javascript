import { describe, expect, test } from '@jest/globals';
import { fizzBuzz } from '../../src/2_programStructure/fizzBuzz';

describe('FizzBuzz', () => {
  test('is divisible by both "5" and "3"', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  test('is divisible by "5"', () => {
    expect(fizzBuzz(10)).toBe('Fizz');
  });

  test('is divisible by "3"', () => {
    expect(fizzBuzz(18)).toBe('Buzz');
  });
});
