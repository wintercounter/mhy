# storm

## WebStorm and PHPStorm

### `node_modules` resolution
Since you're using modules coming from `mhy`, you need to tell the IDE to include a `node_modules` folder outside your project's directory.

1. Find `mhy`'s `node_modules`. In case you don't know where it is being installed:
    1. Use the `which mhy` (`where mhy` on Windows) command to find the path to the `mhy` executable file.
    2. The _global_ `node_modules` folder should be around there somewhere. It varies between different systems, maybe it is right next to it, maybe inside a `lib` directory next to it or the upper levels.
    3. Inside the _global_ `node_modules` folder, you'll find `mhy/node_modules`. The path to that directory is what we need.
2. Add the path at `File > Settings > Directories` and mark it as `Excluded` and `Resource root`.

### Alias resolution
Alias resolution is done by Webpack. You only need to have a `webpack.config.js` file in your root.

1. **ONLY** in case you haven't run `mhy config` yet to set-up your empty project, run `mhy config webpack -i` to initialize a config file.
2. Make sure at `File > Settings > Webpack` that the feature is turned on.

### Prettier (for automatic formatting on save; recommended)
While it's possible to add watchers without the `Prettier plugin`, the plugin simply helps you with pre-filling the necessary fields with the necessary values for your watcher.
1. Install `Prettier plugin` from `File > Settings > Plugins`
2. Restart IDE
3. Go to `File > Settings > Tools > File Watchers`
4. Create watcher by clicking the `+` sign.
5. Select `prettier`
6. Set `Scope` to `Current file` which is more optimal.
7. Save with `OK`.
8. **(Optional)** You might want to add change the `Level` of the watcher to `Global` to be able to re-use it across projects.

> Unfortunately you'll need to create watcher for each `File Type` you want the IDE to watch. By default it was creating it only for JavaScript. Most probably you want to add `jsx, ts, tsx` watcher also. Do this with copying the watcher and change the `File Type`.

### Tips
1. Disable automatic `package.json` dependency inspection.
2. Disable statement termination inspection. `CTRL+Enter` at the end of any line. (ONLY in case you choose to continue using ASI which is the default setting.)
3. Set 4 spaces for indent. (ONLY in case you choose to continue using the default setting.)
4. Make sure you use LF for line endings. Set it globally or project level, and also you can convert every file if needed by selecting the `root folder` then `File > Line separators`.
5. You might want most settings/watchers to be global (where possible), so you can re-use them for all your projects.