import { activityBarIcons } from "@/icons/ActivityBarIcons.ts";
import { debugToolbarIcons } from "@/icons/DebugToolbarIcons.ts";
import { navigationArrowIcons } from "@/icons/NavigationArrowIcons.ts";
import { notificationIcons } from "@/icons/NotificationIcons.ts";
import { panelIcons } from "@/icons/PanelIcons.ts";
import { sourceControlIcons } from "@/icons/SourceControlIcons.ts";
import { statusIndicatorIcons } from "@/icons/StatusIndicatorIcons.ts";
import { workbenchActionIcons } from "@/icons/WorkbenchActionIcons.ts";
import type { ProductIconMap } from "@/types/ProductIconMappingTypes.ts";

export const productIconRegistry: ProductIconMap = {
  ...activityBarIcons,
  ...navigationArrowIcons,
  ...notificationIcons,
  ...statusIndicatorIcons,
  ...workbenchActionIcons,
  ...debugToolbarIcons,
  ...panelIcons,
  ...sourceControlIcons,
};
