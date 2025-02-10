/*
CONTEST
  ID: abs
  TITLE: AtCoder Beginners Selection
  URL: https://atcoder.jp/contests/abs

TASK
  ID: abc086_a
  LABEL: ABC086A
  TITLE: Product
  URL: https://atcoder.jp/contests/abs/tasks/abc086_a

To test, run the following command:
  bun run test -c "bun abs/abc086a/abs-abc086a.ts" -d abs/abc086a/tests

To submit, run the following command:
  bun run submit abs/abc086a/abs-abc086a.ts -t abc086_a -c abs -- -l 5058
*/

import { readFileSync } from "node:fs";

const inputs = readFileSync("/dev/stdin", "utf-8").trimEnd();
const [a, b] = inputs.split(" ").map((str) => Number.parseInt(str));

function isProductOdd(a: number, b: number): boolean {
  if (a % 2 !== 0 && b % 2 !== 0) {
    return true;
  }
  return false;
}

console.log(isProductOdd(a, b) ? "Odd" : "Even");
