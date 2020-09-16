# eslint

> Linting is done by Webpack also in production mode. You only need this process to manually run linting, or run it's `fix` command for example.

## Default command
```bash
eslint ./src/**/*.{js,jsx,ts,tsx}
```

## CLI Options
https://eslint.org/docs/user-guide/command-line-interface

## Examples

### Default CLI
```bash
mhy eslint
```

### Only lint one file
```bash
mhy eslint src/file.js
```

### Fix fixable errors
```bash
mhy eslint --fix
```



