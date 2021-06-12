let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];
let index = 0;

console.log('names.length is: ', names.length);
console.log('names[0]: ', names[0]);
console.log('names[1]: ', names[1]);
console.log('names[-1]: ', names[-1]);
console.log('----------\n\n');

while (index < names.length) { // while 0 is less than 5
  console.log('index is at ', index);

  let upperCaseName = names[index].toUpperCase(); // each loop assign array value to the var
  upperNames.push(upperCaseName); // push var to new array
  index += 1;

  console.log('index is now at ', index);// note that when last value pushed to array
  //index increments past names.length then exits loop
}

console.log(upperNames); // => ['CHRIS', 'KEVIN', 'NAVEED', 'PETE', 'VICTOR']
console.log(names); // original array unchanged