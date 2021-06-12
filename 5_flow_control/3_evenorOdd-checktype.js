function evenorOdd (input) {
  if (!Number.isInteger(input)) {
    return console.log('error');
  }

  if (input % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenorOdd('5');