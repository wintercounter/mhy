---
The `process.env.NODE_ENV` variable is having different effects
on different parts of `mhy` which can be either `development` or
`production`. The term `root` in the hierarchy is always referring to
the resource that's being available in every case, regardless of the
current environment.
---