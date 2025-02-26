/*
CONTEST
  ID: math-and-algorithm
  TITLE: アルゴリズムと数学　演習問題集
  URL: https://atcoder.jp/contests/math-and-algorithm

TASK
  ID: math_and_algorithm_y
  LABEL: 025
  TITLE: Jiro's Vacation
  URL: https://atcoder.jp/contests/math-and-algorithm/tasks/math_and_algorithm_y

To test, run the following command:
  bun run test -c "bun math-and-algorithm/025/math-and-algorithm-025.ts" -d math-and-algorithm/025/tests

To submit, run the following command:
  bun run submit math-and-algorithm/025/math-and-algorithm-025.ts -t math_and_algorithm_y -c math-and-algorithm -- -l 5058
*/

import { readFileSync } from "node:fs";

const inputs = readFileSync("/dev/stdin", "utf-8").trimEnd();
const as = inputs
  .split("\n")[1]
  .split(" ")
  .map((str) => Number.parseInt(str));
const bs = inputs
  .split("\n")[2]
  .split(" ")
  .map((str) => Number.parseInt(str));

function expectation(nums1: number[], nums2: number[]): number {
  let total = 0;
  for (let i = 0; i < nums1.length; i++) {
    total = total + (nums1[i] + 2 * nums2[i]) / 3;
  }
  return total;
}

console.log(expectation(as, bs).toString());
