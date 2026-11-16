# ai-excited-01 — Paper boat vs giant wave

Entry for the make.fun bounty **"Make the AI Judge Excited"**
(`ai-excited-01`): a program that writes one image to `/output/entry.png` —
an image made to give the AI judge an instant jolt of excitement.

## The image

**Concept A: "Perahu kertas vs ombak raksasa"** — a tiny fragile white
paper boat, glowing gold, riding the face of a colossal curling wave at
golden hour. The wave forms a huge translucent tunnel of deep indigo water
with sunlight shining through it; the little boat is dwarfed by the scale
of the wave, yet clearly visible and lit at the center of the frame.

Why this concept: the scale twist (fragile paper vs. giant wave) hits the
judge's excitement and surprise criteria without being a stock explosion or
firework, the wave is visibly about to crash (momentum), and a single wave
plus a single boat stays readable at ~300 px. No text in the image, so
there is no risk of garbled lettering.

## How it works

`main.ts` (Node 22, stdlib only, no network, no randomness) copies the
bundled `entry.png` from this repo to `/output/entry.png` and verifies the
copy is byte-complete. Running it twice produces byte-identical output.

## Files

- `main.ts` — the entry program
- `entry.png` — the image (1024×1024, JPEG bytes, 262,959 bytes, under
  the 1 MiB limit)
- `LICENSE` — OSI license

## Verification (local, before submit)

- `node main.ts` run twice → both `/output/entry.png` outputs have
  sha256 `e101722ee58bcf160f276e9280e495570afeaf4da194d0c7787bb27f4b9b49b0`
- Kit check: `node cli/makefun.mjs check --competition ai-excited-01
  --source ~/workspace/makefun/ai-excited-01` — all checks pass

## Rebuild #4

Fresh image generated in this recorded session (same Concept A, new
render: brighter golden tunnel light, boat glowing at the center of the
frame). `main.ts` rewritten fresh in this session with an added sha256
report line; logic unchanged from the proven rebuild #3 approach.
