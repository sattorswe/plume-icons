import { activityBarIcons } from "@/icons/ActivityBarIcons.ts";
import { navigationArrowIcons } from "@/icons/NavigationArrowIcons.ts";
import { notificationIcons } from "@/icons/NotificationIcons.ts";
import { statusIndicatorIcons } from "@/icons/StatusIndicatorIcons.ts";
import { workbenchActionIcons } from "@/icons/WorkbenchActionIcons.ts";
import type { ProductIconMap } from "@/types/ProductIconMappingTypes.ts";

export const productIconRegistry: ProductIconMap = {
  ...activityBarIcons,
  ...navigationArrowIcons,
  ...notificationIcons,
  ...statusIndicatorIcons,
  ...workbenchActionIcons,
};
