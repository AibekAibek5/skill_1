// Shared rules for check.mjs: the spec's IDs, the repo's test files, and which quoted IDs are live test names.
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";

const TEST_FILE = /(^|\/)(tests?|__tests__)\/|\.(test|spec)\.|(^|\/)test_|_test\./;
const PAREN_FILE = /\.([cm]?[jt]sx?|go)$/;
const DEF = /^\s*(async\s+)?def /;
const SKIP_DECORATOR = /^\s*@(pytest\.mark|unittest)\.skip/;
const IGNORED = /^\s*(\/\/|\/\*|\*|#)|(^|[^\w])(xit|xtest)\(|\.(skip|todo|failing)\(|\b(skip|todo)\s*:\s*(true|["'`])/;

/** The spec's live stories ({id, requirement}, dropped ones excluded) and the IDs its seam table waives. */
export function readSpec(text) {
  const stories = [...text.matchAll(/^\s*\d+\.\s+(([A-Z]{2,5}-\d+):.*)$/gm)]
    .filter(([line]) => !line.includes("(dropped)"))
    .map(([, requirement, id]) => ({ id, requirement }));
  const waived = new Set(text.split("\n").filter((l) => /^\|\s*waived/.test(l))
    .flatMap((l) => l.split("|")[2].match(/[A-Z]{2,5}-\d+/g) ?? []));
  return { stories, waived };
}

/** Test files git knows about, tracked or not, minus ignored ones. */
export function testFiles() {
  return execFileSync("git", ["ls-files", "--cached", "--others", "--exclude-standard"], { encoding: "utf8" })
    .split("\n").filter((f) => TEST_FILE.test(f) && !f.endsWith(".md"));
}

/** Python: the nearest `def` at or above line i. */
function defAbove(lines, i) {
  while (i > 0 && !DEF.test(lines[i])) i--;
  return i;
}

/** Commented out or skipped: by the tagged line, the line above when the tag starts its line, or a Python skip decorator. */
function ignored(lines, i, col) {
  const above = lines.slice(0, i).findLast((l) => l.trim()) ?? "";
  const opener = lines[i].slice(0, col).trim() ? lines[i] : above + lines[i];
  if (IGNORED.test(opener)) return true;
  let d = defAbove(lines, i);
  while (d > 0 && lines[d - 1].trim().startsWith("@")) if (SKIP_DECORATOR.test(lines[--d])) return true;
  return false;
}

const JS_OPENER = /(^|[^\w.])(it|test)(\.\w+)*(\(.*\))?\(\s*$/;
const GO_OPENER = /\b\w+\.Run\(\s*$/;
const PY_DOCSTRING = /^\s*[rRuU]?["']{0,2}$/;

/** Is the quoted ID at column col a test name: the first argument of `it(`/`test(`/`t.Run(`, or a pytest docstring's first line? Other languages: any quoted string. */
function isTestName(file, lines, i, col) {
  const before = lines[i].slice(0, col);
  const above = lines.slice(0, i).findLast((l) => l.trim()) ?? "";
  const opener = before.trim() ? before : above;
  if (file.endsWith(".py")) return PY_DOCSTRING.test(before) && /^\s*(async\s+)?def test_/.test(above);
  if (file.endsWith(".go")) return GO_OPENER.test(opener);
  if (PAREN_FILE.test(file)) return JS_OPENER.test(opener);
  return true;
}


const TAG = /["'`]([A-Z]{2,5}-\d+):/g;
const JS_TEST = /(^|[^\w.])(it|test)\(\s*(["'`]|$)/;
const GO_SUBTEST = /\bt\.Run\(\s*["'`]/;
const COMMENT = /^\s*(\/\/|\/\*|\*|#)/;

/** IDs tagged on at least one test that is neither commented out nor skipped. */
export function taggedIds(files) {
  const ids = new Set();
  for (const file of files) {
    const lines = readFileSync(file, "utf8").split("\n");
    lines.forEach((line, i) => {
      for (const m of line.matchAll(TAG)) if (isTestName(file, lines, i, m.index) && !ignored(lines, i, m.index)) ids.add(m[1]);
    });
  }
  return ids;
}

const nextLine = (lines, i) => lines.slice(i + 1).find((l) => l.trim()) ?? "";
const hasTag = (text) => new RegExp(TAG.source).test(text);

/** Test declarations with no ID, as `file:line:text`: JS/TS `it(`/`test(`, a pytest `def test_` (tag in the docstring), a Go `t.Run(`, or a Go `func Test` with no subtest. */
export function untagged(files) {
  return files.flatMap((file) => {
    const lines = readFileSync(file, "utf8").split("\n");
    return lines.flatMap((line, i) => {
      if (COMMENT.test(line)) return [];
      const named = JS_TEST.test(line) ? hasTag(/\(\s*$/.test(line) ? line + nextLine(lines, i) : line)
        : DEF.test(line) && /def test_/.test(line) ? hasTag(nextLine(lines, i))
        : GO_SUBTEST.test(line) ? hasTag(line)
        : /^func Test/.test(line) ? lines.slice(i + 1, nextFunc(lines, i)).some((l) => GO_SUBTEST.test(l))
        : true;
      return named ? [] : [`${file}:${i + 1}:${line}`];
    });
  });
}

function nextFunc(lines, i) {
  const end = lines.findIndex((l, j) => j > i && /^func /.test(l));
  return end === -1 ? lines.length : end;
}
