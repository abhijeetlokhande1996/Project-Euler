function numberOfDivisor(n) {
  if (n == 1) {
    return 1;
  }
  let ans = [];
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i == 0) {
      let ct = 0;
      while (n % i == 0) {
        ct++;
        n = n / i;
      }
      ans.push(ct + 1);
    }
  }
  if (n != 1) {
    ans.push(2);
  }
  return ans.reduce((x, y) => x * y);
}
function divisibleTriangleNumber(n) {
  let ans = 0;
  let i = 0;
  while (true) {
    let tn = (i * (i + 1)) / 2;
    ans = numberOfDivisor(tn);

    if (ans >= n) {
      ans = tn;
      break;
    }
    i++;
  }
  return ans;
}

res = divisibleTriangleNumber(500);
console.log(res);
