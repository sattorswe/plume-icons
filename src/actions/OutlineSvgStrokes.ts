import { buildConfig } from "@/BuildConfig.ts";

const processOptions = { stdout: "ignore", stderr: "pipe" } as const;

export const outlineSvgStrokes = async (files: readonly string[]): Promise<void> => {
  const inkscape = Bun.spawn([...buildConfig.inkscape.command, ...files], processOptions);

  if ((await inkscape.exited) !== 0) {
    throw new Error(await new Response(inkscape.stderr).text());
  }
};
