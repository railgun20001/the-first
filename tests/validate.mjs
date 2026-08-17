import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const failures = [];
const unresolvedPlaceholder = "[TO" + "DO";

function check(condition, message) {
  if (!condition) failures.push(message);
}

function read(relativePath) {
  const absolutePath = path.join(repoRoot, relativePath);
  check(fs.existsSync(absolutePath), `Missing file: ${relativePath}`);
  return fs.existsSync(absolutePath) ? fs.readFileSync(absolutePath, "utf8") : "";
}

function readJson(relativePath) {
  const content = read(relativePath);
  try {
    return JSON.parse(content);
  } catch (error) {
    failures.push(`Invalid JSON in ${relativePath}: ${error.message}`);
    return {};
  }
}

function parseSkillFrontmatter(relativePath) {
  const content = read(relativePath).replaceAll("\r\n", "\n");
  const match = content.match(/^---\n([\s\S]*?)\n---\n/);
  check(Boolean(match), `Missing YAML frontmatter in ${relativePath}`);
  if (!match) return { content, metadata: {} };

  const metadata = {};
  for (const line of match[1].split("\n")) {
    const separator = line.indexOf(":");
    check(separator > 0, `Invalid frontmatter line in ${relativePath}: ${line}`);
    if (separator <= 0) continue;
    const key = line.slice(0, separator).trim();
    let value = line.slice(separator + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    metadata[key] = value;
  }
  return { content, metadata };
}

function walk(directory) {
  const entries = fs.readdirSync(directory, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const absolutePath = path.join(directory, entry.name);
    if (entry.name === ".git") return [];
    return entry.isDirectory() ? walk(absolutePath) : [absolutePath];
  });
}

