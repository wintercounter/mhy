# storybook

> Currently only `start` options are available. \*\[\]:

[https://storybook.js.org/configurations/cli-options/](https://storybook.js.org/configurations/cli-options/)

```bash
# Print config to console
mhy config storybook
```

## Overriding from `package.json`
```json
{
    "mhy": {
        "storybook": {
            "root" : {
                "start": {
                    "port": 3500
                }
            }
        }
    }
}
```

## Used by

* `storybook-start`

