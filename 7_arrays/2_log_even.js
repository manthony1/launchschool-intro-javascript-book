let myArray = [1, 3, 6, 11, 4, 2,
  4, 9, 17, 16, 0];

/*  
for (i = 0; i < myArray.length; i++) {
  let value = myArray[i];
  if (value %2 === 0) {
    console.log('even values, original array: ', value);
  }
}

let duplicated = myArray.slice();
console.log('duplicated and sorted: ', duplicated.sort());
console.log('original array: ', myArray);

*/

function dupeandSort(array) {
 //log  original array
 //console.log('original array: ', array);

 //duplicate, sort and log new array if even
 let newArray = array.slice();

 //sort array, with no sort values it dupes the array
 //newArray.sort();
  for (i = 0; i < newArray.length; i++) {
    let myval = newArray[i];
      if (myval % 2 === 0) {
        console.log(myval);
        //return myval;
      }
  }
}

let evenNums = dupeandSort(myArray);
console.log(evenNums);