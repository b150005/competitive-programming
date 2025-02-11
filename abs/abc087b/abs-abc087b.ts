/*
CONTEST
  ID: abs
  TITLE: AtCoder Beginners Selection
  URL: https://atcoder.jp/contests/abs

TASK
  ID: abc087_b
  LABEL: ABC087B
  TITLE: Coins
  URL: https://atcoder.jp/contests/abs/tasks/abc087_b

To test, run the following command:
  bun run test -c "bun abs/abc087b/abs-abc087b.ts" -d abs/abc087b/tests

To submit, run the following command:
  bun run submit abs/abc087b/abs-abc087b.ts -t abc087_b -c abs -- -l 5058
*/

import { readFileSync } from "node:fs";

const inputs = readFileSync("/dev/stdin", "utf-8").trimEnd();
const [a, b, c, x] = inputs.split("\n").map((str) => Number.parseInt(str));

/*
  500s + 100t + 50u = x
  0 <= s <= a
  0 <= t <= b
  0 <= u <= c
*/
function countCoins(a: number, b: number, c: number, total: number): number {
  let count = 0;
  for (let s = 0; s <= a; s++) {
    for (let t = 0; t <= b; t++) {
      for (let u = 0; u <= c; u++) {
        const sum = 500 * s + 100 * t + 50 * u;
        if (sum === total) {
          count += 1;
        } else if (sum > total) {
          break;
        }
      }
    }
  }

  return count;
}

console.log(countCoins(a, b, c, x).toString());
