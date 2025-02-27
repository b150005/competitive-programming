/*
CONTEST
  ID: math-and-algorithm
  TITLE: アルゴリズムと数学　演習問題集
  URL: https://atcoder.jp/contests/math-and-algorithm

TASK
  ID: math_and_algorithm_aa
  LABEL: 027
  TITLE: Sorting
  URL: https://atcoder.jp/contests/math-and-algorithm/tasks/math_and_algorithm_aa

To test, run the following command:
  bun run test -c "bun math-and-algorithm/027/math-and-algorithm-027.ts" -d math-and-algorithm/027/tests

To submit, run the following command:
  bun run submit math-and-algorithm/027/math-and-algorithm-027.ts -t math_and_algorithm_aa -c math-and-algorithm -- -l 5058
*/

import { readFileSync } from "node:fs";

const inputs = readFileSync("/dev/stdin", "utf-8").trimEnd();
const as = inputs
  .split("\n")[1]
  .split(" ")
  .map((str) => Number.parseInt(str));

function mergeSort(nums: number[]): number[] {
  function merge(left: number[], right: number[]): number[] {
    const sorted: number[] = [];

    let [leftMergedCount, rightMergedCount] = [0, 0];
    while (leftMergedCount < left.length || rightMergedCount < right.length) {
      if (leftMergedCount === left.length) {
        sorted.push(right[rightMergedCount]);
        rightMergedCount++;
        continue;
      }

      if (rightMergedCount === right.length) {
        sorted.push(left[leftMergedCount]);
        leftMergedCount++;
        continue;
      }

      if (left[leftMergedCount] <= right[rightMergedCount]) {
        sorted.push(left[leftMergedCount]);
        leftMergedCount++;
      } else {
        sorted.push(right[rightMergedCount]);
        rightMergedCount++;
      }
    }

    return sorted;
  }

  if (nums.length <= 1) {
    return nums;
  }

  const [left, right] = [nums.slice(0, Math.floor(nums.length / 2)), nums.slice(Math.floor(nums.length / 2))];
  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort(as).join(" "));
