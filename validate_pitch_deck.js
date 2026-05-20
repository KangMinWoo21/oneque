const fs = require("fs");
const path = require("path");

const BUNDLED_NODE_MODULES = "C:\\Users\\KangMinWoo\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\node\\node_modules";
const BUNDLED_PNPM_ROOT_MODULES = path.join(BUNDLED_NODE_MODULES, ".pnpm", "node_modules");
process.env.NODE_PATH = [process.env.NODE_PATH, BUNDLED_NODE_MODULES, BUNDLED_PNPM_ROOT_MODULES].filter(Boolean).join(path.delimiter);
require("module").Module._initPaths();

const sharp = require("sharp");
const JSZip = require("jszip");

async function main() {
  const out = "C:\\Users\\KangMinWoo\\Documents\\모두의 창업\\outputs\\ai_influencer_pitch";
  const ppt = path.join(out, "청주_AI_인플루언서_광고_플랫폼_발표자료.pptx");
  const html = path.join(out, "청주_AI_인플루언서_광고_플랫폼_발표자료.html");
  const slideDir = path.join(out, "slides");
  const imgs = fs.readdirSync(slideDir).filter((f) => f.endsWith(".png")).sort();
  const dims = [];
  for (const f of imgs) {
    const m = await sharp(path.join(slideDir, f)).metadata();
    dims.push(`${f}:${m.width}x${m.height}`);
  }
  const zip = await JSZip.loadAsync(fs.readFileSync(ppt));
  const slideXml = Object.keys(zip.files).filter((k) => /^ppt\/slides\/slide\d+\.xml$/.test(k));
  const media = Object.keys(zip.files).filter((k) => /^ppt\/media\//.test(k));
  console.log(JSON.stringify({
    htmlExists: fs.existsSync(html),
    pptxExists: fs.existsSync(ppt),
    pptxBytes: fs.statSync(ppt).size,
    pngCount: imgs.length,
    slideXmlCount: slideXml.length,
    mediaCount: media.length,
    allPng2xWide: dims.every((x) => x.includes("2560x1440")),
    sampleDims: dims.slice(0, 3),
  }, null, 2));
}

main().catch((err) => {
  console.error(err && err.stack ? err.stack : err);
  process.exit(1);
});
