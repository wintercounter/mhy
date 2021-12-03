# swc

- By default, it uses the whole `src` directory.
- By default, it uses ES Modules (keeps import syntax) to enable better Webpack support and tree-shaking capabilities.
- After finishing compilation, `mhy` will copy all additional files from `src` to `dist` recursively to maintain module resolving capabilities (eg. images, stylesheets, .d.ts files, etc.).

> Should be used usually to generate production files for libraries.

## Default command
```bash
swc ./src --out-dir dist \
    --config-file mhy/configs/swc \
    --ignore node_modules,test,tests,dist,temp,tmp \
    --extensions .js,.jsx,.ts,.tsx
```

## CLI Options
https://babeljs.io/docs/en/babel-cli

## Examples

### Default CLI
```bash
mhy swc --mhy-env=prod
# or
NODE_ENV=production mhy swc
```

### Start with watcher
```bash
mhy swc --watch
```

### Only transform one file
```bash
mhy swc script.js
mhy swc script.js --out-file script-compiled.js
mhy swc script.js --out-file script-compiled.js --source-maps
```


