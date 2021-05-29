let foo = 'bar';
{
  let foo2 = 'qux';
}

console.log(foo);
//console.log(foo2);

//global value is returned; block scoped variable of the same name is not accessible