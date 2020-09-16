# jest

- Jest is using `mhy/configs/babel` config. You don't want your test environment to act differently.

## Default command
```bash
jest --passWithNoTests --colors --config=mhy/configs/jest
```

## CLI Options
https://jestjs.io/docs/en/cli.html

## Examples

### Default CLI
```bash
mhy jest
```

### Only test one file
```bash
mhy jest src/test.js
```

### Update snapshots
```bash
mhy jest -u
```

### Watcher
```bash
mhy jest --watch
```



