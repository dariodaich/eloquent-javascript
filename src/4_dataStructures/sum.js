export function sum(array) {
  // Implementation#1 - using 'for'
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;

  // Implementation#2 - using #reduce
  // return array.reduce((n, acc) => acc + n, 0);
}
