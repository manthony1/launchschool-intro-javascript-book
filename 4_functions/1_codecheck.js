let bar = 1; // outer scoped to the invocation in line 8
function foo() {
  let bar = 2; // local var
  console.log('local var "bar" inside function, ', bar); // logs local var
}

foo(); // function invocation that logs inner scope function var
console.log('globar var "bar" inside function, ', bar); // logs outer scoped var