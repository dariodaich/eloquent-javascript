export function reverseArrayInPlace(array) {
  if (array.length === 0) return [];

  const iterationCount = array.length / 2;

  let leftIndex = 0;
  let rightIndex = array.length - 1;

  for (let i = 1; i <= iterationCount; i++) {
    const rightHandElement = array[rightIndex];
    const leftHandElement = array[leftIndex];

    array[leftIndex] = rightHandElement;
    array[rightIndex] = leftHandElement;

    leftIndex += 1;
    rightIndex -= 1;
  }

  return array;
}
