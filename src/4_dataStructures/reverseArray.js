export function reverseArray(array) {
  if (array.length === 0) return [];

  let newArray = [];
  let index = array.length - 1;

  for (index; index >= 0; index--) {
    const itemToCopy = array[index];

    newArray.push(itemToCopy);
  }

  return newArray;
}
