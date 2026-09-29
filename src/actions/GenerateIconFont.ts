import { format } from "node:path";
import { generateFonts } from "fantasticon";
import { buildConfig } from "@/BuildConfig.ts";
import { fromEntries } from "@/support/TypedObjectHelpers.ts";
import type { IconGlyph } from "@/types/IconGlyphTypes.ts";

export const generateIconFont = async (workspace: string, glyphs: readonly IconGlyph[]): Promise<string> => {
  await generateFonts({
    name: buildConfig.font.name,
    inputDir: workspace,
    outputDir: workspace,
    fontTypes: [buildConfig.font.type],
    assetTypes: [],
    codepoints: fromEntries(glyphs.map(({ name, codepoint }) => [name, codepoint] as const)),
  });

  return format({ dir: workspace, name: buildConfig.font.name, ext: buildConfig.font.type });
};
