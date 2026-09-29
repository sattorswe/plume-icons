import { collectUniqueGlyphs } from "@/actions/CollectUniqueGlyphs.ts";
import { createProductIconTheme } from "@/actions/CreateProductIconTheme.ts";
import { generateIconFont } from "@/actions/GenerateIconFont.ts";
import { outlineSvgStrokes } from "@/actions/OutlineSvgStrokes.ts";
import { renderGlyphsToSvgFiles } from "@/actions/RenderGlyphsToSvgFiles.ts";
import { writeHashedFontFile } from "@/actions/WriteHashedFontFile.ts";
import { buildConfig } from "@/BuildConfig.ts";
import { productIconRegistry } from "@/icons/ProductIconRegistry.ts";
import { resetDir, withTempDir } from "@/support/DirectoryHelpers.ts";

export const buildProductIconTheme = async (): Promise<void> => {
  const glyphs = collectUniqueGlyphs(productIconRegistry);

  await resetDir(buildConfig.output.dir);

  const fontFile = await withTempDir(buildConfig.workspace.prefix, async (workspace) => {
    await outlineSvgStrokes(await renderGlyphsToSvgFiles(workspace, glyphs));

    return writeHashedFontFile(await generateIconFont(workspace, glyphs));
  });

  await Bun.write(
    buildConfig.output.theme,
    JSON.stringify(createProductIconTheme(glyphs, fontFile), null, buildConfig.output.indent),
  );
};
