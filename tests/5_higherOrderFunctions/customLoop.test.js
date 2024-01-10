import { fakeLoop } from '../../src/5_higherOrderFunctions/customLoop';

describe('fakeLoop', () => {
  test('returns correct value with given functions', () => {
    const counter = 0;
    const testFun = (n) => n < 3;
    const updateFun = (n) => n + 1;
    const bodyFun = (n) => `Wonderful number ${n}`;

    expect(fakeLoop(counter, testFun, updateFun, bodyFun)).toBe(3);
  });
});
