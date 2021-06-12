/*let answer;
do {
  answer = prompt("Do you want to do that again?");
} while (answer === 'y');

*/

names = ['Bob', 'Dennis', 'Kevin', 'Linda']
//upperNames = [];

index = 0;
do {
let upname = names[index];
upname = upname.toUpperCase()
console.log(upname);
index++;
} while (index < names.length);

console.log(names);