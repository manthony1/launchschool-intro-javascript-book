//Write a function that logs whether a number is between 0 and 50 (inclusive), 
//between 51 and 100 (inclusive), greater than 100, or less than 0.

function numberRange (input) {
  if (input >= 0 && input <= 50) {
    return console.log(input, 'is betwen 0 and 50');
  } else if (input > 50 && input <= 100) {
    return console.log(input, 'is between 51 and 100');
  } else if (input > 100) {
    return console.log(input, 'is greater than 100');    
  } else if (input < 0) {
    return console.log(input, 'is less than 0')
  } else if (typeof(input !== Number(input))) {
    return console.log('Not a number, incorrect type')
  } else {
    return console.log('other error');
  }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);
numberRange('hello');
/*
25 is between 0 and 50
75 is between 51 and 100
125 is greater than 100
-25 is less than 0
*/