---
description: >-
  UI is a column based terminal GUI to display each processes output in a single
  terminal instance.
---

# UI

> UI needs to adjust the output for each processes which makes interactive commands stop working. You can access those without using UI in case it's needed.
>
> This is the default operation.

```bash
# Initialize UI with default processes
mhy
## or
mhy ui

# Initalize UI with the given processes
mhy ui [process1] [process2]
```

{% hint style="info" %}
Please note that using many UI processes at once can be performance heavy. You might need certain optimizations on large projects.
{% endhint %}

## Key bindings

It is possible to interact with each panels separately. Processes are allowed to have their own action in the form of a _button group_ at the bottom of the panel.

### `Tab`

Switch between panels. Use`Shift+Tab` to go backwards.

### `Left/Right` arrows

Chose action button.

### Up/Down arrows

Scroll content.

### `Space/Enter`

Run selected action.

