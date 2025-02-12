/*
CONTEST
  ID: math-and-algorithm
  TITLE: アルゴリズムと数学　演習問題集
  URL: https://atcoder.jp/contests/math-and-algorithm

TASK
  ID: abc007_3
  LABEL: 046
  TITLE: 幅優先探索
  URL: https://atcoder.jp/contests/math-and-algorithm/tasks/abc007_3

To test, run the following command:
  bun run test -c "bun math-and-algorithm/046/math-and-algorithm-046.ts" -d math-and-algorithm/046/tests

To submit, run the following command:
  bun run submit math-and-algorithm/046/math-and-algorithm-046.ts -t abc007_3 -c math-and-algorithm -- -l 5058
*/

import { readFileSync } from "node:fs";

const inputs = readFileSync("/dev/stdin", "utf-8").trimEnd();
