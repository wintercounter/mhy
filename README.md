![mhy](https://img.shields.io/badge/-mhy-000000.svg?logo=dev.to&longCache=true&style=popout-square&colorA=000000&colorB=F80046&logoColor=ffffff&logoWidth=20&link=https://github.com/wintercounter/mhy)

# WARNING!
> This documentation is not complete. It's in progress and it's a
BETA version. Use the tool at your own risk. Sometimes you might only
see keyword and code samples thrown in it. Pull requests are welcome!

# Introduction
MHY (my) is suppose to be a development/production environment/compiler
 out-of the box. I just simply had enough of having multiple
instances of the same npm packages on my machine, the need to setup
a development environment,
the need to configure a bunch of stuff, the need to store my scripts
online somewhere if I want to quickly test something, the need to open
up multiple terminals and start commands separately.
This is MHY development environment, how I like it/want it to be,
instantly, anywhere, simply (or it's goal least...)

# Problems it tries to resolve
- 0C
- Out-of-the box
- Portability
- Simple config building/overriding
- Using package.json for simple configs
- Boot templates
- No more multiple installs
- Single terminal to run all
- Less boilerplate
- UI
- CLI
- Unified linting
- Faster deployments using prebuilt and public docker images
- Providing commonly used packages

# Install
```
npm i @mhy/mhy -g
```

# Usage
## Command syntax
```
mhy [ui-panel|tool] [argument1] [argument2] [...]
```

## @mhy tools

## Config & UI (ecosystem)
[https://github.com/wintercounter/mhy-config](https://github.com/wintercounter/mhy-config)

## Boot
[https://github.com/wintercounter/mhy-boot](https://github.com/wintercounter/mhy-boot)

# TODO
- Update to postcss-preset-env
- docs mdx (?)

# A big pile of features list
- Build UI / Multiple task, 1 command
- Latest versions
- Webpack
- Webpack-dev-server
- Webpack prod build
- Babel build
- Hot reload
- CSS/SCSS Modules
- Image-loader
- Airbnb eslint
- Prettier
- Typescript
- Worker-loader
- Font-loader
- Dev/prod
- Built-in webpack aliases
- Jest
- webpack-status-bar
- storybook
- Boot
- And more I don't remember now...




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

# Breaking
"mhy": {
      "root": {
        "defaultUiProcesses": [
          "webpack-dev-server"
        ]
      }
    }
  }

@/ resolve