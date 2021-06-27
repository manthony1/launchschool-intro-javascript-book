/*function doubler(number) {
  console.log(number * 2);
}

let mynum = 2;

for (i = 0; i < 8; i++) {
  doubler(mynum);
  mynum*=4;
}
*/

function doubler(number) {
  console.log(number);

  if (number <= 50) {
    doubler(number * 2);
  }
}

doubler(5); // => 5
            // => 10
            // => 20
            // => 40
            // => 80




