/*
CONTEST
  ID: math-and-algorithm
  TITLE: アルゴリズムと数学　演習問題集
  URL: https://atcoder.jp/contests/math-and-algorithm

TASK
  ID: math_and_algorithm_j
  LABEL: 010
  TITLE: Factorial
  URL: https://atcoder.jp/contests/math-and-algorithm/tasks/math_and_algorithm_j

To test, run the following command:
  bun run test -c "bun math-and-algorithm/010/math-and-algorithm-010.ts" -d math-and-algorithm/010/tests

To submit, run the following command:
  bun run submit math-and-algorithm/010/math-and-algorithm-010.ts -t math_and_algorithm_j -c math-and-algorithm -- -l 5058
*/

import { readFileSync } from "node:fs";

const inputs = readFileSync("/dev/stdin", "utf-8").trimEnd();
const n = Number.parseInt(inputs);

function factorial(num: number): number {
  return Array.from({ length: num }, (_, index) => index + 1).reduce(
    (accumulator, currentValue) => accumulator * currentValue,
  );
}

console.log(factorial(n).toString());
