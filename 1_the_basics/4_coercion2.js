//Explain why this code logs '510' instead of 15.
//console.log('5' + 10);

//console.log('5' + 10);
let coercionExample = '5' + 10;
console.log(coercionExample);
console.log(typeof(coercionExample));

//Reason - concatenation using (+) expressions with a string and anything else coerce the other operand to a string.
//In this chase it changes the number 10 to a string and concatenates it to the string '5'