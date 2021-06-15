function doubler(number) {
  console.log(number);

  if (number <= 100) {
    doubler(number * 2);
  }
}

doubler(5); // => 5
            // => 10
            // => 20
            // => 40
            // => 80