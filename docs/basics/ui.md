---
description: UI is a column based terminal GUI to display each processes output in a single terminal instance. This tool needs to adjust the output of the
---

> UI needs to adjust the output for each processes which makes
interactive commands stop working. You can access those without using
UI in case it's needed.

> This is the default operation.

```bash
# Initialize UI with default processes
mhy
## or
mhy ui

# Initalize UI with the given processes
mhy ui [process1] [process2]
```