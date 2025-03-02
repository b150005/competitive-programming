/*
CONTEST
  ID: math-and-algorithm
  TITLE: アルゴリズムと数学　演習問題集
  URL: https://atcoder.jp/contests/math-and-algorithm

TASK
  ID: dp_a
  LABEL: 028
  TITLE: Frog 1
  URL: https://atcoder.jp/contests/math-and-algorithm/tasks/dp_a

To test, run the following command:
  bun run test -c "bun math-and-algorithm/028/math-and-algorithm-028.ts" -d math-and-algorithm/028/tests

To submit, run the following command:
  bun run submit math-and-algorithm/028/math-and-algorithm-028.ts -t dp_a -c math-and-algorithm -- -l 5058
*/

import { readFileSync } from "node:fs";

const inputs = readFileSync("/dev/stdin", "utf-8").trimEnd();
const nums = inputs
  .split("\n")[1]
  .split(" ")
  .map((str) => Number.parseInt(str));

function minCost(nums: number[]): number {
  const dp = Array(nums.length + 1).fill(-1);

  function cost(position: number): number {
    if (position === 0 || position === 1) {
      return 0;
    }

    const index = position - 1;
    if (position === 2) {
      return Math.abs(nums[index] - nums[index - 1]);
    }

    if (dp[position] !== -1) {
      return dp[position];
    }

    dp[position] = Math.min(
      cost(position - 1) + Math.abs(nums[index] - nums[index - 1]),
      cost(position - 2) + Math.abs(nums[index] - nums[index - 2]),
    );

    return dp[position];
  }

  return cost(nums.length);
}

console.log(minCost(nums).toString());
