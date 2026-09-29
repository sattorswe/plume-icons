import type { HugeIcon } from "@/types/HugeiconSvgTypes.ts";

export type ActivityBarIconId =
  | "explorer-view-icon"
  | "search-view-icon"
  | "source-control-view-icon"
  | "run-view-icon"
  | "extensions-view-icon"
  | "accounts-view-bar-icon"
  | "settings-view-bar-icon";

export type NavigationArrowIconId =
  | "chevron-right"
  | "chevron-left"
  | "chevron-up"
  | "chevron-down"
  | "chevron-right-compact"
  | "chevron-left-compact"
  | "chevron-up-compact"
  | "chevron-down-compact"
  | "arrow-right"
  | "arrow-left"
  | "arrow-up"
  | "arrow-down"
  | "arrow-small-right"
  | "arrow-small-left"
  | "arrow-small-up"
  | "arrow-small-down"
  | "arrow-circle-right"
  | "arrow-circle-left"
  | "arrow-circle-up"
  | "arrow-circle-down";

export type NotificationIconId = "bell" | "bell-dot" | "bell-slash" | "bell-slash-dot";

export type StatusIndicatorIconId =
  | "verified"
  | "verified-filled"
  | "warning"
  | "warning-compact"
  | "alert"
  | "error"
  | "error-compact"
  | "error-small"
  | "info"
  | "pass"
  | "pass-compact"
  | "pass-filled"
  | "pass-filled-compact"
  | "check"
  | "check-compact"
  | "check-all";

export type WorkbenchActionIconId =
  | "close"
  | "close-compact"
  | "close-small"
  | "close-all"
  | "clear-all"
  | "trash"
  | "trashcan"
  | "gear"
  | "gear-compact"
  | "settings-gear"
  | "settings"
  | "settings-compact"
  | "search"
  | "search-compact"
  | "search-new-editor"
  | "add"
  | "add-compact"
  | "add-small"
  | "plus"
  | "ellipsis"
  | "more"
  | "kebab-horizontal"
  | "kebab-vertical"
  | "refresh"
  | "refresh-compact"
  | "filter"
  | "list-filter"
  | "new-file"
  | "new-folder"
  | "collapse-all"
  | "collapse-all-compact"
  | "expand-all"
  | "copy"
  | "edit"
  | "edit-compact"
  | "pin"
  | "pinned"
  | "link-external"
  | "eye"
  | "eye-closed"
  | "lock"
  | "lock-small"
  | "git-branch"
  | "git-branch-compact"
  | "split-horizontal";

export type DebugToolbarIconId =
  | "debug-start"
  | "debug-alt"
  | "debug-run"
  | "debug-continue"
  | "debug-pause"
  | "debug-stop"
  | "debug-disconnect"
  | "debug-restart"
  | "debug-step-over"
  | "debug-step-into"
  | "debug-step-out"
  | "debug-step-back"
  | "debug-reverse-continue"
  | "debug-configure"
  | "run"
  | "play";

export type PanelIconId =
  | "terminal"
  | "terminal-view-icon"
  | "terminal-new"
  | "terminal-kill"
  | "terminal-rename"
  | "terminal-configure-profile"
  | "output-view-icon"
  | "markers-view-icon"
  | "debug-console-view-icon"
  | "ports-view-icon"
  | "panel-maximize"
  | "panel-close"
  | "screen-full"
  | "screen-normal";

export type SourceControlIconId =
  | "discard"
  | "remove"
  | "go-to-file"
  | "git-commit"
  | "git-fetch"
  | "repo-push"
  | "repo-pull"
  | "repo-sync"
  | "sync"
  | "cloud-upload"
  | "cloud-download"
  | "git-stash"
  | "git-stash-apply"
  | "git-stash-pop"
  | "git-pull-request"
  | "diff-multiple"
  | "compare-changes"
  | "list-tree"
  | "list-flat";

export type ProductIconId =
  | ActivityBarIconId
  | NavigationArrowIconId
  | NotificationIconId
  | StatusIndicatorIconId
  | WorkbenchActionIconId
  | DebugToolbarIconId
  | PanelIconId
  | SourceControlIconId;

export type ProductIconMap<Id extends ProductIconId = ProductIconId> = Readonly<Record<Id, HugeIcon>>;
