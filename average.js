'use strict';


function average (numbers){


  let avg = null;
  let sum = null;

  numbers.forEach( number=>{
    sum +=number;
  });
  return sum / numbers.length;

}

