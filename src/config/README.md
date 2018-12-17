# WARNING!
> This documentation is not complete. It's in progress and it's a
BETA version. Use the tool at your own risk.

# @mhy/config
This lib is a collection of all configuration and UI panels (ecosystem)
 `@mhy` uses.

# Config
Load configuration based on the current environment from folders
(see repo) and/or from a project's `package.json` file.
The final object structure is being represented in the
directory/package.json structure. (see repo)

Config options are being separated into environments. By default `@mhy`
uses **root** (always used), **development** and **production**.

# Examples
```
// Dir structure
foo
  index.js
  development
      bar.js => exports 1
  production
      baz.js => exports 2
  root
      fip.js => exports 3
```

API
```
import { load } from '@mhy/config'

load('foo')
```

CLI
```
mhy config foo
```

Output
```
{
    bar: 1,
    fip: 3
}
*/
```

> `baz` is missing because `development` env is default thus it's not
being loaded.

Defining env
```
// *nix
NODE_ENV=production mhy config foo

// Windows
set NODE_ENV=production&& mhy config foo // not a typo, no space needed there!
```

## CLI
It'll return the configuration object being used from `@mhy/config`.

```
// Print out config
mhy config webpack

// Print out config in different format
mhy config babel -f json
mhy config babel --format=json

// Print out config in different format and save into a file
mhy config babel -f json >> .babelrc
```

## Custom overrides

### `using files/folders`
Structure
```
webpack
  development
     devServer.js
```

devServer.js file
```
module.exports = (defaults) => ({
    ...defaults,
    host: 'my-host.com'
})
```

### Using `package.json`
package.json file
```
{
    ...
    "mhy" {
       "webpack": {
           "development": {
               "devServer": {
                   "host": "my-host.com"
               }
           }
       }
    }
    ...
}
```

### Flow
1. Load **root** config from package dir/files.
2. Load **env** config from package dir/files.
3. Load **root** config from project `package.json`.
4. Load **env** config from project `package.json`.

# UI
UIs are basically built-in ecosystem tasks. You can run all of them
at once or separately.
```
// Run ecosystem (ui) (default)
mhy
mhy ui

// Run specific ui process only
mhy webpack-dev-server
mhy run webpack-dev-server

// Run specific process only with specific task
mhy jest watch
mhy run jest watch
```

## Navigation with-in UI
- `Tab` change active panel
- `Left/Right arrow` select action
- `Enter` run selected action
- `Up/Down arrow` scroll up/down in the selected panel

## UI Panels
By default the following panels are enabled when you simply run `mhy`:
- `jest`
- `storybook-start`
- `webpack-dev-server`
- `tsc`

Disabled by default:
- `prettier` `webpack-dev-server` already handles it, but it can be
useful to run it before pushing commits and such.

However, you can can explicitly enable/disable panels in `package.json`
per environment, or explicitly tell which panels to run in CLI.

```
mhy ui prettier storybook-start
```

### Enabling panels
```
"mhy": {
    "ui": {
        "root": {
            "enabled": [
                "prettier"
            ]
        }
    }
}
```

### Disabling panels
```
"mhy": {
    "ui": {
        "root": {
            "disabled": [
                "tsc"
            ]
        }
    }
}
```