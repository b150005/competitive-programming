/*
CONTEST
  ID: math-and-algorithm
  TITLE: アルゴリズムと数学　演習問題集
  URL: https://atcoder.jp/contests/math-and-algorithm

TASK
  ID: abc172_d
  LABEL: 042
  TITLE: Sum of Divisors
  URL: https://atcoder.jp/contests/math-and-algorithm/tasks/abc172_d

To test, run the following command:
  bun run test -c "bun math-and-algorithm/042/math-and-algorithm-042.ts" -d math-and-algorithm/042/tests

To submit, run the following command:
  bun run submit math-and-algorithm/042/math-and-algorithm-042.ts -t abc172_d -c math-and-algorithm -- -l 5058
*/

import { readFileSync } from "node:fs";

const inputs = readFileSync("/dev/stdin", "utf-8").trimEnd();
