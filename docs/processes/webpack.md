# webpack

- Alias: `wp`
- Usually ony used for generation production build. For development use `webpack-dev-server`.

## Default command
```bash
webpack --config mhy/configs/webpack
```

## CLI Options
https://webpack.js.org/api/cli/

## Examples

### Default CLI
```bash
mhy webpack
# or
mhy wp
```

### In `production` mode
```bash
mhy webpack --mhy-env=prod
# or
NODE_ENV=production mhy webpack
```

### With watcher
```bash
mhy webpack -w
# or
mhy wp --watch
```

## Debug performance

`SpeedMeasurePlugin` is being supported out-of-the-box which is giving
statistics for you about the time being spent on different stages of
the build process to make it easier to track down build performance
issues.

### Usage
You just need to pass the `--mhy-debug` flag to your command.

```sh
mhy wp --mhy-debug
```

