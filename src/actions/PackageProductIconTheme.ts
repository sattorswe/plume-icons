import { buildProductIconTheme } from "@/actions/BuildProductIconTheme.ts";
import { buildConfig } from "@/BuildConfig.ts";
import { runCommand } from "@/support/ProcessHelpers.ts";

export const packageProductIconTheme = async (vsix: string): Promise<void> => {
  await buildProductIconTheme();
  await runCommand([...buildConfig.extension.package, vsix]);
};
