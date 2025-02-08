/*
CONTEST
  ID: abs
  TITLE: AtCoder Beginners Selection
  URL: https://atcoder.jp/contests/abs

TASK
  ID: abc085_c
  LABEL: ABC085C
  TITLE: Otoshidama
  URL: https://atcoder.jp/contests/abs/tasks/abc085_c

To test, run the following command:
  bun run test -c "bun abs/abc085c/abs-abc085c.ts" -d abs/abc085c/tests

To submit, run the following command:
  bun run submit abs/abc085c/abs-abc085c.ts -t abc085_c -c abs -- -l 5058
*/

import { readFileSync } from "node:fs";

const inputs = readFileSync("/dev/stdin", "utf-8").trimEnd();
const [n, y] = inputs.split(" ").map((str) => Number.parseInt(str));
