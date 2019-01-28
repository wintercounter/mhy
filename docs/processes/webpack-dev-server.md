# webpack

- Environment: `development`
- Alias: `wds`
- Usually ony used for generation development. For production builds use `webpack`.

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
mhy webpack --mhy-prod
# or
NODE_ENV=production mhy webpack
```

### With watcher
```bash
mhy webpack --mhy-prod -w
```

