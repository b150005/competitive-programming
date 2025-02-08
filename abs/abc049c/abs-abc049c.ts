/*
CONTEST
  ID: abs
  TITLE: AtCoder Beginners Selection
  URL: https://atcoder.jp/contests/abs

TASK
  ID: arc065_a
  LABEL: ABC049C
  TITLE: Daydream
  URL: https://atcoder.jp/contests/abs/tasks/arc065_a

To test , run the following command:
  bun run test -c "bun abs/abc049c/abs-abc049c.ts" -d abs/abc049c/tests

To submit, run the following command:
  bun run submit abs/abc049c/abs-abc049c.ts -t arc065_a -c abs -- -l 5058
*/

import { readFileSync } from "node:fs";

const inputs = readFileSync("/dev/stdin", "utf-8").trimEnd();

function check(s: string, pattern: RegExp): boolean {
  if (pattern.test(s)) {
    return true;
  }
  return false;
}

if (check(inputs, /^(dream(er)?|erase(r)?)+$/)) {
  console.log("YES");
} else {
  console.log("NO");
}
