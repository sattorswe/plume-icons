import { format } from "node:path";
import { packageProductIconTheme } from "@/actions/PackageProductIconTheme.ts";
import { buildConfig } from "@/BuildConfig.ts";

const { name, ext } = buildConfig.extension;

await packageProductIconTheme(format({ name, ext }));
