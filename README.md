# dxckie-cell plugins for Revenge Next

Three Revenge Next plugins in one repository.

## Install

Add this repository in Revenge's plugin repository settings:

https://dxckie-cell.github.io/revenge-next-plugins

Then install the plugins you want and reload Revenge.

## Plugins

| Plugin | ID | What it does |
|---|---|---|
| BetterInvites | `dxckie.better-invites` | See invite expiry, view the inviter's profile and preview servers before joining. Long-press a message with an invite link and tap **Invite info**. |
| CopyStatus | `dxckie.copystatus` | Long-press a user's custom status on their profile to select and copy the text. |
| HideMessages | `dxckie.hide-messages` | Temporarily hide messages until you restart. |

## Development

```sh
bun install
bun run package
bun run serve
```

Add the repository URL printed by the server to Revenge on your device. The device must be able to reach your computer.

```sh
bun run lint:types
bunx biome check plugins scripts
```

## Releasing

Bump `version` in a plugin's `plugins/<name>/manifest.json` and push to `main`. The Release workflow builds the plugin, publishes it to the `gh-pages` pool and redeploys the repository index.

Original standalone repositories: [Better-Invites](https://github.com/dxckie-cell/Better-Invites), [Copy-Status](https://github.com/dxckie-cell/Copy-Status), [Hide-Messages](https://github.com/dxckie-cell/Hide-Messages).

Licensed under GPL-3.0.
