/*
CONTEST
  ID: math-and-algorithm
  TITLE: アルゴリズムと数学　演習問題集
  URL: https://atcoder.jp/contests/math-and-algorithm

TASK
  ID: math_and_algorithm_bf
  LABEL: 071
  TITLE: Linear Programming
  URL: https://atcoder.jp/contests/math-and-algorithm/tasks/math_and_algorithm_bf

To test, run the following command:
  bun run test -c "bun math-and-algorithm/071/math-and-algorithm-071.ts" -d math-and-algorithm/071/tests

To submit, run the following command:
  bun run submit math-and-algorithm/071/math-and-algorithm-071.ts -t math_and_algorithm_bf -c math-and-algorithm -- -l 5058
*/

import { readFileSync } from "node:fs";

const inputs = readFileSync("/dev/stdin", "utf-8").trimEnd();
