# dep

This is a built-in CLI process used to manage dependencies
whether using mhy's dependencies or not.

- Alias: `deps`

## Tools

- `search`
- `collect`
- `install`

### Search

```bash
# List all dependencies mhy provides
mhy dep search

# Search for certain dependencies mhy provides
mhy dep search react
```

### Collect

```bash
# Collect all dependencies not listed in your package.json (provided by mhy)
mhy dep collect

# Write collected dependencies to you packages.json as 'mhyDependencies'
mhy dep collect write

# Write collected dependencies to you packages.json as 'peerDependencies'
mhy dep collect write-peer

# Write collected dependencies to you packages.json both as 'mhyDependencies' and 'peerDependencies'
mhy dep collect write-both
```

### Install

Utility tool to install `*dependecies` from your `package.json`.

> This tool is usually only used for special cases, most of the times
you don't need this.

```bash
# Install dependencies found in mhyDependencies
mhy dep install

# Install dependencies found in peerDependencies
mhy dep install peer
```