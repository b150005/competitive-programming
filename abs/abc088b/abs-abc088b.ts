/*
CONTEST
  ID: abs
  TITLE: AtCoder Beginners Selection
  URL: https://atcoder.jp/contests/abs

TASK
  ID: abc088_b
  LABEL: ABC088B
  TITLE: Card Game for Two
  URL: https://atcoder.jp/contests/abs/tasks/abc088_b

To test, run the following command:
  bun run test -c "bun abs/abc088b/abs-abc088b.ts" -d abs/abc088b/tests

To submit, run the following command:
  bun run submit abs/abc088b/abs-abc088b.ts -t abc088_b -c abs -- -l 5058
*/

import { readFileSync } from "node:fs";

const inputs = readFileSync("/dev/stdin", "utf-8").trimEnd();
const as = inputs
  .split("\n")[1]
  .split(" ")
  .map((str) => Number.parseInt(str))
  .sort((a, b) => b - a);

function countPoint(nums: number[]): number {
  return nums.reduce((accumulator, num, index, nums) => (index % 2 === 0 ? accumulator + num : accumulator - num), 0);
}

console.log(countPoint(as).toString());
