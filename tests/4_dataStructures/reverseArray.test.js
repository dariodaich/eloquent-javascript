import { reverseArray } from '../../src/4_dataStructures/reverseArray';
import { reverseArrayInPlace } from '../../src/4_dataStructures/reverseArrayInPlace';

describe('reverseArray', () => {
  describe('when array is empty', () => {
    it('returns an empty array', () => {
      expect(reverseArray([])).toEqual([]);
      expect(reverseArrayInPlace([])).toEqual([]);
    });
  });

  describe('when array contains one element', () => {
    it('returns the array with that element', () => {
      expect(reverseArray([1])).toEqual([1]);
      expect(reverseArrayInPlace([1])).toEqual([1]);
    });
  });

  describe('when array contains two elements', () => {
    it('switches elements in the array', () => {
      expect(reverseArray([1, 2])).toEqual([2, 1]);
      expect(reverseArrayInPlace([1, 2])).toEqual([2, 1]);
    });
  });

  describe('when it receives an array with odd number of elements', () => {
    it('switches elements in the array', () => {
      expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
      expect(reverseArrayInPlace([1, 2, 3])).toEqual([3, 2, 1]);
    });

    it('leaves the element in the middle of the array in the same position', () => {
      expect(reverseArray([1, 2, 3])[1]).toEqual(2);
      expect(reverseArrayInPlace([1, 2, 3][1])).toEqual(2);
    });
  });

  describe('when it receives an array with even number of elements', () => {
    it('switches elements in the array', () => {
      expect(reverseArray([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
      expect(reverseArrayInPlace([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
    });
  });
});
