const properWords = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];
var tenthWords = [
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

function numberLetterCounts(limit) {
  let sum = 0;
  while (limit > 0) {
    if (limit < 20) {
      sum += properWords[limit].length;
      //console.log(limit, properWords[limit], properWords[limit].length, sum);
    } else if (limit % 10 == 0 && limit < 100) {
      const q = limit / 10 - 2;
      sum += tenthWords[q].length;
      //console.log(limit, tenthWords[q], tenthWords[q].length);
    } else if (limit > 20 && limit < 100) {
      const q = parseInt(limit / 10) - 2;
      const r = limit % 10;
      const word = tenthWords[q] + properWords[r];
      sum += word.length;
      //console.log(limit, word, word.length, sum);
    } else if (limit % 100 == 0 && limit < 999) {
      const qm = parseInt(limit / 100);
      const word = properWords[qm] + "hundred";
      sum += word.length;
      //console.log(limit, word, word.length, sum);
    } else if (limit > 100 && limit <= 999) {
      const q = parseInt(limit / 100);
      const r = parseInt(limit % 100);

      const firstWord = properWords[q] + "hundred";
      let secondWord = null;
      let word = "";

      if (r == 0) {
        word = firstWord;
        sum += word.length;
      } else if (r == 1 || r < 20) {
        secondWord = properWords[r];
        word = firstWord + "and" + secondWord;
        sum += word.length;
      } else if (r % 10 == 0) {
        const q = parseInt(r / 10) - 2;
        word = firstWord + "and" + tenthWords[q];
        sum += word.length;
      } else if (r > 20) {
        const qm = parseInt(r / 10) - 2;
        const rm = parseInt(r % 10);
        const secondWord = tenthWords[qm] + properWords[rm];
        word = firstWord + "and" + secondWord;
        sum += word.length;
      }
      //console.log(limit, word, word.length, sum);
    } else if (limit > 999) {
      const q = parseInt(limit / 1000);
      const r = limit % 1000;
      let word = "";
      if (r == 0) {
        word += properWords[q] + "thousand";
        sum += word.length;
      }
    }

    limit--;
  }
  return sum;
}

const sum = numberLetterCounts(1000);
console.log("Sum -- ", sum);
