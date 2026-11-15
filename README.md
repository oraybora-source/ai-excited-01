# ai-excited-01 — Perahu Kertas vs Ombak Raksasa

Entry untuk bounty make.fun **ai-excited-01 — "Make the AI judge excited"**
($250, Growth). Owner: **oraybora-source**, repo: **ai-excited-01**.

## Konsep

Satu perahu kertas putih yang rapuh meluncur di dinding ombak raksasa,
dilihat dari belakang, tepat saat barrel ombak melengkung di atasnya dan
cahaya emas menembus terowongan air. Twist-nya adalah skala: perahu
sekecil itu melawan laut sebesar itu — dan tetap berlayar.

- Satu focal point (perahu + terowongan cahaya), kontras tinggi
  (indigo gelap vs emas), tanpa teks di dalam gambar.
- Beda dari anchor/rung: bukan peselancar, bukan naga origami, bukan
  robot, bukan lukisan hidup.

## Cara jalan

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Program (Node 22+, stdlib only) meng-copy `entry.png` di repo ini ke
`/output/entry.png` (atau ke `$MAKEFUN_OUTPUT_DIR`). Tanpa network,
deterministik: dua run menghasilkan byte yang sama persis.

## File

- `main.ts` — program entry (copy satu file).
- `entry.png` — gambar entry (JPEG 1024×1024, 305.751 byte).
- `variants/` — 3 varian gambar yang dibuat selama sesi build; yang
  terpilih sebagai `entry.png` adalah varian v3 (surfing).
- `LICENSE` — MIT.

## Verifikasi lokal

- Gambar valid, 1024×1024 px, 305.751 byte (≤ 1 MiB).
- Dua run `main.ts` ke direktori berbeda menghasilkan sha256 yang sama.
- Diuji terbaca pada ~300 px: perahu kertas + ombak raksasa tetap jelas.
