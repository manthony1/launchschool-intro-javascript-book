//Use reduce to compute the sum of the squares of all of the numbers in an array

function sumOfSquares (arr) {
  let sumsquares = arr.reduce((accumulator, element) => accumulator + element*element, 0)
  return sumsquares;
}


let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83