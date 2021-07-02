//Use map and filter to first determine the length
//of all the elements in an array of string values, 
//then discard the even values (keep the odd values).


function oddLengths(inputArray) {
  // create array of lengths of arr using map
  let getlen = inputArray.map(val => val.length);
  //return getlen;

  //keep values that are odd, discard even, use filter
  let keepeven = getlen.filter(number => number % 2 == 1);
  //let keepodd = getlen.filter(number => number % 2 == 0);
  return keepeven;


}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

