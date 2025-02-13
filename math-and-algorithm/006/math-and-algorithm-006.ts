/*
CONTEST
  ID: math-and-algorithm
  TITLE: アルゴリズムと数学　演習問題集
  URL: https://atcoder.jp/contests/math-and-algorithm

TASK
  ID: math_and_algorithm_f
  LABEL: 006
  TITLE: Print 2N+3
  URL: https://atcoder.jp/contests/math-and-algorithm/tasks/math_and_algorithm_f

To test, run the following command:
  bun run test -c "bun math-and-algorithm/006/math-and-algorithm-006.ts" -d math-and-algorithm/006/tests

To submit, run the following command:
  bun run submit math-and-algorithm/006/math-and-algorithm-006.ts -t math_and_algorithm_f -c math-and-algorithm -- -l 5058
*/

import { readFileSync } from "node:fs";

const inputs = readFileSync("/dev/stdin", "utf-8").trimEnd();
const n = Number.parseInt(inputs);
console.log((2 * n + 3).toString());
