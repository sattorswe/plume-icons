import { format } from "node:path";
import { buildConfig } from "@/BuildConfig.ts";
import { fromEntries } from "@/support/TypedObjectHelpers.ts";
import type { IconGlyph } from "@/types/IconGlyphTypes.ts";
import type { ProductIconTheme } from "@/types/ProductIconThemeTypes.ts";

export const createProductIconTheme = (glyphs: readonly IconGlyph[], fontFile: string): ProductIconTheme => ({
  fonts: [
    {
      id: buildConfig.font.name,
      src: [{ path: format({ dir: ".", base: fontFile }), format: buildConfig.font.type }],
      weight: "normal",
      style: "normal",
    },
  ],
  iconDefinitions: fromEntries(
    glyphs.flatMap(({ ids, codepoint }) =>
      ids.map((id) => [id, { fontCharacter: String.fromCodePoint(codepoint) }] as const),
    ),
  ),
});
