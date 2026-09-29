import {
  Alert02Icon,
  CancelCircleIcon,
  CommandLineIcon,
  ConsoleIcon,
  Delete02Icon,
  LeftToRightListDashIcon,
  Maximize01Icon,
  Minimize01Icon,
  PencilEdit02Icon,
  PlugSocketIcon,
  PlusSignCircleIcon,
  Settings04Icon,
} from "@hugeicons/core-free-icons";
import type { PanelIconId, ProductIconMap } from "@/types/ProductIconMappingTypes.ts";

export const panelIcons: ProductIconMap<PanelIconId> = {
  terminal: CommandLineIcon,
  "terminal-view-icon": CommandLineIcon,
  "terminal-new": PlusSignCircleIcon,
  "terminal-kill": Delete02Icon,
  "terminal-rename": PencilEdit02Icon,
  "terminal-configure-profile": Settings04Icon,
  "output-view-icon": LeftToRightListDashIcon,
  "markers-view-icon": Alert02Icon,
  "debug-console-view-icon": ConsoleIcon,
  "ports-view-icon": PlugSocketIcon,
  "panel-maximize": Maximize01Icon,
  "panel-close": CancelCircleIcon,
  "screen-full": Maximize01Icon,
  "screen-normal": Minimize01Icon,
};
