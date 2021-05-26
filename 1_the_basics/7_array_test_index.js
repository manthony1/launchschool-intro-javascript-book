/*
Will an error occur if you try to access an array element with an index
that is greater than or equal to the length of the array? For example:
let foo = ['a', 'b', 'c'];
console.log(foo.length);  // => 3
console.log(foo[3]);      // will this result in an error?
*/

let foo = ['a', 'b', 'c'];
console.log(foo.length);  // => 3
console.log(foo[3]);      // will this result in an error?

// Yep! index is zero based; so in this example the max index  is 2