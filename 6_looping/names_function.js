function doUpperName (arr) {
  let index = 0;
  let upperNames = [];

  while (index < arr.length) { // while 0 is less than 5

    let upperCaseName = arr[index].toUpperCase(); // each loop assign array value to the var
    upperNames.push(upperCaseName); // push var to new array
    index += 1;  
  }
  return console.log(upperNames);
}

let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];

doUpperName(names);