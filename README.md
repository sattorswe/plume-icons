# Plume Icons

A clean, rounded product icon theme for VS Code, built from [Hugeicons](https://hugeicons.com).

| Light | Dark |
| --- | --- |
| ![Plume Icons with a light theme](docs/screenshots/light-explorer.png) | ![Plume Icons with a dark theme](docs/screenshots/dark-explorer.png) |

## Installation

You need VS Code 1.139 or newer and the `code` command. To get the command, open VS Code, press `Cmd+Shift+P`, and run **Shell Command: Install 'code' command in PATH**.

**1. Install the extension**

```bash
curl -fLO https://github.com/sattorswe/plume-icons/releases/latest/download/plume-icons.vsix
code --install-extension plume-icons.vsix --force
rm plume-icons.vsix
```

**2. Turn it on**

In VS Code, press `Cmd+Shift+P`, run **Preferences: Product Icon Theme**, and choose **Plume**.

To update Plume Icons, run step 1 again.

## License

[MIT](LICENSE). Icons by [Hugeicons](https://hugeicons.com), released under the MIT License.
