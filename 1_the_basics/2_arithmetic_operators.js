//Use number % 10 to determine the rightmost digit. Then use that value and % again to get the tens digit. 
//Repeat until you have all 4 digits.

//Once you have the ones digit from the previous hint, subtract it from the current number, then divide the result by 10. 
//Repeat hint 1 to get the next digit.

let number = 4936;
let ones_digit = number % 10;
console.log('the ones place is:', ones_digit);

let tens = (number - ones_digit);
tens = tens / 10;
let tens_digit = tens % 10;
//console.log(tens);
console.log('the tens place is:', tens_digit);

let hundreds = (tens - tens_digit);
hundreds = hundreds / 10;
//console.log(hundreds);
let hundreds_digit = hundreds % 10;
console.log('the hundreds place is:', hundreds_digit);

let thousands = (hundreds - hundreds_digit);
thousands = thousands / 10;
//console.log(thousands);
let thousands_digit = thousands % 10;
console.log('the thousands place is:', thousands_digit);