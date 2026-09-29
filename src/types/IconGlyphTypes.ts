import type { HugeIcon } from "@/types/HugeiconSvgTypes.ts";
import type { ProductIconId } from "@/types/ProductIconMappingTypes.ts";

export interface IconGlyph {
  readonly name: string;
  readonly icon: HugeIcon;
  readonly codepoint: number;
  readonly ids: readonly ProductIconId[];
}
