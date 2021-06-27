for (let i = 0; i < 5;) {
  console.log(i += 1);
}

/*
The code doesn't produce an error since all 3 components of the for loop are optional. 
In this code, we omit the "next value" component;
however, this isn't a problem here since we increment the loop variable on line 2.
*/