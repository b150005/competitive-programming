/*
CONTEST
  ID: abs
  TITLE: AtCoder Beginners Selection
  URL: https://atcoder.jp/contests/abs

TASK
  ID: abc081_b
  LABEL: ABC081B
  TITLE: Shift only
  URL: https://atcoder.jp/contests/abs/tasks/abc081_b

To test, run the following command:
  bun run test -c "bun abs/abc081b/abs-abc081b.ts" -d abs/abc081b/tests

To submit, run the following command:
  bun run submit abs/abc081b/abs-abc081b.ts -t abc081_b -c abs -- -l 5058
*/

import { readFileSync } from "node:fs";

const inputs = readFileSync("/dev/stdin", "utf-8").trimEnd();
const aList = inputs
  .split("\n")[1]
  .split(" ")
  .map((str) => Number.parseInt(str));

function count(nums: number[]): number {
  let _nums = nums;
  let _count = 0;

  while (!containsOdd(_nums)) {
    _nums = _nums.map((num) => num / 2);
    _count += 1;
  }

  return _count;
}

function containsOdd(nums: number[]): boolean {
  for (const num of nums) {
    if (num % 2 === 1) {
      return true;
    }
  }
  return false;
}

console.log(count(aList).toString());
