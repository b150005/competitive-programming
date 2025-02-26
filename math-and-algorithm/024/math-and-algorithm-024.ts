/*
CONTEST
  ID: math-and-algorithm
  TITLE: アルゴリズムと数学　演習問題集
  URL: https://atcoder.jp/contests/math-and-algorithm

TASK
  ID: math_and_algorithm_x
  LABEL: 024
  TITLE: Answer Exam Randomly
  URL: https://atcoder.jp/contests/math-and-algorithm/tasks/math_and_algorithm_x

To test, run the following command:
  bun run test -c "bun math-and-algorithm/024/math-and-algorithm-024.ts" -d math-and-algorithm/024/tests

To submit, run the following command:
  bun run submit math-and-algorithm/024/math-and-algorithm-024.ts -t math_and_algorithm_x -c math-and-algorithm -- -l 5058
*/

import { readFileSync } from "node:fs";

const inputs = readFileSync("/dev/stdin", "utf-8").trimEnd();

type Section = {
  optionCount: number;
  point: number;
};
const sections: Section[] = inputs
  .split("\n")
  .slice(1)
  .map((str) => {
    return { optionCount: Number.parseInt(str.split(" ")[0]), point: Number.parseInt(str.split(" ")[1]) };
  });

function totalExpectation(sections: Section[]): number {
  let _total = 0;
  for (const section of sections) {
    _total = _total + section.point / section.optionCount;
  }
  return _total;
}

console.log(totalExpectation(sections).toString());
