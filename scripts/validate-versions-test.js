"use strict";

const assert = require("node:assert/strict");
const { existsSync, readFileSync, readdirSync } = require("node:fs");
const test = require("node:test");

const manifestPaths = [
  "plugin.json",
  ".codex-plugin/plugin.json",
  ".qoder-plugin/plugin.json",
  ".claude-plugin/plugin.json",
  ".claude-plugin/marketplace.json",
  ".agents/plugins/marketplace.json",
];

function readManifestVersion(manifestPath) {
  const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
  return manifest.version ?? manifest.plugins?.[0]?.version;
}

test("all plugin manifests use the root plugin.json version", () => {
  const expectedVersion = readManifestVersion("plugin.json");
  assert.ok(expectedVersion, "plugin.json must define a version");

  for (const manifestPath of manifestPaths) {
    assert.equal(
      readManifestVersion(manifestPath),
      expectedVersion,
      `${manifestPath} must use version ${expectedVersion}`,
    );
  }
});

test("Qoder manifest exposes every canonical skill without copying content", () => {
  const manifest = JSON.parse(
    readFileSync(".qoder-plugin/plugin.json", "utf8"),
  );
  assert.equal(manifest.name, "agent-skills");
  assert.equal(manifest.skills, "./skills/");

  const skills = readdirSync("skills", { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .filter((entry) => existsSync(`skills/${entry.name}/SKILL.md`));
  assert.ok(skills.length > 0, "canonical skills directory must not be empty");
});
