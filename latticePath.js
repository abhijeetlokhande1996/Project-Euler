function isSafe(path, rowLen, colLen) {
  let colIdx = 0;
  let rowIdx = 0;
  for (const dirct of path) {
    if (dirct == "R") {
      colIdx++;
    } else if (dirct == "D") {
      rowIdx++;
    }
  }

  if (rowIdx >= 0 && rowIdx < rowLen && colIdx >= 0 && colIdx < colLen) {
    return true;
  }
  return false;
}
function isEnd(path, rowLen, colLen) {
  let rowIdx = 0;
  let colIdx = 0;
  for (const dirct of path) {
    if (dirct == "R") {
      rowIdx++;
    } else if (dirct == "D") {
      colIdx++;
    }
  }
  if (rowIdx == rowLen - 1 && colIdx == colLen - 1) {
    return true;
  }
  return false;
}
function latticePaths(gridSize) {
  const rowLen = gridSize;
  const colLen = gridSize;
  const grid = new Array(rowLen).fill(new Array(colLen).fill(1));
  directions = ["R", "D"];
  queue = [""];
  validPath = "";
  let ct = 0;
  while (queue.length > 0) {
    validPath = queue.shift();
    let f1 = isEnd(validPath, rowLen + 1, colLen + 1);
    if (f1) {
      //console.log("Valid Path ", validPath);
      ct++;
      continue;
    }
    for (const dirct of directions) {
      let f2 = isSafe(validPath + dirct, rowLen + 1, colLen + 1);
      if (f2) {
        queue.push(validPath + dirct);
      }
    }
  }
  return ct;
}

const ans = latticePaths(9);
console.log(ans);
