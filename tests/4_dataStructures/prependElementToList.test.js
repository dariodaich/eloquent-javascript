import { prependElementToList } from '../../src/4_dataStructures/prependElementToList';

describe('prependElementToList', () => {
  const basicList = { value: 2, rest: { value: 3, rest: null } };

  test('add element on the first place in the list', () => {
    expect(prependElementToList({ value: 1 }, basicList)).toEqual({
      value: 1,
      rest: basicList,
    });
  });

  test('value of the first element becomes the value of the first item in the list', () => {
    const newList = prependElementToList({ value: 1 }, basicList);

    expect(newList.value).toEqual(1);
  });
});
