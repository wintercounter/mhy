# Usage

## Command syntax

```bash
mhy [process|tool] [argument1] [argument2] [...]
```

All arguments will be passed to the given process's CLI tool, just like you would use that tool by default - making `mhy` act as a wrapper for your command.

```bash
mhy jest -u

# Equals to (except it's using the environment/config provided by mhy)
jest -u
```

## Configure

You may change some behaviors of `mhy` and it's processes by changing the following config options under the key: `mhy`

| Option | Default | Details |
| :--- | :--- | :--- |
| `defaultIndexHtml` | `process.cwd()/src/index.html` or `resources/index.html` | Falls back to global if local not found. |
| `srcFolder` | `src` | Root folder to be used for sources. |
| `defaultIgnoreList` | See: `src/configs/mhy` | - |
| `defaultAliases` | `{ '@' : 'src' }` | Default aliases to be resolved. With the default solution you only need to use it as `@/components` for example. |
| `ecosystem` | `['webpack-dev-server', 'tsc', 'jest', 'storybook-start']` | The default ecosystem to be loaded. |

## NODE_ENV

The `process.env.NODE_ENV` variable is having different effects
on different parts of `mhy` which can be either `development` or
`production`. The term `root` in the hierarchy is always referring to
the resource that's being available in every case, regardless of the
current environment.

## Docker

With each version of `mhy` we're also releasing a Docker image containing the corresponding version. It can be used to speed up deployments and/or to prevent a local/global install on your host OS.

```bash
docker pull wintercounter/mhy
docker run -it -v $(pwd):/app -w /app mhy mhy jest
```

### Docker Hub repository & versions
https://hub.docker.com/r/wintercounter/mhy/tags

