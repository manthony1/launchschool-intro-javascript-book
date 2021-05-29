{
  let foo = 'variable declared inside block scope';
}
let foo2 = 'variable declared outside block scope';

//console.log(foo); // => returns not defined, cannot access block scope variable
console.log(foo2); // => returns foo2, variable created outside block