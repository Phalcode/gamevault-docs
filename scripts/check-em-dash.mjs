/**
 * Fails the build when a doc uses an em dash (U+2014).
 *
 * House rule: the docs do not use em dashes. Use a colon for definition lists,
 * a comma in prose, or start a new sentence.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOTS = ["docs", "blog"];
const EM_DASH = "\u2014";

function collect(dir, out) {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) {
      collect(path, out);
    } else if (path.endsWith(".md") || path.endsWith(".mdx")) {
      out.push(path);
    }
  }
  return out;
}

const files = ROOTS.flatMap((root) => collect(root, []));
const offenders = [];

for (const file of files) {
  readFileSync(file, "utf8")
    .split("\n")
    .forEach((line, index) => {
      if (line.includes(EM_DASH)) {
        offenders.push(`${file}:${index + 1}: ${line.trim().slice(0, 110)}`);
      }
    });
}

if (offenders.length > 0) {
  console.error(
    `Em dash found in ${offenders.length} place(s). Use a colon, a comma, or a new sentence:\n`,
  );
  console.error(offenders.join("\n"));
  process.exit(1);
}

console.log(`No em dashes in ${files.length} files.`);
