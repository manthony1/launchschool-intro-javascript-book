let array = ['array1: ', 1, 2, 3];
array.forEach(function(num) {
  console.log(num); // on first iteration  => 1
                    // on second iteration => 2
                    // on third iteration  => 3
}); // returns `undefined`


//arrow function version
let array2 = ['array2: ', 1, 2, 3];
array2.forEach(num => console.log(num));