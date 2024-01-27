import { sum } from '../../src/4_dataStructures/sum';

describe('sums', () => {
  describe('when all numbers positive', () => {
    it('adds correctly', () => {
      expect(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual(55);
    });
  });

  describe('when all numbers negative', () => {
    it('adds correctly', () => {
      expect(sum([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10])).toEqual(-55);
    });
  });

  describe('when numbers are both positive and negative', () => {
    it('adds correctly', () => {
      expect(sum([-1, 2, 0, 2])).toEqual(3);
    });
  });
});
