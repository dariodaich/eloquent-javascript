import { findElementInList } from '../../src/4_dataStructures/findElementInList';

describe('findElementInList', () => {
  const testList = {
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null,
      },
    },
  };

  describe('when list is valid', () => {
    describe('when value present in the list', () => {
      test('returns the value', () => {
        expect(findElementInList(2, testList)).toEqual(2);
      });
    });

    describe('when value not present in the list', () => {
      test('returns "undefined"', () => {
        expect(findElementInList(4, testList)).toBe(undefined);
      });
    });
  });

  describe('when list is not valid', () => {
    test('return "undefined"', () => {
      expect(findElementInList(1, {})).toBe(undefined);
    });
  });
});
