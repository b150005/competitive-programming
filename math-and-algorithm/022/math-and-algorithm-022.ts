/*
CONTEST
  ID: math-and-algorithm
  TITLE: アルゴリズムと数学　演習問題集
  URL: https://atcoder.jp/contests/math-and-algorithm

TASK
  ID: math_and_algorithm_v
  LABEL: 022
  TITLE: Choose Cards 3
  URL: https://atcoder.jp/contests/math-and-algorithm/tasks/math_and_algorithm_v

To test, run the following command:
  bun run test -c "bun math-and-algorithm/022/math-and-algorithm-022.ts" -d math-and-algorithm/022/tests

To submit, run the following command:
  bun run submit math-and-algorithm/022/math-and-algorithm-022.ts -t math_and_algorithm_v -c math-and-algorithm -- -l 5058
*/

import { readFileSync } from "node:fs";

const inputs = readFileSync("/dev/stdin", "utf-8").trimEnd();
const as = inputs
  .split("\n")[1]
  .split(" ")
  .map((str) => Number.parseInt(str));

function count100K(nums: number[]): number {
  // 各数の個数を計上する
  const counts: number[] = Array(100001).fill(0);
  for (const num of nums) {
    counts[num]++;
  }

  // 1 - 49999 は必ず異なる数のカードが選択されるので積の法則を適用
  let _count = 0;
  for (let i = 1; i <= 49999; i++) {
    _count += counts[i] * counts[100000 - i];
  }

  // 50000 は同じ数のカードの組み合わせ
  _count += (counts[50000] * (counts[50000] - 1)) / 2;

  return _count;
}

console.log(count100K(as).toString());
