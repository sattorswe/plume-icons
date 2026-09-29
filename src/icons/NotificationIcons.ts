import { Notification01Icon, NotificationCircleIcon, NotificationOff01Icon } from "@hugeicons/core-free-icons";
import type { NotificationIconId, ProductIconMap } from "@/types/ProductIconMappingTypes.ts";

export const notificationIcons: ProductIconMap<NotificationIconId> = {
  bell: Notification01Icon,
  "bell-dot": NotificationCircleIcon,
  "bell-slash": NotificationOff01Icon,
  "bell-slash-dot": NotificationOff01Icon,
};
