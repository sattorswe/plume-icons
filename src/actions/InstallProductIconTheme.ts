import { format } from "node:path";
import { packageProductIconTheme } from "@/actions/PackageProductIconTheme.ts";
import { buildConfig } from "@/BuildConfig.ts";
import { withTempDir } from "@/support/DirectoryHelpers.ts";
import { runCommand } from "@/support/ProcessHelpers.ts";

export const installProductIconTheme = async (): Promise<void> => {
  const { name, ext, install } = buildConfig.extension;

  await withTempDir(buildConfig.workspace.prefix, async (workspace) => {
    const vsix = format({ dir: workspace, name, ext });

    await packageProductIconTheme(vsix);
    await runCommand([...install, vsix]);
  });
};
