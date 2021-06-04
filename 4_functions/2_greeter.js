/*
Add a function to this program that solicits the user's first and last names in 
separate invocations; the function should return the appropriate name as a string. 
Use the return values to greet the user with their full name.
*/

/*
// browser version
function getName (text) {
  let input = prompt(text);
  return input;
}
*/
//console version
function getName(prompt) {
  let readlineSync = require('readline-sync');
  let name = readlineSync.question(prompt);
  return name;
}

const first_name = getName("What's your first name?");
const last_name = getName("What's your last name?");

console.log('Hello, ', first_name, last_name);
