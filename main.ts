// ai-excited-01 — "Paper boat vs giant wave" (rebuild #2).
// Node 22, standard library only, no network. The entry image lives in
// this repository as entry.png; this program copies it to the output
// directory the grader provides, so both runs write identical bytes.

import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { join } from "node:path";

const source = new URL("./entry.png", import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

// Guard: the copied file must match the source byte for byte in size.
const sourceBytes = statSync(source).size;
const targetBytes = statSync(target).size;
if (targetBytes !== sourceBytes) {
  throw new Error(
    `entry.png copy size mismatch: wrote ${targetBytes} bytes, source is ${sourceBytes}`,
  );
}
console.log(`wrote ${target} (${targetBytes} bytes)`);
