# Subexports

`mhy subexports`

Generates subpackages exporting file structure for additional packages  

For example:

```
import package from 'my-package'
import subpackage from 'my-package/my-subpackage'
```

Based on mhy config and accept common package.json fields

 ```
 ~/.mhy/configs/subexports/root/index.js

 {
    my-subpackage: {
        main: '../dist/subpackages/my-subpackage'
    }
 }

 // Resolves to `my-subpackage` folder with package.json file inside it
 ```