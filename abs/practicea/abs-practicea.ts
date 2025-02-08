/*
CONTEST
  ID: abs
  TITLE: AtCoder Beginners Selection
  URL: https://atcoder.jp/contests/abs

TASK
  ID: practice_1
  LABEL: PracticeA
  TITLE: Welcome to AtCoder
  URL: https://atcoder.jp/contests/abs/tasks/practice_1

To test , run the following command:
  bun run test -c "bun abs/practicea/abs-practicea.ts" -d abs/practicea/tests

To submit, run the following command:
  bun run submit abs/practicea/abs-practicea.ts -t practice_1 -c abs -- -l 5058
*/

import { readFileSync } from "node:fs";

const inputs = readFileSync("/dev/stdin", "utf-8").trimEnd();
