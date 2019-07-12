# VSCode

## Search for global `node_modules` folder (GLOBAL_NODE_MODULES)

1. Use the `npm config get prefix` command to find the path to the `mhy` executable file.
2. The _global_ `node_modules` folder should be around there somewhere. It varies between different systems, maybe it is right next to it, maybe inside a `lib` directory next to it or the upper levels.
3. Inside the _global_ `node_modules` folder, you'll find `mhy/node_modules`. The path to that directory is what we will need.

## Generating config files

```bash
# Generating all possible config files mhy can provide
mhy config

# Use -o to overwrite existing files
mhy config -o

# Generate specific config files
mhy config prettier typescript webpack -io
```

## Alias resolution and `node_modules` resolution

Generate a `tsconfig.json` file in your root folder `mhy config typescript -io`. VSCode will handle it for you, even if you have a JavaScript project.

## Prettier (for automatic formatting on save; recommended)

Generate prettier config `mhy config prettier -io` and install `Prettier - Code formatter` plugin.

> Unfortunately you'll need to create watcher for each `File Type` you want the IDE to watch. By default it was creating it only for JavaScript. Most probably you want to add `jsx, ts, tsx` watcher also. Do this with copying the watcher and change the `File Type`.

## ESLint

1. **ONLY** in case you don't have `.eslintrc` file yet: `mhy config eslint -i`
2. Go to `File > Preferences > Settings > Extensions > ESLint`
3. `Enable`
4. Click on `Edit in settings.json`
5. Grab `mhy`'s node*modules path and add the following key into \_VSCode* `settings.json`: `"eslint.nodePath": ".../mhy-node_modules-path",`
6. Save it.
