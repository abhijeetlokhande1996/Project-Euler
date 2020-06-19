function maximumPathSumI(triangle) {
  let tc = JSON.parse(JSON.stringify(triangle));
  const rowLen = tc.length;

  const secondLastRowIndex = rowLen - 2;
  for (let i = secondLastRowIndex; i > -1; i--) {
    for (let j = 0; j < tc[i].length; j++) {
      let firstElToCompare = tc[i + 1][j] ? tc[i + 1][j] : 0;
      let secondElToCompare = tc[i + 1][j + 1] ? tc[i + 1][j + 1] : 0;
      let maxVal = 0;
      if (firstElToCompare > secondElToCompare) {
        maxVal = firstElToCompare;
      } else {
        maxVal = secondElToCompare;
      }
      tc[i][j] = tc[i][j] + maxVal;
    }
  }

  return tc[0][0];
}

const testTriangle = [
  [3, 0, 0, 0],
  [7, 4, 0, 0],
  [2, 4, 6, 0],
  [8, 5, 9, 3],
];

const ans = maximumPathSumI(testTriangle);
console.log(ans);
