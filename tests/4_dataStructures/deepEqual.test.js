import { deepEqual } from '../../src/4_dataStructures/deepEqual';

describe('deepEqual', () => {
  describe("when comparing 'null' values", () => {
    describe("and both objects are 'null'", () => {
      it('returns "true"', () => {
        expect(deepEqual(null, null)).toBe(true);
      });
    });

    describe('and only one object is null', () => {
      it('returns "false"', () => {
        expect(deepEqual(null, 'not null')).toBe(false);
      });
    });
  });

  describe('when comparing primitives', () => {
    describe('and their value is identical', () => {
      it('returns "true', () => {
        expect(deepEqual(2, 2)).toBe(true);
        expect(deepEqual('same', 'same')).toBe(true);
      });
    });

    describe('and their value is not identical', () => {
      it('returns "true', () => {
        expect(deepEqual(2, 1)).toBe(false);
        expect(deepEqual('not the same', 'different')).toBe(false);
      });
    });
  });

  describe('when comparing objects', () => {
    describe("don't treat them as equal", () => {
      test('when they have different number of keys', () => {
        expect(deepEqual({ a: 1 }, { a: 1, b: 2 })).toBe(false);
      });

      test('when they have identical properties with different values', () => {
        expect(deepEqual({ a: 1, b: 2 }, { a: 1, b: 3 })).toBe(false);
      });

      test('when they have different properties with same values', () => {
        expect(deepEqual({ a: 1, c: 2 }, { a: 1, b: 2 })).toBe(false);
      });

      test('when they contain arrays with different values', () => {
        expect(deepEqual({ a: 1, b: [1, 2] }, { a: 1, b: [3, 4] })).toBe(false);
      });

      test('when they contain other object with different values', () => {
        expect(deepEqual({ a: 1, b: { c: 10 } }, { a: 1, b: { c: 20 } })).toBe(
          false
        );
      });
    });

    describe('treat them as equal', () => {
      test('when they are both empty', () => {
        expect(deepEqual({}, {})).toBe(true);
      });

      test('when they have identical properties with same values', () => {
        expect(deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
        expect(
          deepEqual({ a: 1, b: 'b', c: [] }, { a: 1, b: 'b', c: [] })
        ).toBe(true);
      });

      test('when they have nested objects with same values', () => {
        const firstObj = { a: { c: 10 }, b: { d: { e: 20 } }, c: [10, 20] };
        const secondObj = { a: { c: 10 }, b: { d: { e: 20 } }, c: [10, 20] };

        expect(deepEqual(firstObj, secondObj)).toBe(true);
      });
    });
  });
});
