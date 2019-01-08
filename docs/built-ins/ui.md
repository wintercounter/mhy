---
description: >-
  mhy's user interface is being made to ease the startup of multiple processes
  in a single terminal window.
---

# ui

## Usage

Start default ecosystem:

```bash
mhy # is alias to ui
mhy ui
```

Start only specific processes:

```text
mhy ui webpack-dev-server jest
```

{% hint style="info" %}
Please note that passing arguments to the processes will still work using UI. However when specifying multiple processes in your command, each process will get these arguments which is probably not what you want to do.

`mhy ui jest tsc -h` almost equals to `jest -h` and `tsc -h`
{% endhint %}



