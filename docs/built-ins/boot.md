# boot
---
description: This tool will let you initialize codebase from a template.
---

## Usage

```bash
mhy boot [technology:react|vue|...] [template:default|...] [-o,--output: output path]
```

* `technology`: what tech should be used.
  * `default`: react
* `template`: what template should be loaded.
  * `default`: default
* `-o, --output`: path where the template should be boot.
  * `default`: ''

Examples:

```bash
mhy boot react default -o myProject
# or
mhy boot
# or
mhy boot react
# or
mhy boot -o xproject/path/src
```

> Your `package.json` will be extended with the necessary changes you might need to run the template. If it doesn't exists, it'll be created for you.

## Available Templates

### React Minimal

A minimal code to render a single React component.

```sh
mhy boot react minimal
```

### React Default

A complete example codebase with _Redux_, _async rendering_, _API calls_ and _Service Worker_.

```sh
mhy boot react
```

#### Structure

* `components`: components directory
* `config`: app configuration directory
* `core`: app mounting, routing and flux store directory
* `entities`: HTTP code related directory
* `fields`: app specific form fields directory
* `forms`: app specific forms and business logic directory
* `layouts`: is a container for a page to represent different states of an application
* `overlays`: basically containers to construct a overlay's structure.
* `pages`: basically containers to construct a page's structure.
* `services`: a base service implementation which you build your APIs on.
* `validators`: custom validator function usually for `react-redux-form`
* `index.js`: files are being used to export sub-modules for easier/simplier/nicer imports.

