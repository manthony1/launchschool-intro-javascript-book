let rlSync = require('readline-sync');
let first_name = rlSync.question("What's your first name?\n");
let last_name = rlSync.question("What's your last name?\n");

console.log(`Hello, ${first_name} ${last_name}!`);