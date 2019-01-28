# mhy

`mhy` is being built using `mhy` :\) Just like `npm` is a package on `npm`. It's core configuration values are stored using `mhy` also.

```bash
# Print config to console
mhy config mhy
```

## Options

### `defaultIndexHtml`

The `index.html` file to load when using `webpack`.

Default is provided by `mhy`: `resources/index.html`

> You can use your own by putting it to your `src` folder. Not necessary to overwrite this value.

### `srcFolder`

Folder to your source files from you project root.

Default: `src`

### `defaultIgnoreList`

An array including the list of filenames needed to be excluded in general \(like cache folders, log files, etc\). Both `gitignore` and `npmignore` configs are extending this list.

> Please see source file for details.

### `defaultAliases`

Aliases provided for `Babel` and `TypeScript` imports.

Default: `{ '@': 'src' }`

With the default solution you can have aliases to all the folder in `src`.

Example: `import Foo from '@/components/foo'`

> Please note that previously aliases were provided for certain folders as `@components`. These are being **DEPRECATED** and should not be used. The new way is more flexible and avoids collision with NPM namespaces.

### `ecosystem`

The ecosystem you want to load when simply run `mhy` or `mhy ui`.

Default: `['webpack-dev-server', 'tsc', 'jest', 'storybook-start']`

