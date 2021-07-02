//Without using a for, while, or do/while loop, 
//write some code that checks whether the number 
//3 appears inside these arrays:

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function checkThree (arr) {
  if (arr.includes(3)) {
    return true;
  }
  return false;
}

/*
function processArrays(arr1) {
  for (i = 0; i < arr1.length; i++) {
    console.log(checkThree(arr1));
  }
}
*/

console.log(checkThree(numbers1));
console.log(checkThree(numbers2));
console.log(checkThree(numbers3));




