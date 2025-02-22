/*
CONTEST
  ID: math-and-algorithm
  TITLE: アルゴリズムと数学　演習問題集
  URL: https://atcoder.jp/contests/math-and-algorithm

TASK
  ID: math_and_algorithm_r
  LABEL: 018
  TITLE: Convenience Store 1
  URL: https://atcoder.jp/contests/math-and-algorithm/tasks/math_and_algorithm_r

To test, run the following command:
  bun run test -c "bun math-and-algorithm/018/math-and-algorithm-018.ts" -d math-and-algorithm/018/tests

To submit, run the following command:
  bun run submit math-and-algorithm/018/math-and-algorithm-018.ts -t math_and_algorithm_r -c math-and-algorithm -- -l 5058
*/

import { readFileSync } from "node:fs";

const inputs = readFileSync("/dev/stdin", "utf-8").trimEnd();
const as = inputs
  .split("\n")[1]
  .split(" ")
  .map((str) => Number.parseInt(str));
const [a, b, c, d] = [
  as.filter((num) => num === 100).length,
  as.filter((num) => num === 200).length,
  as.filter((num) => num === 300).length,
  as.filter((num) => num === 400).length,
];

console.log((a * d + b * c).toString());
