/*
CONTEST
  ID: math-and-algorithm
  TITLE: アルゴリズムと数学　演習問題集
  URL: https://atcoder.jp/contests/math-and-algorithm

TASK
  ID: math_and_algorithm_c
  LABEL: 003
  TITLE: Sum of N Integers
  URL: https://atcoder.jp/contests/math-and-algorithm/tasks/math_and_algorithm_c

To test, run the following command:
  bun run test -c "bun math-and-algorithm/003/math-and-algorithm-003.ts" -d math-and-algorithm/003/tests

To submit, run the following command:
  bun run submit math-and-algorithm/003/math-and-algorithm-003.ts -t math_and_algorithm_c -c math-and-algorithm -- -l 5058
*/

import { readFileSync } from "node:fs";

const inputs = readFileSync("/dev/stdin", "utf-8").trimEnd();
const as = inputs
  .split("\n")[1]
  .split(" ")
  .map((str) => Number.parseInt(str));
console.log(as.reduce((accumulator, currentValue) => accumulator + currentValue).toString());
