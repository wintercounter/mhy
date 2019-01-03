# Usage

## Command syntax

```bash
mhy [process|tool] [argument1] [argument2] [...]
```

All arguments will be passed to the given process's CLI tool, just like
you would use that tool by default - making `mhy` act as a wrapper for
your command.

```bash
mhy jest -u

# Equals to (except it's using the environment/config provided by mhy)
jest -u
```