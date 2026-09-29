import { buildConfig } from "@/BuildConfig.ts";
import { keys } from "@/support/TypedObjectHelpers.ts";
import type { IconGlyph } from "@/types/IconGlyphTypes.ts";
import type { ProductIconMap } from "@/types/ProductIconMappingTypes.ts";

export const collectUniqueGlyphs = (icons: ProductIconMap): IconGlyph[] =>
  [...Map.groupBy(keys(icons), (id) => icons[id])].map(([icon, ids], index) => {
    const codepoint = buildConfig.font.codepointStart + index;

    return { name: codepoint.toString(16), icon, codepoint, ids };
  });
