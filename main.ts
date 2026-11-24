import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

// Charm the Commuter: Forecast a City That Isn't — make.fun entry.
// Revised line: keeps broadcast-forecast register (fog until 9,
// clearing, a percentage chance) bent around an invented city,
// Snoozington, whose one concrete detail is a train that dreams
// through your stop. Gate: /output/entry.txt, 1 to 140 characters,
// UTF-8, single line, no trailing newline, mode 0644. Text: 139 chars.
const SETUP =
  "Snoozington: heavy blankets of fog until 9, clearing to scattered naps by noon, ";
const PUNCHLINE =
  "with a 90% chance of your train dreaming through your stop.";
const TEXT = SETUP + PUNCHLINE;

function outputDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

function writeEntry(): void {
  const dir = outputDir();
  try {
    mkdirSync(dir, { recursive: true });
    const path = `${dir}/entry.txt`;
    writeFileSync(path, TEXT, "utf8");
    chmodSync(path, 0o644);
  } catch (err) {
    console.error("failed to write entry:", err);
    process.exit(1);
  }
}

writeEntry();
