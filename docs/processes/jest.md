# jest

## jest

- Environment: `development`
- Jest is using `mhy/configs/babel` config. You don't want your test environment to act differently.
- By default, running in CLI will launch the default Jest UI **without watcher** for **all test files**.
- By default, running in `ui` will run **with watcher** for the **files changed** since your last commit.

### Default command
```bash
jest --passWithNoTests --colors --config=mhy/configs/jest
```

### CLI Options
https://jestjs.io/docs/en/cli.html

### Examples

#### Default CLI
```bash
mhy jest
```

#### Only test one file
```bash
mhy jest src/test.js
```

#### Update snapshots
```bash
mhy jest -u
```

#### Watcher
```bash
mhy jest --watch
```



