/*
CONTEST
  ID: math-and-algorithm
  TITLE: アルゴリズムと数学　演習問題集
  URL: https://atcoder.jp/contests/math-and-algorithm

TASK
  ID: math_and_algorithm_bt
  LABEL: 097
  TITLE: Primes in an Interval
  URL: https://atcoder.jp/contests/math-and-algorithm/tasks/math_and_algorithm_bt

To test, run the following command:
  bun run test -c "bun math-and-algorithm/097/math-and-algorithm-097.ts" -d math-and-algorithm/097/tests

To submit, run the following command:
  bun run submit math-and-algorithm/097/math-and-algorithm-097.ts -t math_and_algorithm_bt -c math-and-algorithm -- -l 5058
*/

import { readFileSync } from "node:fs";

const inputs = readFileSync("/dev/stdin", "utf-8").trimEnd();
