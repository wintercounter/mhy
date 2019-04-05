# Development

## Setup environment (an environment to develop `mhy` itself!)

1. Fork repository
2. Open `mhy`'s `package.json` file.
3. Rewrite the values for `name` and `bin` to something else \(eg: `mhyd`\).
3. Run `npm link` ([See npmjs.org](https://docs.npmjs.com/cli/link.html))
4. The above command will make your local version of `mhy` available globally with the command (`mhyd`).
5. Create PR when done (do not commit in the changes for the naming).

> Use `npm run build -- --watch` to watch for file changes.

> The name rewrite is needed because `mhy` itself is being built using `mhy` which is why you also need an untouched stable version of it.

> The environment should work fine on Linux, Mac and Windows also.

## Creating processes/commands

Coming soon...

