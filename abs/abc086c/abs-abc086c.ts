/*
CONTEST
  ID: abs
  TITLE: AtCoder Beginners Selection
  URL: https://atcoder.jp/contests/abs

TASK
  ID: arc089_a
  LABEL: ABC086C
  TITLE: Traveling
  URL: https://atcoder.jp/contests/abs/tasks/arc089_a

To test, run the following command:
  bun run test -c "bun abs/abc086c/abs-abc086c.ts" -d abs/abc086c/tests

To submit, run the following command:
  bun run submit abs/abc086c/abs-abc086c.ts -t arc089_a -c abs -- -l 5058
*/

import { readFileSync } from "node:fs";

type Node = {
  t: number;
  x: number;
  y: number;
};

const inputs = readFileSync("/dev/stdin", "utf-8").trimEnd();
const initialNode = {
  t: 0,
  x: 0,
  y: 0,
};
const nodes: Node[] = [
  initialNode,
  ...inputs
    .split("\n")
    .slice(1)
    .map((str) => {
      const nums = str.split(" ").map((str) => Number.parseInt(str));
      return { t: nums[0], x: nums[1], y: nums[2] };
    }),
];

function canMove(from: Node, to: Node): boolean {
  const dt = Math.abs(to.t - from.t);
  const dx = Math.abs(to.x - from.x);
  const dy = Math.abs(to.y - from.y);
  const dd = dx + dy;

  if (dd <= dt && dt % 2 === dd % 2) {
    return true;
  }
  return false;
}

function check(nodes: Node[]): boolean {
  for (let i = 0; i < nodes.length - 1; i++) {
    const { from, to } = { from: nodes[i], to: nodes[i + 1] };
    if (!canMove(from, to)) {
      return false;
    }
  }

  return true;
}

console.log(check(nodes) ? "Yes" : "No");
