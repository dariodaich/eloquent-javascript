export function prependElementToList(elem, list) {
  elem.rest = list;

  return elem;
}
