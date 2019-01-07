---
description: >-
  This is a built-in CLI process used to retrieve final config objects in
  various formats OR initialize a single/environment configuration.
---

# config

## Initialize

```bash
mhy config
```

## Get

```bash
mhy config webpack
```

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

`mhy` will recursively load all configuartion values from the directory structure recursively.

Filenames are becoming keys in the final object and folder are becoming arrays.

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

`mhy` is comming with support for [json-merger](https://www.npmjs.com/package/json-merger) which enables manipulation of JSON data easily without using JavaScript.

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

This method is for more advanced cases.

