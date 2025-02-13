/*
CONTEST
  ID: math-and-algorithm
  TITLE: アルゴリズムと数学　演習問題集
  URL: https://atcoder.jp/contests/math-and-algorithm

TASK
  ID: math_and_algorithm_b
  LABEL: 002
  TITLE: Sum of 3 Integers
  URL: https://atcoder.jp/contests/math-and-algorithm/tasks/math_and_algorithm_b

To test, run the following command:
  bun run test -c "bun math-and-algorithm/002/math-and-algorithm-002.ts" -d math-and-algorithm/002/tests

To submit, run the following command:
  bun run submit math-and-algorithm/002/math-and-algorithm-002.ts -t math_and_algorithm_b -c math-and-algorithm -- -l 5058
*/

import { readFileSync } from "node:fs";

const inputs = readFileSync("/dev/stdin", "utf-8").trimEnd();
const [a1, a2, a3] = inputs.split(" ").map((str) => Number.parseInt(str));
console.log((a1 + a2 + a3).toString());
