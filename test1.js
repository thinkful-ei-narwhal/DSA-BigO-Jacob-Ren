'use strict';

function countingSheep(sheep) {
  for (let i = 0; i <= sheep; i++) {
    if (i === sheep) {
      console.log(`All sheep jumped over the fence`);
    } else {
      console.log(`${i}: Another Sheep jumped over the fence`);
    }
  }
}

countingSheep(10);

function powerCalculator(base, expo) {
  let power = base;
  if (expo < 0) {
    for (let i = 0; i <= expo; i++) {
      power *= base;
    }
    return power;
  }
  return power;
}

function stringReverser(string) {
  let newString = '';
  let char = '';
  for(let i = string.length - 1; i >= 0 ; i--) {
    char = string[i];
    newString += char;
  }
  return newString;
}


