/*
CONTEST
  ID: math-and-algorithm
  TITLE: アルゴリズムと数学　演習問題集
  URL: https://atcoder.jp/contests/math-and-algorithm

TASK
  ID: math_and_algorithm_s
  LABEL: 019
  TITLE: Choose Cards 1
  URL: https://atcoder.jp/contests/math-and-algorithm/tasks/math_and_algorithm_s

To test, run the following command:
  bun run test -c "bun math-and-algorithm/019/math-and-algorithm-019.ts" -d math-and-algorithm/019/tests

To submit, run the following command:
  bun run submit math-and-algorithm/019/math-and-algorithm-019.ts -t math_and_algorithm_s -c math-and-algorithm -- -l 5058
*/

import { readFileSync } from "node:fs";

const inputs = readFileSync("/dev/stdin", "utf-8").trimEnd();
const as = inputs
  .split("\n")[1]
  .split(" ")
  .map((str) => Number.parseInt(str));
const [red, yellow, blue] = [
  as.filter((num) => num === 1).length,
  as.filter((num) => num === 2).length,
  as.filter((num) => num === 3).length,
];

function combinations(n: number, r: number): number {
  if (n < r) {
    return 0;
  }
  if (r === 0 || r === n) {
    return 1;
  }

  const _r = Math.min(r, n - r);
  let result = 1;
  for (let i = 1; i <= _r; i++) {
    result *= (n - _r + i) / i;
  }
  return Math.round(result);
}

console.log((combinations(red, 2) + combinations(yellow, 2) + combinations(blue, 2)).toString());
