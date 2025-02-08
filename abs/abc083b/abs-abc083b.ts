/*
CONTEST
  ID: abs
  TITLE: AtCoder Beginners Selection
  URL: https://atcoder.jp/contests/abs

TASK
  ID: abc083_b
  LABEL: ABC083B
  TITLE: Some Sums
  URL: https://atcoder.jp/contests/abs/tasks/abc083_b

To test, run the following command:
  bun run test -c "bun abs/abc083b/abs-abc083b.ts" -d abs/abc083b/tests

To submit, run the following command:
  bun run submit abs/abc083b/abs-abc083b.ts -t abc083_b -c abs -- -l 5058
*/

import { readFileSync } from "node:fs";

const inputs = readFileSync("/dev/stdin", "utf-8").trimEnd();
const [n, a, b] = inputs.split(" ").map((str) => Number.parseInt(str));

function sumOfDigits(num: number): number {
  let sum = 0;
  let currentIndex = 0;
  while (currentIndex < num.toString().length) {
    sum += Number.parseInt(num.toString()[currentIndex]);
    currentIndex += 1;
  }
  return sum;
}

let sum = 0;
for (let i = 0; i <= n; i++) {
  const _sumOfDigits = sumOfDigits(i);
  sum += _sumOfDigits >= a && _sumOfDigits <= b ? i : 0;
}

console.log(sum.toString());
