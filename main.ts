// ai-excited-01 entry (Node 22, standard library only).
//
// The entry image lives next to this file as entry.png: a tiny paper boat
// riding the face of a colossal wave, seen from behind as the barrel curls
// overhead and golden light breaks through the tunnel. The whole idea is
// scale: one fragile folded boat against an ocean about to break.
// This program copies that image to /output/entry.png, exactly as the
// judge will see it. No network, no randomness: every run writes the
// same bytes, so the two grading runs are byte-identical by construction.
//
// Local run:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = join(dirname(fileURLToPath(import.meta.url)), 'entry.png');
const destination = join(outDir, 'entry.png');

mkdirSync(outDir, { recursive: true });
copyFileSync(source, destination);
