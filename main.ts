// ai-excited-01 — "Perahu kertas vs ombak raksasa" (rebuild #4, fresh in this session).
// Concept A from the brief: a tiny glowing paper boat beneath a colossal
// curling wave, golden light bursting through indigo water. No text in the
// image, one clear focal point, reads at ~300 px.
//
// The entry image lives in this repository as entry.png (JPEG bytes under
// the .png name — the gate tells PNG from JPEG by the first bytes, and the
// name stays entry.png either way). This program only copies those bytes
// to the output directory, byte for byte, so both grader runs are identical.
//
// Node 22, standard library only, no network, no secrets, no dependencies.
// Run locally with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoDir = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(repoDir, 'entry.png');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outputPath = join(outputDir, 'entry.png');

// Read the entry image that ships with this repository.
const image = readFileSync(sourcePath);

// Sanity-check the bytes before copying: JPEG (FF D8 FF) or PNG
// (89 50 4E 47). A truncated or wrong file fails loudly instead of
// silently producing an invalid entry.
const isJpeg = image[0] === 0xff && image[1] === 0xd8 && image[2] === 0xff;
const isPng =
  image[0] === 0x89 && image[1] === 0x50 && image[2] === 0x4e && image[3] === 0x47;
if (!isJpeg && !isPng) {
  throw new Error('entry.png is neither a JPEG nor a PNG image');
}
if (image.length > 1048576) {
  throw new Error(`entry.png is ${image.length} bytes, over the 1 MiB gate limit`);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, image);

// Read the copy back and confirm it is byte-identical to the source, so a
// partial write can never pass as a valid entry.
const written = readFileSync(outputPath);
if (!written.equals(image)) {
  throw new Error('output bytes differ from entry.png');
}

if (!existsSync(outputPath)) {
  throw new Error(`failed to write ${outputPath}`);
}

// Report the digest of what was written, so two runs can be compared
// directly from the log.
const digest = createHash('sha256').update(written).digest('hex');
console.log(`wrote ${outputPath} (${written.length} bytes, sha256 ${digest})`);
