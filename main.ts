// ai-excited-01 — "Paper boat vs giant wave"
// Copies the entry image bundled in this repo to /output/entry.png.
// Node 22, stdlib only, no network, no randomness: the output bytes are
// always identical to the bundled image, so every run is deterministic.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const source = join(repoDir, "entry.png");
const outDir = "/output";
const dest = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(source, dest);

// Confirm the copy is complete: same byte size as the bundled image.
const size = statSync(dest).size;
if (size !== statSync(source).size) {
  throw new Error(`Copy incomplete: wrote ${size} bytes`);
}
console.log(`Wrote ${dest} (${size} bytes)`);
