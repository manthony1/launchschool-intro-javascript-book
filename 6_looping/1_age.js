let rlSync = require('readline-sync');
let age = Number(rlSync.question("What's your age?\n"));

console.log(`You are ${age} years old.`);

for (let future = 10; future <=40; future+=10) {
  console.log(future, age);
  console.log(`In ${future} years, you will be ${age + future} years old.`);
}





