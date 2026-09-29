import type { FontAssetType } from "fantasticon";
import type { ProductIconId } from "@/types/ProductIconMappingTypes.ts";

export interface FontSource {
  readonly path: string;
  readonly format: FontAssetType;
}

export interface FontDefinition {
  readonly id: string;
  readonly src: readonly FontSource[];
  readonly weight: "normal";
  readonly style: "normal";
}

export interface IconDefinition {
  readonly fontCharacter: string;
}

export interface ProductIconTheme {
  readonly fonts: readonly FontDefinition[];
  readonly iconDefinitions: Readonly<Record<ProductIconId, IconDefinition>>;
}
