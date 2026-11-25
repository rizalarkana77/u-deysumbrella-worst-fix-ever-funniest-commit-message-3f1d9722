// Worst Fix Ever: Funniest Commit Message — make.fun entry.
//
// Writes a single commit message to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node standard library only; fully deterministic.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

const ENTRY =
  "fix: duplicate charges by charging everyone twice so nobody feels singled out";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (!outDir) {
    throw new Error("MAKEFUN_OUTPUT_DIR is not set");
  }
  // Competition gate: UTF-8 text, 1-100 characters, not only whitespace.
  const length = [...ENTRY].length;
  if (length < 1 || length > 100) {
    throw new Error(`entry must be 1-100 characters, got ${length}`);
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, ENTRY, "utf8"); // no trailing newline
  // Read-back verification: the file on disk must round-trip byte-identical.
  const readBack = readFileSync(target, "utf8");
  if (readBack !== ENTRY) {
    throw new Error("read-back verification failed: entry.txt does not match");
  }
  const sha256 = createHash("sha256").update(ENTRY, "utf8").digest("hex");
  console.log(`wrote ${target}`);
  console.log(`characters: ${length}`);
  console.log(`sha256: ${sha256}`);
}

main();
