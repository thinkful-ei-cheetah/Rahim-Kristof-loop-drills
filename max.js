("use strict");

function max(numbers) {
  if (numbers.length === 0) {
    return null;
  }
  let solution = numbers[0];
  let x = 1;
  let len = numbers.length;
  while (x < len) {
    if (numbers[x] > solution) {
      solution = numbers[x];
    }
    x++;
  }
  return solution;
}

console.log(max([1, 2, 3]));
