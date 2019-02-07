# package.json-overrides

Using `json-merger`'s syntax you have powerful ways to customize configs without _JavaScript_ directly in you `package.json` files. There can be some really exotic cases tho. This is a place to collect some of these solutions.

## Extend `.npmignore` with custom file names

```json
"npmignore": {
  "root": {
    "$concat": [
      "/test",
      "/ci.sh",
      "/.gitbook"
    ]
  }
}
```

## Customize `babel`'s configuration deeply

1. Change `preset-env` to produce `commonjs` modules
2. Add `module.exports` statements to each module for default exports (from Babel v7 it is not being added anymore by default)
3. Remove `regenerator-plugin`, it doesn't needed in `node`.

```json
"babel": {
  "production": {
    "presets": [
      {
        "$match": {
          "query": "$[?(@[0].includes('preset-env'))]",
          "value": [
            {
              "$match": {
                "index": 1,
                "value": {
                  "modules": "commonjs",
                  "targets": {
                    "node": true,
                    "browsers": false,
                    "esmodules": true
                  }
                }
              }
            }
          ]
        }
      }
    ],
    "plugins": [
      {
        "$prepend": {
          "$expression": "$params.require.resolve('babel-plugin-add-module-exports')"
        }
      },
      {
        "$match": {
          "query": "$[?(@.includes('regenerator'))]",
          "value": {
            "$remove": true
          }
        }
      }
    ]
  }
}
```

## Some Webpack customization

1. Generate `index.php` file instead of `index.html` (in this case `html-webpack-plugin` is the first in the plugins array).
2. Change regex for ignored modules from watch. This exact example is useful when working with locally linked npm modules and you want to recompile on it's changes also.

```json
"webpack": {
    "production": {
        "plugins": [{
            "$expression": "Object.assign($targetProperty.options, {filename : 'index.php'})"
        }]
    },
    "development": {
        "watchOptions": {
            "ignored": [
                "node_modules.(?!(my-module-.*)).*"
            ]
        }
    }
}
```

## Removing `tsc` from the _UI Ecosystem_

The default ecosystem has the `tsc` process included, but without _TypeScript_ it's unnecessary. This is what `mhy` uses now, even tho a query to the string `tsc` would be more accurate :)

```json
"mhy": {
  "root": {
    "ecosystem": [
      {
        "$match": {
          "index": 1,
          "value": {
            "$remove": true
          }
        }
      }
    ]
  }
}
```

