function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);

/*The output is Not Empty since, while the array is empty -- it has no elements and the length property is 0 -- it isn't falsy. Thus, JavaScript executes the first branch of the if statement.
*/