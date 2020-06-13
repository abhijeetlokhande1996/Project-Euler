function largeSum(arr) {
  sum = 0;
  for (const item of arr) {
    sum += parseInt(item);
  }
  return BigInt(sum).toString().slice(0, 10);
}

// Only change code above this line

const testNums = [
  "37107287533902102798797998220837590246510135740250",
  "46376937677490009712648124896970078050417018260538",
];

largeSum(testNums);