function validateMarkdownLinks(absolutePath) {
  const content = fs.readFileSync(absolutePath, "utf8");
  const relativeSource = path.relative(repoRoot, absolutePath);
  const linkPattern = /\[[^\]]*\]\(([^)]+)\)/g;
  for (const match of content.matchAll(linkPattern)) {
    let target = match[1].trim().replace(/^<|>$/g, "");
    if (!target || /^(https?:|mailto:|codex:|#)/i.test(target)) continue;
    target = target.split("#", 1)[0];
    const resolved = path.resolve(path.dirname(absolutePath), target);
    check(fs.existsSync(resolved), `Broken relative link in ${relativeSource}: ${match[1]}`);
  }
}

const expectedVersion = "0.1.1";
const expectedSkills = [
  "clarify-project-requirements",
  "deploy-project",
  "design-product-experience",
  "design-technical-solution",
  "develop-in-stages",
  "guard-artifact-scope",
  "track-project-progress",
  "using-the-first",
];

const codexPlugin = readJson(".codex-plugin/plugin.json");
const codexMarketplace = readJson(".agents/plugins/marketplace.json");
const claudePlugin = readJson(".claude-plugin/plugin.json");
const claudeMarketplace = readJson(".claude-plugin/marketplace.json");

check(codexPlugin.name === "the-first", "Codex plugin name must be the-first");
check(claudePlugin.name === "the-first", "Claude plugin name must be the-first");
check(codexPlugin.version === expectedVersion, `Codex version must be ${expectedVersion}`);
check(claudePlugin.version === expectedVersion, `Claude version must be ${expectedVersion}`);
check(codexPlugin.skills === "./skills/", "Codex must use the shared ./skills/ directory");
check(codexPlugin.license === "MIT" && claudePlugin.license === "MIT", "Plugin licenses must be MIT");
check(codexPlugin.interface?.displayName === "The First", "Codex display name must be The First");
check(codexMarketplace.name === "the-first", "Codex marketplace name must be the-first");
check(codexMarketplace.plugins?.length === 1, "Codex marketplace must expose exactly one plugin");
check(codexMarketplace.plugins?.[0]?.name === "the-first", "Codex marketplace plugin name mismatch");
check(codexMarketplace.plugins?.[0]?.source?.url === "./", "Codex marketplace must reference the repository root");
check(codexMarketplace.plugins?.[0]?.policy?.installation === "AVAILABLE", "Codex installation policy must be AVAILABLE");
check(codexMarketplace.plugins?.[0]?.policy?.authentication === "ON_INSTALL", "Codex authentication policy must be ON_INSTALL");
check(claudeMarketplace.name === "the-first", "Claude marketplace name must be the-first");
check(claudeMarketplace.plugins?.length === 1, "Claude marketplace must expose exactly one plugin");
check(claudeMarketplace.plugins?.[0]?.name === "the-first", "Claude marketplace plugin name mismatch");
check(claudeMarketplace.plugins?.[0]?.version === expectedVersion, "Claude marketplace version mismatch");
check(claudeMarketplace.plugins?.[0]?.source === "./", "Claude marketplace must reference the repository root");

const skillRoot = path.join(repoRoot, "skills");
const actualSkills = fs.readdirSync(skillRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();
check(JSON.stringify(actualSkills) === JSON.stringify(expectedSkills), `Unexpected skill set: ${actualSkills.join(", ")}`);

const skillBodies = new Set();
for (const skillName of expectedSkills) {
  const skillPath = `skills/${skillName}/SKILL.md`;
  const { content, metadata } = parseSkillFrontmatter(skillPath);
  check(metadata.name === skillName, `Skill name mismatch in ${skillPath}`);
  check(typeof metadata.description === "string" && metadata.description.length >= 80, `Skill description is not informative in ${skillPath}`);
  check(Object.keys(metadata).sort().join(",") === "description,name", `Skill frontmatter must contain only name and description in ${skillPath}`);
  check(!content.includes(unresolvedPlaceholder), `Unresolved TODO placeholder in ${skillPath}`);
  const normalizedBody = content.replace(/^---[\s\S]*?---\s*/, "").replaceAll(/\s+/g, " ").trim();
  check(!skillBodies.has(normalizedBody), `Duplicated skill body in ${skillPath}`);
  skillBodies.add(normalizedBody);

  const agentMetadata = read(`skills/${skillName}/agents/openai.yaml`);
  check(agentMetadata.includes(`$${skillName}`), `Default prompt must name $${skillName}`);
}

const usingSkill = read("skills/using-the-first/SKILL.md");
for (const required of [
  "Start with evidence",
  "Treat a first response that asks for a framework",
  "Only explicit human acceptance",
  "$clarify-project-requirements",
  "$design-product-experience",
  "$design-technical-solution",
  "$develop-in-stages",
  "$deploy-project",
  "$track-project-progress",
  "$guard-artifact-scope",
  "without adding a phase or acceptance gate",
]) check(usingSkill.includes(required), `using-the-first is missing contract: ${required}`);

const guardSkill = read("skills/guard-artifact-scope/SKILL.md");
for (const required of [
  "Constraints may govern an artifact without becoming content in that artifact",
  "Do not create a new phase, gate, status, or confirmation step",
  "A documentation sentence can satisfy a requirement only when",
  "Never report a non-documentation requirement as implemented",
]) check(guardSkill.includes(required), `Artifact scope guard is missing contract: ${required}`);
check(
  read("skills/guard-artifact-scope/agents/openai.yaml").includes("allow_implicit_invocation: true"),
  "Artifact scope guard must allow implicit invocation",
);

const requirementsSkill = read("skills/clarify-project-requirements/SKILL.md");
for (const required of ["goal → verified facts", "Brand or public product name", "awaiting_user_acceptance"])
  check(requirementsSkill.includes(required), `Requirement workflow is missing contract: ${required}`);

const experienceSkill = read("skills/design-product-experience/SKILL.md");
for (const required of ["static mock data only", "Do not implement a production backend", "explicit consent", "awaiting_user_acceptance"])
  check(experienceSkill.includes(required), `Experience workflow is missing contract: ${required}`);

const technicalSkill = read("skills/design-technical-solution/SKILL.md");
for (const required of ["Design preliminary deployment now", "Once the technical solution is accepted", "Ask for explicit consent"])
  check(technicalSkill.includes(required), `Technical workflow is missing contract: ${required}`);

const developmentSkill = read("skills/develop-in-stages/SKILL.md");
for (const required of [
  "one active slice",
  "Recommended user action",
  "Distill requested changes",
  "git diff --cached --check",
  "Never push unless",
  "A documentation sentence can satisfy a requirement only when",
]) check(developmentSkill.includes(required), `Development workflow is missing contract: ${required}`);

const deploymentSkill = read("skills/deploy-project/SKILL.md");
for (const required of ["Request exact authorization", "Production technical validation", "Production business acceptance", "rollback"])
  check(deploymentSkill.includes(required), `Deployment workflow is missing contract: ${required}`);

const progressSkill = read("skills/track-project-progress/SKILL.md");
for (const required of ["the_first_schema: 1", "Distill feedback", "structural_migration", "Next conversation"])
  check(progressSkill.includes(required), `Progress workflow is missing contract: ${required}`);

const stateTemplate = read("skills/using-the-first/references/the-first-template.md");
for (const required of [
  "the_first_schema: 1",
  "phase: requirements",
  "status: in_progress",
  "documentation_mode: index_only",
  "active_slice: null",
  "## Sources of truth",
  "## User feedback and regression rules",
  "## Recent verification evidence",
  "## Next conversation",
]) check(stateTemplate.includes(required), `THE-FIRST template is missing: ${required}`);

const readmeZh = read("README.md").replaceAll("\r\n", "\n");
const readmeEn = read("README.en.md").replaceAll("\r\n", "\n");
check(readmeZh.startsWith("# The First\n"), "Chinese README title must be exactly The First");
check(readmeEn.startsWith("# The First\n"), "English README title must be exactly The First");
check(readmeZh.includes("[English](README.en.md)"), "Chinese README must link to English README");
check(readmeEn.includes("[中文](README.md)"), "English README must link to Chinese README");
check(readmeZh.includes("`guard-artifact-scope`"), "Chinese README must list guard-artifact-scope");
check(readmeEn.includes("`guard-artifact-scope`"), "English README must list guard-artifact-scope");
check(
  !readmeZh.split("\n## ", 1)[0].includes("Superpowers"),
  "Chinese README introduction must not frame The First through Superpowers",
);
check(
  !readmeEn.split("\n## ", 1)[0].includes("Superpowers"),
  "English README introduction must not frame The First through Superpowers",
);
check(read("LICENSE").startsWith("MIT License"), "LICENSE must contain the MIT license");

for (const forbiddenPath of [".mcp.json", ".app.json", "hooks", "assets", "package.json"]) {
  check(!fs.existsSync(path.join(repoRoot, forbiddenPath)), `Unrequested runtime component exists: ${forbiddenPath}`);
}

const sourceFiles = walk(repoRoot).filter((absolutePath) => !absolutePath.includes(`${path.sep}.git${path.sep}`));
for (const absolutePath of sourceFiles) {
  const content = fs.readFileSync(absolutePath, "utf8");
  check(!content.includes(unresolvedPlaceholder), `Unresolved TODO placeholder in ${path.relative(repoRoot, absolutePath)}`);
  if (absolutePath.endsWith(".md")) validateMarkdownLinks(absolutePath);
}

if (failures.length > 0) {
  console.error(`Validation failed with ${failures.length} issue(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Validated The First ${expectedVersion}: ${expectedSkills.length} skills, manifests, contracts, and Markdown links.`);
