export default function loopingTriangle(size) {
  if (size === 0 || size === 1 || size === undefined) return '';
  if (size < 0) size = Math.abs(size);

  let triangle = '';

  for (let row = 1; row <= size; row++) {
    for (let column = 1; column <= row; column++) {
      column !== row ? (triangle += '#') : (triangle += '#\n');
    }
  }

  return triangle;
}
