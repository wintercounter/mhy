# prettier

## prettier

- Environment: `development`
- By default, running in `ui` will use a `chokidar` watcher to apply prettier on the changed files. This also means that watcher is not available with the default CLI.

> Using in `ui` is not the preferred way, it's better if you set up your IDE for prettier or run it manually once you finished.

### Default command
```bash
prettier --config=mhy/configs/prettier --write src/**/*.{js,jsx,ts,tsx}
```

### CLI Options
https://prettier.io/docs/en/cli.html

### Examples

#### Default CLI
```bash
mhy prettier
```

#### On another directory
```bash
mhy prettier another_direcoroty
```



