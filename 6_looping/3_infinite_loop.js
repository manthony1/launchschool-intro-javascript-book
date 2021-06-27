let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

//why the infinite loop?
// counter is set to 1, the condition asks if counter equals 1, which it does not