function getDivisorSum(n) {
  let ans = [1];
  for (let i = 2; i < Math.ceil(Math.sqrt(n)); i++) {
    if (n % i == 0) {
      const val = n / i;
      if (val > 1) {
        ans.push(val);
      }

      const x = n / val;
      if (x > 1) {
        ans.push(x);
      }
    }
  }

  if (ans.length == 0) {
    ans = [1, n];
  }
  const res = ans.reduce((x, y) => x + y);
  return res;
}
function sumAmicableNum(n) {
  let sum = 0;

  for (let i = 2; i < n + 1; i++) {
    const s1 = getDivisorSum(i);
    const s2 = getDivisorSum(s1);
    if (i == s2 && i !== s1) {
      sum += i;
    }
  }
  return sum;
}

sumAmicableNum(10000);
