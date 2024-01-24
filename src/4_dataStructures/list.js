function arrayToList(array) {
  if (!Array.isArray(array)) return {};

  const objectsArray = array.map((e) => {
    return { value: e };
  });

  for (let i = 0; i < array.length; i++) {
    const lastObject = i === array.length - 1;

    if (!lastObject) {
      const nextObject = objectsArray[i + 1];
      objectsArray[i].rest = nextObject;
    } else {
      objectsArray[i].rest = null;
    }
  }

  // Zasto vracamo prvi objekt iz array-a?
  // Sto bi dobili ako bi vratili drugi object 'objectsArray[1]'?
  return objectsArray[0];
}

function recursiveArrayToList(array) {
  if (!Array.isArray(array)) return {};

  const firstObject = { value: array[0] };
  const restOfArray = array.slice(1);

  function buildList(lastObject, reducedArray) {
    const nextObject = { value: reducedArray[0] };
    const isLastElement = reducedArray.length === 0;

    if (!isLastElement) {
      lastObject.rest = nextObject;
      const restOfReducedArray = reducedArray.slice(1);

      return buildList(nextObject, restOfReducedArray);
    } else {
      lastObject.rest = null;

      return firstObject;
    }
  }
  return buildList(firstObject, restOfArray);
}

export { arrayToList, recursiveArrayToList };
