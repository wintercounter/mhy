# webpack-bundle-analyzer

- Alias: `wba`
- Environments: `root`

## Default command
```bash
webpack-bundle-analyzer stats.json
```

## CLI Options
https://github.com/webpack-contrib/webpack-bundle-analyzer#options-for-cli

## Examples

### Default CLI
```bash
mhy webpack-bundle-analyzer
# or
mhy wba
```

### Analyze `production` bundle instead
```bash
mhy webpack-bundle-analyzer --mhy-prod
# or
NODE_ENV=production mhy webpack-bundle-analyzer
```

### With watcher
```bash
mhy webpack -w
# or
mhy wp --watch
```

