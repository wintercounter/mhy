# webpack-dev-server

- Alias: `wds`
- Usually only used for development. For production builds use `webpack`.

## Default command
```bash
webpack-sev-server --config mhy/configs/webpack
```

## CLI Options
- https://webpack.js.org/api/cli/
- https://webpack.js.org/configuration/dev-server/#devserver

## Examples

### Default CLI
```bash
mhy wds
# or
mhy webpack-dev-server
```

## Debug performance

`SpeedMeasurePlugin` is being supported out-of-the-box which is giving
statistics for you about the time being spent on different stages of
the build process to make it easier to track down build performance
issues.

### Usage
You just need to pass the `--mhy-debug` flag to your command.

```sh
mhy wds --mhy-debug
```

