# Plume Icons

A clean, rounded product icon theme for VS Code, built from [Hugeicons](https://hugeicons.com).

Plume replaces the icons in the VS Code interface itself: the activity bar, toolbars, notifications, tree arrows, close buttons, and status indicators. It does not change file icons in the Explorer.

This extension is not published to the VS Code Marketplace. You build it from this repository and install it on your own machine.

## What it changes

| Area | Icons |
| --- | --- |
| Activity bar | Explorer, Search, Source Control, Run and Debug, Extensions, Accounts, Manage |
| Navigation | Chevrons, arrows, small arrows, circled arrows |
| Notifications | Bell, unread bell, Do Not Disturb |
| Status | Verified, warning, error, info, passed, check |
| Actions | Close, clear, delete, settings, search, add, more, refresh, filter, new file, new folder, collapse, expand, copy, edit, pin, open external, show, hide, lock, Git branch, split editor |

Anything not listed keeps the default VS Code icon.

## Requirements

- **VS Code** 1.139 or newer
- **[Bun](https://bun.sh)** to run the build
- **[Inkscape](https://inkscape.org)** 1.4 or newer, used to convert the icons into a font
- **The `code` command** in your terminal. In VS Code, open the Command Palette (`Cmd+Shift+P`) and run **Shell Command: Install 'code' command in PATH**.

On macOS you can install Bun and Inkscape with Homebrew:

```bash
brew install oven-sh/bun/bun
brew install --cask inkscape
```

## Install

**1. Get the code**

```bash
gh repo clone sattorswe/plume-icons
cd plume-icons
```

**2. Install dependencies**

```bash
bun install
```

**3. Build the extension package**

```bash
bun run package
```

This creates `plume-icons-0.0.1.vsix` in the project folder.

**4. Install it into VS Code**

```bash
code --install-extension plume-icons-0.0.1.vsix
```

You can delete the `.vsix` file afterwards.

**5. Turn it on**

In VS Code, open the Command Palette (`Cmd+Shift+P`), run **Preferences: Product Icon Theme**, and choose **Plume**.

Or add this line to your `settings.json`:

```json
"workbench.productIconTheme": "plume"
```

## Update

Pull the latest changes, then build and install again. The `--force` flag replaces the installed copy.

```bash
git pull
bun install
bun run package
code --install-extension plume-icons-0.0.1.vsix --force
```

Then run **Developer: Reload Window** from the Command Palette.

## Uninstall

```bash
code --uninstall-extension plume.plume-icons
```

Then set **Preferences: Product Icon Theme** back to **Default**.

## Change an icon

Icons are mapped in `src/icons/`, one file per area of the interface:

| File | Covers |
| --- | --- |
| `ActivityBarIcons.ts` | Activity bar |
| `NavigationArrowIcons.ts` | Chevrons and arrows |
| `NotificationIcons.ts` | Notification bell |
| `StatusIndicatorIcons.ts` | Verified, warning, error, info, check |
| `WorkbenchActionIcons.ts` | Toolbar and editor actions |

Each file maps a VS Code icon ID to a Hugeicons icon:

```ts
"explorer-view-icon": Folder03Icon,
```

To swap an icon:

1. Find the icon you like on [hugeicons.com](https://hugeicons.com). Free icons only.
2. Import it from `@hugeicons/core-free-icons` and set it on the ID you want to change.
3. Run `bun run typecheck` to catch typos in IDs or icon names.
4. Follow the steps in [Update](#update).

To override an icon that is not listed yet, add its ID to the matching type in `src/types/ProductIconMappingTypes.ts` first. The TypeScript compiler then asks you to map it.

## How the build works

`bun run build` turns the icon mapping into a font and a theme file inside `dist/`:

1. Groups icon IDs that share the same Hugeicons icon, so each shape is stored once.
2. Renders each icon to an SVG file.
3. Uses Inkscape to turn strokes into filled shapes, because font glyphs can only draw fills.
4. Builds a `.woff` font from the SVG files.
5. Names the font after a hash of its contents, so VS Code never shows an old cached version.
6. Writes `plume-product-icon-theme.json`, which points each icon ID at its glyph.

Build settings live in `src/BuildConfig.ts`.

## Project structure

```
src/
├── index.ts          Build entry point
├── BuildConfig.ts    Font, output, SVG, and Inkscape settings
├── actions/          One build step per file
├── icons/            VS Code icon ID to Hugeicons mappings
├── support/          Small shared helpers
└── types/            Shared TypeScript types
```

## Troubleshooting

**Icons did not change after an update.** Run **Developer: Reload Window**. If the old icons are still there, quit VS Code completely with `Cmd+Q` and open it again.

**`inkscape: command not found`.** Install Inkscape and make sure the `inkscape` command works in your terminal.

**`code: command not found`.** Run **Shell Command: Install 'code' command in PATH** from the VS Code Command Palette.

**Some icons look like the default VS Code icons.** Those icons are not mapped yet. See [Change an icon](#change-an-icon).

## Credits

Icons by [Hugeicons](https://hugeicons.com), from the free `@hugeicons/core-free-icons` package, released under the MIT License.
