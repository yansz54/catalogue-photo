// The Perpetual Power Strip — catalogue photo entry.
// Copies the pre-rendered product photograph (image.png) byte-for-byte
// to the output directory as entry.png. Deterministic: no randomness,
// no network access, no clock reads; the output is exactly the bundled image.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
// The grader sets MAKEFUN_OUTPUT_DIR; default to a local out/ folder so the
// entry also runs standalone with plain `node main.ts`.
const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? join(here, "out"));
const outputPath = join(outputDir, "entry.png");
mkdirSync(outputDir, { recursive: true });
// Byte-for-byte copy: the entry image is fixed at build time, so every run
// produces the identical file.
copyFileSync(join(here, "image.png"), outputPath);
console.log(`Wrote ${outputPath}`);
