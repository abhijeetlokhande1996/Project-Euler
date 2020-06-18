function powerDigitSum(exponent) {
  // Good luck!
  const n = BigInt(Math.pow(2, exponent)).toString();
  let sum = 0;
  for (const i of n) {
    sum += parseInt(i);
  }
  return sum;
}

powerDigitSum(1000);
