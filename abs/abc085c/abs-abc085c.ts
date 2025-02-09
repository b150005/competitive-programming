/*
CONTEST
  ID: abs
  TITLE: AtCoder Beginners Selection
  URL: https://atcoder.jp/contests/abs

TASK
  ID: abc085_c
  LABEL: ABC085C
  TITLE: Otoshidama
  URL: https://atcoder.jp/contests/abs/tasks/abc085_c

To test, run the following command:
  bun run test -c "bun abs/abc085c/abs-abc085c.ts" -d abs/abc085c/tests

To submit, run the following command:
  bun run submit abs/abc085c/abs-abc085c.ts -t abc085_c -c abs -- -l 5058
*/

import { readFileSync } from "node:fs";

const inputs = readFileSync("/dev/stdin", "utf-8").trimEnd();
const [n, y] = inputs.split(" ").map((str) => Number.parseInt(str));

function findBills(n: number, total: number): number[] {
  for (let x = 0; x <= Math.floor((total / 1000 - n) / 9); x++) {
    if ((total / 1000 - n - 9 * x) % 4 === 0) {
      const y = (total / 1000 - n - 9 * x) / 4;
      const z = n - (x + y);
      if (z < 0) {
        continue;
      }
      return [x, y, z];
    }
  }
  return [-1, -1, -1];
}

const answer = findBills(n, y);
console.log(answer.map((num) => num.toString()).join(" "));
