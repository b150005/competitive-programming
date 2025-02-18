/*
CONTEST
  ID: math-and-algorithm
  TITLE: アルゴリズムと数学　演習問題集
  URL: https://atcoder.jp/contests/math-and-algorithm

TASK
  ID: math_and_algorithm_p
  LABEL: 016
  TITLE: Greatest Common Divisor of N Integers
  URL: https://atcoder.jp/contests/math-and-algorithm/tasks/math_and_algorithm_p

To test, run the following command:
  bun run test -c "bun math-and-algorithm/016/math-and-algorithm-016.ts" -d math-and-algorithm/016/tests

To submit, run the following command:
  bun run submit math-and-algorithm/016/math-and-algorithm-016.ts -t math_and_algorithm_p -c math-and-algorithm -- -l 5058
*/

import { readFileSync } from "node:fs";

const inputs = readFileSync("/dev/stdin", "utf-8").trimEnd();
const as = inputs
  .split("\n")[1]
  .split(" ")
  .map((str) => BigInt(str));

function gcd(num1: bigint, num2: bigint): bigint {
  if (num2 === 0n) {
    return num1;
  }

  return gcd(num2, num1 % num2);
}

function gcdOf(nums: bigint[]): bigint {
  return nums.reduce((accumulator, currentValue) => gcd(accumulator, currentValue));
}

console.log(gcdOf(as).toString());
