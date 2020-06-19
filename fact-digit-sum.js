function facto(n) {
  if (n == 0 || n == 1) {
    return BigInt(1);
  }
  return n * facto(n - BigInt(1));
}
function sumFactorialDigits(n) {
  // Good luck!
  let ans = facto(BigInt(n));
  let sum = BigInt(0);
  while (ans > 0) {
    const lastDigit = BigInt(ans) % BigInt(10);
    sum += lastDigit;
    ans = ans / BigInt(10);
  }

  return parseInt(sum);
}

sumFactorialDigits(100);
