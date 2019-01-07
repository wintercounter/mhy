# Ecosystem

`mhy` uses the term `ecosystem` to define all the processes need to be run. The `process.env.NODE_ENV` variable's value also has an effect on the loaded list of processes.

Default \(for `development` environment\)

```text
[
    'webpack-dev-server',
    'tsc',
    'storybook-start',
    'jest'
]
```

