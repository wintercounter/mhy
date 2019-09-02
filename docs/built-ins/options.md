# options

## --mhy-help

```bash
# show usage details
mhy --mhy-help
```

## --mhy-debug

```bash
# show debug messages
mhy --mhy-debug
```

## --mhy-verbose

```bash
# show more info than usual
mhy --mhy-verbose
```

## --mhy-env

Controls `process.env.NODE_ENV` variable and adds support to have
multiple secondary environments.

Aliases:

-   `prod`: `production`
-   `dev`: `development` _(default)_

### Basic Usage

```bash
# Run as NODE_ENV=production
mhy eslint --mhy-env=prod

# Run as NODE_ENV=production with secondary env called `ci`
mhy eslint --mhy-env=prod:ui
```

### Secondary environments

You can use the `:` separator to define multiple secondary environments.

> The first environment will be always set as a value for
> `process.env.NODE_ENV`.

Example

```bash
# Run webpack with configuration loaded for production mode, on Travis-CI only for the master branch.
mhy webpack --mhy-env=prod:travis:master
```

> Secondary environments are supported and config also.

## --mhy-if

Executes the command only when the given expression is _truthy_.

```bash
# On building master I don't need to run tests because they were validated before pull requests
mhy jest --mhy-if="!process.env.MHY_ENVS.includes('master')"
```

## --mhy-version

```bash
# show mhy's currently installed version
mhy --mhy-version
```
