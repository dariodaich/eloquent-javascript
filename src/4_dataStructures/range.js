export function range(start, end, step = 1) {
  // Validate input
  if (step === 0) return "Step can't be zero";
  if (start === end) return "Start and end can't be equal";

  const isIncreasing = start < end;
  const isDecreasing = start > end;
  const isSteppingUpward = step > 0;
  const isSteppingDownward = step < 0;

  if (isIncreasing && isSteppingDownward) return 'Invalid input';
  if (isDecreasing && isSteppingUpward) return 'Invalid input';

  // Implementation
  const array = [];

  if (isIncreasing) {
    for (let i = start; i <= end; i += step) {
      array.push(i);
    }
  } else if (isDecreasing) {
    for (let i = start; i >= end; i += step) {
      array.push(i);
    }
  }

  return array;
}
