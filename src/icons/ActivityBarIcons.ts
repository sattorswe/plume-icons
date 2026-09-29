import {
  Bug02Icon,
  FileSearchCornerIcon,
  Folder03Icon,
  FolderLibraryIcon,
  GitMergeIcon,
  Settings04Icon,
  User02Icon,
} from "@hugeicons/core-free-icons";
import type { ActivityBarIconId, ProductIconMap } from "@/types/ProductIconMappingTypes.ts";

export const activityBarIcons: ProductIconMap<ActivityBarIconId> = {
  "explorer-view-icon": Folder03Icon,
  "search-view-icon": FileSearchCornerIcon,
  "source-control-view-icon": GitMergeIcon,
  "run-view-icon": Bug02Icon,
  "extensions-view-icon": FolderLibraryIcon,
  "accounts-view-bar-icon": User02Icon,
  "settings-view-bar-icon": Settings04Icon,
};
