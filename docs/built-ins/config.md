---
description: >-
  This is a built-in CLI process used to retrieve final config objects in
  various formats OR initialize a single/environment configuration.
---

# config

- Alias: `c`

## Initialize

`mhy` is able to generate your config files for your environment. Use it to initialize your environment in your IDE/Editor.

```bash
mhy config
```

By default `mhy` won't overwrite your existing configuration files, it gives you a warning instead. In case you want to overwrite anyway, use the `-o --overwrite` flag.

```text
mhy config -o
```

Use the `-i --init` flag to initialize a single configuration file only.

```text
mhy config webpack -i

# in case you also wan't to overwrite
mhy config webpack -io
```

## Get

In certain situations you might want to initialize only a certain configuration or just want to check the final object `mhy` will use.

Log out a single config object:

```bash
mhy config webpack
```

You may use the `-f --format` flag to change the output format:

```bash
mhy config webpack -f json
```

You might want to write the contents into a file, you just need to use the &gt; operator which works both on Windows and Linux:

```bash
mhy config webpack --format=mjs > webpack.config.mjs
```

Available formats:

* `js` plain JavaScript object `module.exports = module.exports.default = {}`
* `mjs` plain JavaScript object `export default {}`
* `json` plain JSON object
* `raw` try to print out as is

## Set

Setting configuration values can be done in multiple ways. Before showing those, let's get famimilar with the configuration loading flow and some definitions first.

### Entities

* `root` entities are being loaded always
* `env` entities are being loaded if the current environment matches

### Directory structure

This is an example of `webpack`'s structure:

```text
webpack
|- root
|- development
|- production
|- index.js
```

`mhy` will recursively load all configuration values from the directory structure recursively.

File names are becoming keys in the final object and folders are becoming arrays.

#### Example

```text
webpack
|- root
   |- plugins
      |- babel.js // returns {foo: 'bar'}
   |- resolve.js // returns 'Resolve value'
|- development
|- production
```

From the directory structure above you will end up having the following object:

```text
{
    plugins: [{ foo: 'bar' }],
    resolve: 'Resolve value'
}
```

{% hint style="info" %}
For further examples check out `mhy`'s repository.
{% endhint %}

### Flow

1. Load `root` from `mhy`
2. Load `root` from `local`
3. Load `root` from `package.json`
4. Load `env` from `mhy`
5. Load `env` from `local`
6. Load `env` from `package.json`

### Overriding

#### Using package.json \(recommended\)

`mhy`'s practice to to keep every configuration in the `package.json` of the project. You can manipulate almost every aspect of a configariation object through JSON, even removals, appends, replaces, pushes or even searching and running JavaScript code.

All `mhy` related values are being stored under the key `"mhy"` in your `package.json`. The structure is the same. By default your object basically are being deep merged.

`mhy` is coming with support for [json-merger](https://www.npmjs.com/package/json-merger) which enables manipulation of JSON data easily without using JavaScript.

Let's assume the same `webpack` directory structure as above and the follwing in out `package.json` file:

```javascript
{
    "mhy": {
        "webpack": {
            "development": {
               "resolve": "new resolve value",
               "plugins": [{
                  "$append": "kex"
               }]
            }
        }
    }
}
```

The result for `webpack` will be:

```javascript
{
   resolve: "new resolve value",
   plugins: [{ foo: 'bar' }, 'kex']
}
```

#### Using files

This method is for more advanced cases or those who prefer to manage their configs in files.

`mhy` will search a `.mhy` directory in your project root. There you need to have a config directory with the same environment base as in the previous examples:

```text
.mhy
  |- configs
    |- webpack
      |- development
        |- resolve.js
```

In your files you need to default export a function that is returning the value. In the first parameter you'll also get the current value of the key if there's any.

```text
module.exports = current => {
    current.extensions.push('svg')
    return current
}
```

{% hint style="info" %}
Please note that there will be no code transformations applied to your custom config files. Only use syntax/features that are available in your current NodeJS version.
{% endhint %}

##### Local processes/commands

Using this method you can have your own, local processes/commands as well. More info on this is about to come, stay tuned!

