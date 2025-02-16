/*
CONTEST
  ID: math-and-algorithm
  TITLE: アルゴリズムと数学　演習問題集
  URL: https://atcoder.jp/contests/math-and-algorithm

TASK
  ID: math_and_algorithm_m
  LABEL: 013
  TITLE: Divisor Enumeration
  URL: https://atcoder.jp/contests/math-and-algorithm/tasks/math_and_algorithm_m

To test, run the following command:
  bun run test -c "bun math-and-algorithm/013/math-and-algorithm-013.ts" -d math-and-algorithm/013/tests

To submit, run the following command:
  bun run submit math-and-algorithm/013/math-and-algorithm-013.ts -t math_and_algorithm_m -c math-and-algorithm -- -l 5058
*/

import { readFileSync } from "node:fs";

const inputs = readFileSync("/dev/stdin", "utf-8").trimEnd();
const n = Number.parseInt(inputs);

function divisors(num: number): number[] {
  const divisors: number[] = [];
  for (let i = 1; i * i <= num; i++) {
    if (num % i === 0) {
      divisors.push(i, num / i);
    }
  }

  return divisors;
}

for (const divisor of divisors(n)) {
  console.log(divisor.toString());
}
