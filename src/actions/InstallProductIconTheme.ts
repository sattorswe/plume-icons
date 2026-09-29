import { format } from "node:path";
import { buildProductIconTheme } from "@/actions/BuildProductIconTheme.ts";
import { buildConfig } from "@/BuildConfig.ts";
import { withTempDir } from "@/support/DirectoryHelpers.ts";
import { runCommand } from "@/support/ProcessHelpers.ts";

export const installProductIconTheme = async (): Promise<void> => {
  const { name, ext, package: packageCommand, install: installCommand } = buildConfig.extension;

  await buildProductIconTheme();
  await withTempDir(buildConfig.workspace.prefix, async (workspace) => {
    const vsix = format({ dir: workspace, name, ext });

    await runCommand([...packageCommand, vsix]);
    await runCommand([...installCommand, vsix]);
  });
};
