/*
CONTEST
  ID: math-and-algorithm
  TITLE: アルゴリズムと数学　演習問題集
  URL: https://atcoder.jp/contests/math-and-algorithm

TASK
  ID: math_and_algorithm_h
  LABEL: 008
  TITLE: Brute Force 1
  URL: https://atcoder.jp/contests/math-and-algorithm/tasks/math_and_algorithm_h

To test, run the following command:
  bun run test -c "bun math-and-algorithm/008/math-and-algorithm-008.ts" -d math-and-algorithm/008/tests

To submit, run the following command:
  bun run submit math-and-algorithm/008/math-and-algorithm-008.ts -t math_and_algorithm_h -c math-and-algorithm -- -l 5058
*/

import { readFileSync } from "node:fs";

const inputs = readFileSync("/dev/stdin", "utf-8").trimEnd();
const [n, s] = inputs.split(" ").map((str) => Number.parseInt(str));

function countCombinations(n: number, limit: number): number {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i + j <= limit) {
        count++;
      }
    }
  }

  return count;
}

console.log(countCombinations(n, s).toString());
