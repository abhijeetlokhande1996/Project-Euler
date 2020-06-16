let memo = {};
function longestCollatzSequence(n) {
  let memo = {};
  memo[2] = 1;
  let max = -1;
  let ans = 0;
  for (let i = parseInt(n / 2); i < n; i++) {
    let x = i;
    let ct = 0;
    if (memo[x]) {
      ct += memo[x];
    } else {
      while (x > 1) {
        if (memo[x]) {
          ct += memo[x];
          break;
        }
        if (x % 2 == 0) {
          x = parseInt(x / 2);
        } else {
          x = parseInt(3 * x + 1);
        }
        ct++;
      }

      memo[i] = ct;
    }

    if (max < ct) {
      max = ct;
      ans = i;
    }
  } //for
  return ans;
}
const ans = longestCollatzSequence(54512);
console.log("Ans ", ans);
