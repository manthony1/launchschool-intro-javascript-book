//n * (n-1) * (n-2)...

function factorial (n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

number = 8;
console.log(factorial(number));