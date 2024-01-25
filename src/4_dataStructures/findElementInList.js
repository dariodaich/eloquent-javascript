export function findElementInList(searchedValue, list) {
  if (Object.entries(list).length === 0) return undefined;

  let nextList = list;

  while (true) {
    if (nextList.rest === null) return undefined;
    if (nextList.value === searchedValue) return searchedValue;

    nextList = nextList.rest;
  }
}
