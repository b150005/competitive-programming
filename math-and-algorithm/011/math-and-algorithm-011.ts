/*
CONTEST
  ID: math-and-algorithm
  TITLE: アルゴリズムと数学　演習問題集
  URL: https://atcoder.jp/contests/math-and-algorithm

TASK
  ID: math_and_algorithm_k
  LABEL: 011
  TITLE: Print Prime Numbers
  URL: https://atcoder.jp/contests/math-and-algorithm/tasks/math_and_algorithm_k

To test, run the following command:
  bun run test -c "bun math-and-algorithm/011/math-and-algorithm-011.ts" -d math-and-algorithm/011/tests

To submit, run the following command:
  bun run submit math-and-algorithm/011/math-and-algorithm-011.ts -t math_and_algorithm_k -c math-and-algorithm -- -l 5058
*/

import { readFileSync } from "node:fs";

const inputs = readFileSync("/dev/stdin", "utf-8").trimEnd();
const n = Number.parseInt(inputs);

function primeNumbers(num: number): number[] {
  const prime: boolean[] = Array(num + 1).fill(true);
  prime[0] = false;
  prime[1] = false;

  // エラトステネスの篩(2 以上 √num 以下の範囲で走査)
  for (let i = 2; i * i <= num; i++) {
    if (prime[i]) {
      // i を除く i の倍数を false にする
      for (let j = i * 2; j <= num; j += i) {
        prime[j] = false;
      }
    }
  }

  return prime.map((value, index, _) => (value ? index : -1)).filter((value) => value !== -1);
}

console.log(
  primeNumbers(n)
    .map((num) => num.toString())
    .join(" "),
);
