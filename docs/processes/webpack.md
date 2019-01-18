# webpack

## webpack

- Environment: `production`
- Alias: `wp`
- Usually ony used for generation production build. For development use `webpack-dev-server`.

### Default command
```bash
webpack --config mhy/configs/webpack
```

### CLI Options
https://webpack.js.org/api/cli/

### Examples

#### Default CLI
```bash
mhy webpack --mhy-prod
# or
NODE_ENV=production mhy webpack
```

#### With watcher
```bash
mhy webpack --mhy-prod -w
```

