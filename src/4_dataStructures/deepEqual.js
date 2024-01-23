//
// It's not easy for everyone
// https://stackoverflow.com/questions/59218035/eloquent-javascript-exercise-deep-comparison
//
export function deepEqual(o1, o2) {
  // Handle null use cases
  if (o1 === null && o2 === null) return true;
  if (o1 === null || o2 === null) return false;

  // Handle non-object use cases
  const o1Type = typeof o1;
  const o2Type = typeof o2;
  const areNotObjects = o1Type !== 'object' && o1Type !== 'object';
  const areSameType = o1Type === o2Type;

  if (areNotObjects && areSameType) {
    return o1 === o2;
  } else if (!areSameType) {
    return false;
  }

  // Handle objects
  const o1Keys = Object.keys(o1);
  const o2Keys = Object.keys(o2);

  if (o1Keys.length !== o2Keys.length) return false;

  for (const prop of Object.keys(o1)) {
    if (!o2[prop]) return false;
    if (!deepEqual(o1[prop], o2[prop])) return false;
  }

  return true;
}
