# babel

- Environment: `production`
- Alias: `bb`
- By default it uses the whole `src` directory.
- By default it uses ES Modules (keeps import syntax) to enable better Webpack support and tree-shaking capabilities.
- After finishing compilation, `mhy` will copy all additional files from `src` to `dist` recursively to maintain module resolving capabilities (eg images, stylesheets, .d.ts files, etc.).
- Babel is being used to compile TypeScript also.

> Should be used usually to generate production files for libraries.

## Default command
```bash
babel ./src --out-dir dist \
    --config-file mhy/configs/babel \
    --ignore node_modules,test,tests,dist,temp,tmp \
    --delete-dir-on-start \
    --extensions .js,.jsx,.ts,.tsx
```

## CLI Options
https://babeljs.io/docs/en/babel-cli

## Examples

### Default CLI
```bash
mhy babel --mhy-prod
# or
NODE_ENV=production mhy bb
```

### mhy UI
```bash
mhy ui babel --mhy-prod
```

### Start with watcher
```bash
mhy babel --watch --mhy-prod
```

### Only transform one file
```bash
mhy babel script.js --mhy-prod
mhy babel script.js --mhy-prod --out-file script-compiled.js
mhy babel script.js --mhy-prod --out-file script-compiled.js --source-maps
```
> Alternatively you can use `NODE_ENV=production mhy babel`


