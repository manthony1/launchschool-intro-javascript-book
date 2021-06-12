/*Write a function that takes a string as an argument and returns an all-caps version of the string when the string is longer than 10 characters. Otherwise, it should return the original string.*/

function capsCheck (string) {
 
  //return string.length;

  if (string.length > 10) {
    return string.toUpperCase();
  } else if (string.length < 10) {
    return string;
  } else if (string.length == 10) {
    return 'string is exactly 10 characters';
  } else {
    return;
  }

}
let mycheck = capsCheck('hello world');
let mycheck2 = capsCheck('goodbye');

console.log(mycheck);
console.log(mycheck2);
//console.log(typeof(mycheck));