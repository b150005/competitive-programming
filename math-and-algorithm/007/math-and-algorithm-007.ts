/*
CONTEST
  ID: math-and-algorithm
  TITLE: アルゴリズムと数学　演習問題集
  URL: https://atcoder.jp/contests/math-and-algorithm

TASK
  ID: math_and_algorithm_g
  LABEL: 007
  TITLE: Number of Multiples 1
  URL: https://atcoder.jp/contests/math-and-algorithm/tasks/math_and_algorithm_g

To test, run the following command:
  bun run test -c "bun math-and-algorithm/007/math-and-algorithm-007.ts" -d math-and-algorithm/007/tests

To submit, run the following command:
  bun run submit math-and-algorithm/007/math-and-algorithm-007.ts -t math_and_algorithm_g -c math-and-algorithm -- -l 5058
*/

import { readFileSync } from "node:fs";

const inputs = readFileSync("/dev/stdin", "utf-8").trimEnd();
const [n, x, y] = inputs.split(" ").map((str) => Number.parseInt(str));

/**
 * 指定された範囲とステップに基づいて整数の配列を生成します。
 *
 * @param start 配列の開始値(範囲の最初の値)
 * @param end 配列の終了値(範囲の最後の値を含む)
 * @param step 配列内の値の間隔(デフォルト: `1`)
 * @returns 指定された範囲とステップで生成された整数配列
 *
 * @example
 * // 1から10まで1ずつ増加する配列を生成
 * createArray(1, 10); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 *
 * @example
 * // 0から10まで2ずつ増加する配列を生成
 * createArray(0, 10, 2); // [0, 2, 4, 6, 8, 10]
 *
 * @example
 * // 負のステップで10から1まで減少する配列を生成
 * createArray(10, 1, -1); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
 */
function createArray(start: number, end: number, step = 1): number[] {
  return Array.from({ length: (end - start) / step + 1 }, (_, index) => start + index * step);
}

function gcd(num1: number, num2: number): number {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
}

function lcm(num1: number, num2: number): number {
  return num1 * (num2 / gcd(num1, num2));
}

const nums = createArray(1, n);
const _lcm = lcm(x, y);
const multiplesOfX = nums.filter((num) => num % x === 0).length;
const multiplesOfY = nums.filter((num) => num % y === 0).length;
const multiplesOfXY = nums.filter((num) => num % _lcm === 0).length;
console.log((multiplesOfX + multiplesOfY - multiplesOfXY).toString());
