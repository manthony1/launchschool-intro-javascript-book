// replace the value 6 in the following array with 606

let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];

console.log(arr);
arr[1][3] = 606;
console.log(arr);