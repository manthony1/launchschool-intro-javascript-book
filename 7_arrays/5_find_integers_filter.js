
function findIntegers(inputArray) {
  let isnumber = inputArray.filter(num => Number.isInteger(num));
  return isnumber;
}


let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]
