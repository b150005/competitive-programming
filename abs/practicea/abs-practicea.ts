/*
CONTEST
  ID: abs
  TITLE: AtCoder Beginners Selection
  URL: https://atcoder.jp/contests/abs

TASK
  ID: practice_1
  LABEL: PracticeA
  TITLE: Welcome to AtCoder
  URL: https://atcoder.jp/contests/abs/tasks/practice_1

To test, run the following command:
  bun run test -c "bun abs/practicea/abs-practicea.ts" -d abs/practicea/tests

To submit, run the following command:
  bun run submit abs/practicea/abs-practicea.ts -t practice_1 -c abs -- -l 5058
*/

import { readFileSync } from "node:fs";

const inputs = readFileSync("/dev/stdin", "utf-8").trimEnd().split("\n");
const [a, b, c, s] = inputs.flatMap((str, index, inputs) => {
  switch (index) {
    case 0:
      return Number.parseInt(str);
    case 1:
      return str.split(" ").map((str) => Number.parseInt(str));
    case 2:
      return str;
  }
});

console.log(`${((a as number) + (b as number) + (c as number)).toString()} ${s}`);
