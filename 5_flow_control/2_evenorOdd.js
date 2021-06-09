function evenorOdd (input) {
  number = Number(input);
    if (number % 2 === 0) {
      return console.log('even');
    } else {
      return console.log('odd');
    }  
}

function askMe () {
  let rlSync = require('readline-sync');
  let input = rlSync.question("Enter a number, or type 'stop' to end\n");
  if (input === 'stop') {
    return console.log('Bye Felicia');
  } else {
      evenorOdd(input);
  }
}



askMe();
