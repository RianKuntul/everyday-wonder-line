// Everyday Wonder — a one-sentence entry writer.
//
// The whole competition lives or dies on a single line of text, so this
// program keeps the job deliberately small: hold the line, drop it into
// entry.txt, then read the file back and refuse to finish if what landed
// on disk would fail the gate (1–200 characters, not blank, one sentence).

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The gate, taken straight from the kit: at most 200 characters.
const MAX_CHARS = 200;

// The line is built from its two beats so the craft stays visible:
//   the scene — a sensor that fires a moment too early, every single day;
//   the turn  — for half a step, that small malfunction promotes you.
// Revision two dropped the first draft's "famous in the cereal aisle" gag:
// this ending is quieter, and the wonder lands harder for it.
const SCENE =
  "The minimarket doors slide open before I even reach them,";
const TURN =
  "and for half a step I am somebody important, arriving somewhere that matters.";
const LINE = `${SCENE} ${TURN}`;

function targetFile(): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(dir, { recursive: true });
  return join(dir, "entry.txt");
}

function check(text: string): void {
  // Count code points, not bytes, so the check matches the character gate.
  const length = [...text].length;
  if (length < 1 || length > MAX_CHARS) {
    throw new Error(`entry is ${length} characters; the gate allows 1-${MAX_CHARS}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry is only whitespace");
  }
  // The brief asks for one sentence: exactly one full stop, at the end,
  // and no line breaks smuggling in a second thought.
  const stops = [...text].filter((ch) => ch === ".").length;
  if (stops !== 1 || !text.endsWith(".") || text.includes("\n")) {
    throw new Error("entry must be a single sentence on a single line");
  }
}

function main(): void {
  const file = targetFile();
  writeFileSync(file, LINE, "utf8");

  // Trust nothing: verify the bytes we just wrote, not the constant.
  const onDisk = readFileSync(file, "utf8");
  check(onDisk);
  if (onDisk !== LINE) {
    throw new Error("entry.txt does not match the line we intended to write");
  }
  console.log(`wrote ${[...onDisk].length} characters to ${file}`);
}

main();
