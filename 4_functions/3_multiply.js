/*
Write a program that uses a multiply function to multiply 
two numbers and returns the result. 
Ask the user to enter the two numbers, 
then output the numbers and result as a simple equation.
*/

let multiply = (a, b) => a * b;

/*
function multiply(a, b) {
  return a * b;
}
*/

let getNumber = (input) => {
  let readlineSync = require('readline-sync');
  let the_number = readlineSync.question(input);
  return parseFloat(the_number);
};

let number1 = getNumber("Enter the first number: ");
let number2 = getNumber("Enter the second number: ");
console.log(number1, "* ", number2, "= ", multiply(number1, number2));