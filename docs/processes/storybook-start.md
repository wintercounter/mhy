# storybook-start

- Environment: `development`
- Alias: `sb-start`
- Storybook is being setup to use `mhy`'s `Webpack` and `Babel` config.

### Default command
```bash
start-storybook
```

### CLI Options
https://storybook.js.org/configurations/cli-options/

### Example
```bash
mhy sb-start
# or
mhy storybook-start
```

### Customization

To customize your Storybook you can create `storybook.preview.js`, `storybook.manager.js` and/or `storybook.main.js`
files anywhere inside your `src` folder.

Preview file is also supporting `parameters`, `globalTypes` and `decorators` exports. The difference is that you need
to use a function where you'll get the default values as a parameter. Manipulate this value however you want.

```
export const parameters = (defaults) => {
    defaults.foo = 'bar'
}
```

The above is also for for `main.js`'s default export where you can define `addons` for example.



