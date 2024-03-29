import {
  arrayToList,
  listToArray,
  recursiveArrayToList,
} from '../../src/4_dataStructures/list';

describe('arrayToList and recursiveArrayToList', () => {
  describe('when not given an array', () => {
    describe('when given a scalar', () => {
      it('returns an empty object', () => {
        expect(arrayToList(1)).toEqual({});
        expect(recursiveArrayToList(1)).toEqual({});
      });
    });
  });

  describe('when given array of elements', () => {
    it('returns an object', () => {
      expect(arrayToList([1, 2, 3])).toBeInstanceOf(Object);
      expect(recursiveArrayToList([1, 2, 3])).toBeInstanceOf(Object);
    });

    it('returns correctly linked list', () => {
      const linkedList = {
        value: 1,
        rest: {
          value: 2,
          rest: {
            value: 3,
            rest: null,
          },
        },
      };

      expect(arrayToList([1, 2, 3])).toEqual(linkedList);
      expect(recursiveArrayToList([1, 2, 3])).toEqual(linkedList);
    });

    it('works with objects as values', () => {
      const linkedList = {
        value: { a: 1 },
        rest: {
          value: [2, 3],
          rest: {
            value: { c: 4 },
            rest: null,
          },
        },
      };

      expect(arrayToList([{ a: 1 }, [2, 3], { c: 4 }])).toEqual(linkedList);
      expect(recursiveArrayToList([{ a: 1 }, [2, 3], { c: 4 }])).toEqual(
        linkedList
      );
    });

    it("sets 'null' as the value of the last item ", () => {
      const linkedList = {
        value: 1,
        rest: {
          value: 2,
          rest: null,
        },
      };

      expect(arrayToList([1, 2]).rest.rest).toBe(null);
      expect(recursiveArrayToList([1, 2]).rest.rest).toBe(null);
    });
  });
});

describe('listToArray', () => {
  describe('when argument is not an object', () => {
    test("that scalar returns 'false'", () => {
      expect(listToArray(1)).toBe(false);
    });

    test("that array returns 'false'", () => {
      expect(listToArray([1, 2, 3])).toBe(false);
    });

    test("that no argument returns 'false'", () => {
      expect(listToArray()).toBe(false);
    });
  });

  describe('when argument is a linked list', () => {
    test('that it returns an array of values in a list', () => {
      expect(listToArray({ value: 1, rest: { value: 2, rest: null } })).toEqual(
        [1, 2]
      );
    });
  });
});
