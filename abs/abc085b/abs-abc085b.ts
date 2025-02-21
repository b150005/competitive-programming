/*
CONTEST
  ID: abs
  TITLE: AtCoder Beginners Selection
  URL: https://atcoder.jp/contests/abs

TASK
  ID: abc085_b
  LABEL: ABC085B
  TITLE: Kagami Mochi
  URL: https://atcoder.jp/contests/abs/tasks/abc085_b

To test, run the following command:
  bun run test -c "bun abs/abc085b/abs-abc085b.ts" -d abs/abc085b/tests

To submit, run the following command:
  bun run submit abs/abc085b/abs-abc085b.ts -t abc085_b -c abs -- -l 5058
*/

import { readFileSync } from "node:fs";

const inputs = readFileSync("/dev/stdin", "utf-8").trimEnd();
const ds = [
  ...new Set(
    inputs
      .split("\n")
      .slice(1)
      .map((str) => Number.parseInt(str)),
  ),
].sort((a, b) => a - b);

function count(nums: number[]): number {
  let last = 0;
  let currentIndex = 0;
  while (currentIndex < nums.length && nums[currentIndex] > last) {
    last = nums[currentIndex];
    currentIndex += 1;
  }
  return currentIndex;
}

console.log(count(ds).toString());
