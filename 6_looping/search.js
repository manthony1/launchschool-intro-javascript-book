let array = [5, 1, 3, 9, 2, 6, 4, 7];
let indexOfFive = -1;

for (let i = 0; i < array.length; i += 1) {
  console.log('i: ',i);
  if (array[i] === 5) {
    indexOfFive = i;
    break;
  }
  console.log('i: ',i);
}

console.log(indexOfFive);