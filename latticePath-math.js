function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
function latticePaths(gridSize) {
  const numeratore = factorial(gridSize * 2);
  const denominator = factorial(gridSize) * factorial(gridSize);

  return parseInt(numeratore / denominator);
}
const ans = latticePaths(20);
console.log(ans);
