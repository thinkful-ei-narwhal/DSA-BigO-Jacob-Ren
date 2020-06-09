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

function triangleCounter(n) {
  //start at top add 1 then add 2 add 3
  //n is the amount of layers in the triangle
  //so at n = 3 total = 3 + 2 + 1 = 6
  let total = 0;
  for(let i = 0; i <= n; i++) {
    total += n - i;
    //n-0 = 3-0 = 3 total = 3
    //n-1 = 3-1 = 2 total = 5
    //n-2 = 3-2 = 1 total = 6
  }
  return total;
}


