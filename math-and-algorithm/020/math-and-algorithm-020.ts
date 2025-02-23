/*
CONTEST
  ID: math-and-algorithm
  TITLE: アルゴリズムと数学　演習問題集
  URL: https://atcoder.jp/contests/math-and-algorithm

TASK
  ID: math_and_algorithm_t
  LABEL: 020
  TITLE: Choose Cards 2
  URL: https://atcoder.jp/contests/math-and-algorithm/tasks/math_and_algorithm_t

To test, run the following command:
  bun run test -c "bun math-and-algorithm/020/math-and-algorithm-020.ts" -d math-and-algorithm/020/tests

To submit, run the following command:
  bun run submit math-and-algorithm/020/math-and-algorithm-020.ts -t math_and_algorithm_t -c math-and-algorithm -- -l 5058
*/

import { readFileSync } from "node:fs";

const inputs = readFileSync("/dev/stdin", "utf-8").trimEnd();
const as = inputs
  .split("\n")[1]
  .split(" ")
  .map((str) => Number.parseInt(str));

function combination(nums: number[]): number {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        for (let l = k + 1; l < nums.length; l++) {
          for (let m = l + 1; m < nums.length; m++) {
            if (nums[i] + nums[j] + nums[k] + nums[l] + nums[m] === 1000) {
              result++;
            }
          }
        }
      }
    }
  }

  return result;
}

console.log(combination(as).toString());
