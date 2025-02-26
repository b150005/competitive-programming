/*
CONTEST
  ID: math-and-algorithm
  TITLE: アルゴリズムと数学　演習問題集
  URL: https://atcoder.jp/contests/math-and-algorithm

TASK
  ID: math_and_algorithm_z
  LABEL: 026
  TITLE: Coin Gacha
  URL: https://atcoder.jp/contests/math-and-algorithm/tasks/math_and_algorithm_z

To test, run the following command:
  bun run test -c "bun math-and-algorithm/026/math-and-algorithm-026.ts" -d math-and-algorithm/026/tests

To submit, run the following command:
  bun run submit math-and-algorithm/026/math-and-algorithm-026.ts -t math_and_algorithm_z -c math-and-algorithm -- -l 5058
*/

import { readFileSync } from "node:fs";

const inputs = readFileSync("/dev/stdin", "utf-8").trimEnd();
const n = Number.parseInt(inputs);

/**
 * @remarks
 *  k 種類目のコインを引く確率は (n - k + 1) / n なので、この期待値はその逆数である n / (n - k + 1)\
 *  つまり、求める期待値は n * (1 + (1 / 2) + (1 / 3) + ... + (1 / N))
 */
function expectation(num: number): number {
  let probability = 0;
  for (let i = 1; i <= num; i++) {
    probability += 1 / i;
  }
  return num * probability;
}

console.log(expectation(n).toString());
