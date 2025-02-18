/*
CONTEST
  ID: math-and-algorithm
  TITLE: アルゴリズムと数学　演習問題集
  URL: https://atcoder.jp/contests/math-and-algorithm

TASK
  ID: math_and_algorithm_n
  LABEL: 014
  TITLE: Factorization
  URL: https://atcoder.jp/contests/math-and-algorithm/tasks/math_and_algorithm_n

To test, run the following command:
  bun run test -c "bun math-and-algorithm/014/math-and-algorithm-014.ts" -d math-and-algorithm/014/tests

To submit, run the following command:
  bun run submit math-and-algorithm/014/math-and-algorithm-014.ts -t math_and_algorithm_n -c math-and-algorithm -- -l 5058
*/

import { readFileSync } from "node:fs";

const inputs = readFileSync("/dev/stdin", "utf-8").trimEnd();
const n = Number.parseInt(inputs);

function primeFactors(num: number): number[] {
  let _num = num;
  const _primeFactors: number[] = [];
  for (let i = 2; i * i <= num; i++) {
    while (_num % i === 0) {
      _primeFactors.push(i);
      _num /= i;
    }
  }
  // _num が 1 でない場合、 _num は必ず素因数なので配列に入れる
  // (証明)
  // _num が合成数の場合、その素因数には √_num 以下のものが含まれているはずだが、すでにループしてチェックしているため _num は必ず素数である
  if (_num !== 1) {
    _primeFactors.push(_num);
  }
  return _primeFactors;
}

console.log(primeFactors(n).join(" "));
