import { range } from '../../src/4_dataStructures/range';

describe('range', () => {
  describe('is invalid when', () => {
    it('has a step of "0"', () => {
      expect(range(1, 3, 0)).toEqual("Step can't be zero");
    });

    it('"start" is lesser than "end" and is subtracting', () => {
      expect(range(1, 3, -1)).toEqual('Invalid input');
    });

    it('"start" is greater than "end" and is adding', () => {
      expect(range(3, 1, 1)).toEqual('Invalid input');
    });

    it('"start" and "end" are equal', () => {
      expect(range(1, 1)).toEqual("Start and end can't be equal");
    });
  });

  describe('w/o step', () => {
    it('constructs an array from first to second argument', () => {
      expect(range(1, 5)).toEqual([1, 2, 3, 4, 5]);
    });

    it('createa array of correct length', () => {
      expect(range(1, 5)).toHaveLength(5);
    });

    it('does not include number before start and after last number', () => {
      expect(range(1, 5)).not.toContain(0);
      expect(range(1, 5)).not.toContain(6);
    });

    it('works if both "start" and "end" are negative', () => {
      expect(range(-5, -1)).toEqual([-5, -4, -3, -2, -1]);
    });

    it('works if "start" is negative and "end" is positive', () => {
      expect(range(-1, 1)).toEqual([-1, 0, 1]);
    });
  });

  describe('with step', () => {
    it('constructs an array with positive numbers', () => {
      expect(range(1, 7, 2)).toEqual([1, 3, 5, 7]);
      expect(range(1, 7, 4)).toEqual([1, 5]);
    });

    it('constructs an array with negative numbers', () => {
      expect(range(-1, -7, -2)).toEqual([-1, -3, -5, -7]);
      expect(range(-1, -7, -4)).toEqual([-1, -5]);
    });
  });
});
