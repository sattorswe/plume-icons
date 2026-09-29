import {
  ArrowReloadHorizontalIcon,
  ArrowTurnBackwardIcon,
  ArrowTurnDownIcon,
  ArrowTurnForwardIcon,
  ArrowTurnUpIcon,
  PauseIcon,
  PlayCircleIcon,
  PlayIcon,
  PreviousIcon,
  Settings04Icon,
  StopIcon,
  Unlink02Icon,
} from "@hugeicons/core-free-icons";
import type { DebugToolbarIconId, ProductIconMap } from "@/types/ProductIconMappingTypes.ts";

export const debugToolbarIcons: ProductIconMap<DebugToolbarIconId> = {
  "debug-start": PlayCircleIcon,
  "debug-alt": PlayCircleIcon,
  "debug-run": PlayIcon,
  "debug-continue": PlayIcon,
  "debug-pause": PauseIcon,
  "debug-stop": StopIcon,
  "debug-disconnect": Unlink02Icon,
  "debug-restart": ArrowReloadHorizontalIcon,
  "debug-step-over": ArrowTurnForwardIcon,
  "debug-step-into": ArrowTurnDownIcon,
  "debug-step-out": ArrowTurnUpIcon,
  "debug-step-back": ArrowTurnBackwardIcon,
  "debug-reverse-continue": PreviousIcon,
  "debug-configure": Settings04Icon,
  run: PlayIcon,
  play: PlayIcon,
};
