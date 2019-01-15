# Development

## Development

1. Fork repository
2. Rewrite `name` and `bin` key to something else \(eg: `mhyd` for dev\).
3. `npm link`
4. You now can reach `mhy` with the `mhyd` command.
5. Create PR when done.

> Use `npm run build -- --watch` to watch for file changes.
>
> The name rewrite is needed because `mhy` itself is being built using `mhy` which is why you also need an untouched stable version of it.

