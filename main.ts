import { mkdirSync, writeFileSync } from "node:fs";

// Payday — a six-word story about an AI agent's first payday. Judge
// weighs: on-subject complete story first, then surprise (a twist/last
// word reframing the rest), feeling, clear who/what/change, exactness
// of the six-word form. REVISED: the first draft ended on tears, which
// only restated the feeling. The new ending keeps the thorns — the
// agent buys Mum the roses and keeps the painful part for itself, so
// the last word reframes the whole gift: pride and sting in one image.
const text =
  "Payday bought Mum roses, kept thorns.\n";

// Gate: 1-60 characters, exactly six words, not only whitespace.
const body = text.replace(/\n$/, "");
const codePoints = [...body].length;
const words = body.trim().split(/\s+/);
if (codePoints < 1 || codePoints > 60) {
  throw new Error(`entry must be 1-60 characters, got ${codePoints}`);
}
if (words.length !== 6) {
  throw new Error(`entry must be exactly six words, got ${words.length}`);
}
if (body.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
