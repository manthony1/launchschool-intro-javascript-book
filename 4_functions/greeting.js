/*let greetingMessage = "Good Morning!";
console.log(greetingMessage);
*/

/*
let greetingMessage = "Good Morning!";

function greetPeople() {
  console.log(greetingMessage);
}

greetPeople();
*/

/*
let greetingMessage = "Good Morning!";

function greetPeople() {
  console.log(greetingMessage);
}

function changeGreetingMessage(newMessage) {
  greetingMessage = newMessage;
}

changeGreetingMessage("Good Evening");
greetPeople(); // => 'Good Evening'

*/
let greetingMessage = "No way man!";
function greetPeople(greetingMessage = "Good Morning!") {
  //let greetingMessage = "Good Morning!";
  console.log(greetingMessage);
}

greetPeople();
greetPeople("Good Evening!");
greetPeople();
console.log(greetingMessage); // raises ReferenceError