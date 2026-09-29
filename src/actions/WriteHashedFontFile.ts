import { format } from "node:path";
import { buildConfig } from "@/BuildConfig.ts";

export const writeHashedFontFile = async (source: string): Promise<string> => {
  const font = await Bun.file(source).bytes();
  const file = format({ name: Bun.hash(font).toString(16), ext: buildConfig.font.type });

  await Bun.write(format({ dir: buildConfig.output.dir, base: file }), font);

  return file;
};
