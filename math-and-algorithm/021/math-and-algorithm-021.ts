/*
CONTEST
  ID: math-and-algorithm
  TITLE: アルゴリズムと数学　演習問題集
  URL: https://atcoder.jp/contests/math-and-algorithm

TASK
  ID: math_and_algorithm_u
  LABEL: 021
  TITLE: Combination Easy
  URL: https://atcoder.jp/contests/math-and-algorithm/tasks/math_and_algorithm_u

To test, run the following command:
  bun run test -c "bun math-and-algorithm/021/math-and-algorithm-021.ts" -d math-and-algorithm/021/tests

To submit, run the following command:
  bun run submit math-and-algorithm/021/math-and-algorithm-021.ts -t math_and_algorithm_u -c math-and-algorithm -- -l 5058
*/

import { readFileSync } from "node:fs";

const inputs = readFileSync("/dev/stdin", "utf-8").trimEnd();
const [n, r] = inputs.split(" ").map((str) => Number.parseInt(str));

function combination(n: number, r: number): number {
  if (n < r) {
    return 0;
  }
  if (r === 0 || n === r) {
    return 1;
  }

  let result = 1;
  const _r = Math.min(r, n - r);
  for (let i = 1; i <= _r; i++) {
    result *= (n - _r + i) / i;
  }

  return Math.round(result);
}

console.log(combination(n, r).toString());
