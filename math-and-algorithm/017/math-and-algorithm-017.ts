/*
CONTEST
  ID: math-and-algorithm
  TITLE: アルゴリズムと数学　演習問題集
  URL: https://atcoder.jp/contests/math-and-algorithm

TASK
  ID: math_and_algorithm_q
  LABEL: 017
  TITLE: Least Common Multiple of N Integers
  URL: https://atcoder.jp/contests/math-and-algorithm/tasks/math_and_algorithm_q

To test, run the following command:
  bun run test -c "bun math-and-algorithm/017/math-and-algorithm-017.ts" -d math-and-algorithm/017/tests

To submit, run the following command:
  bun run submit math-and-algorithm/017/math-and-algorithm-017.ts -t math_and_algorithm_q -c math-and-algorithm -- -l 5058
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

function lcm(num1: bigint, num2: bigint): bigint {
  return num1 * (num2 / gcd(num1, num2));
}

function lcmOf(nums: bigint[]): bigint {
  return nums.reduce((accumulator, currentValue) => lcm(accumulator, currentValue));
}

console.log(lcmOf(as).toString());
