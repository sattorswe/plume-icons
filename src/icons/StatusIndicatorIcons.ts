import {
  Alert02Icon,
  AlertCircleIcon,
  BadgeCheckIcon,
  CheckmarkCircle02Icon,
  InformationCircleIcon,
  Tick02Icon,
  TickDouble02Icon,
} from "@hugeicons/core-free-icons";
import type { ProductIconMap, StatusIndicatorIconId } from "@/types/ProductIconMappingTypes.ts";

export const statusIndicatorIcons: ProductIconMap<StatusIndicatorIconId> = {
  verified: BadgeCheckIcon,
  "verified-filled": BadgeCheckIcon,
  warning: Alert02Icon,
  "warning-compact": Alert02Icon,
  alert: Alert02Icon,
  error: AlertCircleIcon,
  "error-compact": AlertCircleIcon,
  "error-small": AlertCircleIcon,
  info: InformationCircleIcon,
  pass: CheckmarkCircle02Icon,
  "pass-compact": CheckmarkCircle02Icon,
  "pass-filled": CheckmarkCircle02Icon,
  "pass-filled-compact": CheckmarkCircle02Icon,
  check: Tick02Icon,
  "check-compact": Tick02Icon,
  "check-all": TickDouble02Icon,
};
