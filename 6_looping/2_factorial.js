//n * (n-1) * (n-2)...

function factorial (n) {
  let result = 1;
  for (i = n; i > 0; i-=1) {
    result  = result * i;
    console.log('i is: ', i, ' result is: ', result);
  }
  return result;
}


function callIt (input) {
  for (i = input; i > 0; i-=1)
    console.log(factorial(input));
}

callIt(5);