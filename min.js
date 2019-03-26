'use strict';

function minFinder(numbers){
  const len = numbers.length;

  let solution = numbers[0];
  let x = 1; 
  while (x < len){
    if ( numbers[x] < solution){ 
      solution = numbers[x];
    }


    x++;
  }
  console.log(solution);
}

minFinder([5, 2, 7, 10]);