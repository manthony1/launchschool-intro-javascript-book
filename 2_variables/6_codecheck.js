const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);
//const variable assignment does not change just because it's a constant.
//block scope not accessible outside the block; logs higher scoped constant it has access to