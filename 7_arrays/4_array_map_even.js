let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

newArray = [];

for (let i=0; i < myArray.length; i++) {
  if (myArray[i] % 2 === 0) {
    //console.log('even');
    //console.log(newArray.concat('even'));
    newArray.push('even');
  } else {
    //console.log('odd');
    //console.log(newArray.concat('odd'));
    newArray.push('even');
  }
}
console.log(newArray);