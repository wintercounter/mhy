# tsc

## tsc

- Environment: `development`
- By default `tsc` is only used for type-checking and to generate `.d.ts` files. Compilation is done by `babel`.
- Inside `ui` the `-w` flag is being added to the command to automatically watch for changes.

> A `tsconfig.json` is required for you to have at your project's root folder. `mhy` will create one if it doesn't exists yet.

### Default command
```bash
tsc --project ./tsconfig.json
```

### CLI Options
https://www.typescriptlang.org/docs/handbook/compiler-options.html

### Examples

#### Default CLI
```bash
mhy tsc
```

#### With watcher
```bash
mhy tsc -w
```