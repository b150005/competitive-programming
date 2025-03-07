/*
CONTEST
  ID: math-and-algorithm
  TITLE: アルゴリズムと数学　演習問題集
  URL: https://atcoder.jp/contests/math-and-algorithm

TASK
  ID: math_and_algorithm_g
  LABEL: 007
  TITLE: Number of Multiples 1
  URL: https://atcoder.jp/contests/math-and-algorithm/tasks/math_and_algorithm_g

To test, run the following command:
  bun run test -c "bun math-and-algorithm/007/math-and-algorithm-007.ts" -d math-and-algorithm/007/tests

To submit, run the following command:
  bun run submit math-and-algorithm/007/math-and-algorithm-007.ts -t math_and_algorithm_g -c math-and-algorithm -- -l 5058
*/

import { readFileSync } from "node:fs";

const inputs = readFileSync("/dev/stdin", "utf-8").trimEnd();
const [n, x, y] = inputs.split(" ").map((str) => Number.parseInt(str));

function countMultiples(n: number, x: number, y: number): number {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (i % x === 0 || i % y === 0) {
      count++;
    }
  }

  return count;
}

console.log(countMultiples(n, x, y).toString());
