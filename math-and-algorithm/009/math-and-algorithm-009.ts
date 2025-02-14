/*
CONTEST
  ID: math-and-algorithm
  TITLE: アルゴリズムと数学　演習問題集
  URL: https://atcoder.jp/contests/math-and-algorithm

TASK
  ID: math_and_algorithm_i
  LABEL: 009
  TITLE: Brute Force 2
  URL: https://atcoder.jp/contests/math-and-algorithm/tasks/math_and_algorithm_i

To test, run the following command:
  bun run test -c "bun math-and-algorithm/009/math-and-algorithm-009.ts" -d math-and-algorithm/009/tests

To submit, run the following command:
  bun run submit math-and-algorithm/009/math-and-algorithm-009.ts -t math_and_algorithm_i -c math-and-algorithm -- -l 5058
*/

import { readFileSync } from "node:fs";

const inputs = readFileSync("/dev/stdin", "utf-8").trimEnd();
const s = Number.parseInt(inputs.split("\n")[0].split(" ")[1]);
const as = inputs
  .split("\n")[1]
  .split(" ")
  .map((str) => Number.parseInt(str));

function isSubsetSum(nums: number[], sum: number): boolean {
  /**
   * `i` 番目までの数を用いて `j` が作れる場合は `dp[i][j] === true`
   */
  const dp: boolean[][] = Array.from({ length: nums.length + 1 }, (_, index) => Array(sum + 1).fill(false));
  dp[0][0] = true;

  for (let i = 1; i <= nums.length; i++) {
    for (let j = 0; j <= sum; j++) {
      if (nums[i - 1] <= j) {
        // 現在の数を使っても制限内に収まる場合は、その数を使う場合と使わない場合の両方を試す
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
      } else {
        // 現在の数を使うと制限を超える場合は、その数を使わない場合の結果に同じとする
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[nums.length][sum];
}

console.log(isSubsetSum(as, s) ? "Yes" : "No");
