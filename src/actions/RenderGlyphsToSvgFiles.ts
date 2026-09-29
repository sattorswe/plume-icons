import { format } from "node:path";
import { create } from "xmlbuilder2";
import { buildConfig } from "@/BuildConfig.ts";
import { kebabCase } from "@/support/StringCaseHelpers.ts";
import type { HugeIcon, IconAttributes } from "@/types/HugeiconSvgTypes.ts";
import type { IconGlyph } from "@/types/IconGlyphTypes.ts";

const ignoredAttributes: ReadonlySet<string> = new Set(["key"]);

const normalizeAttributes = (attributes: IconAttributes): Record<string, string> =>
  Object.fromEntries(
    Object.entries(attributes)
      .filter(([name]) => !ignoredAttributes.has(name))
      .map(([name, value]) => [kebabCase(name), String(value)]),
  );

const renderSvg = (icon: HugeIcon): string => {
  const svg = create().ele(buildConfig.svg.namespace, "svg", buildConfig.svg.attributes);
  icon.forEach(([tag, attributes]) => svg.ele(tag, normalizeAttributes(attributes)));

  return svg.end({ headless: true });
};

export const renderGlyphsToSvgFiles = (dir: string, glyphs: readonly IconGlyph[]): Promise<string[]> =>
  Promise.all(
    glyphs.map(async ({ name, icon }) => {
      const file = format({ dir, name, ext: buildConfig.svg.extension });
      await Bun.write(file, renderSvg(icon));

      return file;
    }),
  );
