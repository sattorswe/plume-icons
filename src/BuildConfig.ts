import { tmpdir } from "node:os";
import { resolve } from "node:path";
import { FontAssetType } from "fantasticon";

export const buildConfig = {
  font: { name: "plume", type: FontAssetType.WOFF, codepointStart: 0xf101 },
  output: { dir: "dist", theme: "dist/plume-product-icon-theme.json", indent: 2 },
  workspace: { prefix: resolve(tmpdir(), "plume-icons-") },
  svg: { extension: "svg", namespace: "http://www.w3.org/2000/svg", attributes: { viewBox: "0 0 24 24", width: 24, height: 24, fill: "none" } },
  extension: {
    name: "plume-icons",
    ext: ".vsix",
    package: ["vsce", "package", "--no-dependencies", "--allow-missing-repository", "--skip-license", "--out"],
    install: ["code", "--force", "--install-extension"],
  },
  inkscape: { command: ["inkscape", "--actions", "select-all:all;object-stroke-to-path;export-plain-svg;export-overwrite;export-do"] },
} as const;
