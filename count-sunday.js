function countingSundays(firstYear, lastYear) {
  let n = 0;
  for (let y = firstYear; y < lastYear + 1; y++) {
    for (let m = 0; m < 12; m++) {
      if (new Date(y, m).getDay() == 0) {
        n++;
      }
    }
  }
  return n;
}

ans = countingSundays(1901, 2000);
console.log(ans);
