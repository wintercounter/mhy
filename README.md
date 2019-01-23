<p align="center"><a href="https://mhy.js.org" target="_blank"><img width="100" src="https://github.com/wintercounter/mhy/raw/master/docs/.gitbook/assets/logo-2.png" alt="mhy logo"></a></p>

<p align="center">
  <a href="https://circleci.com/gh/wintercounter/mhy/tree/master"><img src="https://img.shields.io/circleci/project/github/wintercounter/mhy/master.svg" alt="Build Status"></a>
  <a href="https://npmcharts.com/compare/mhy?minimal=true"><img src="https://img.shields.io/npm/dm/mhy.svg" alt="Downloads"></a>
  <a href="https://david-dm.org/wintercounter/mhy" title="dependencies status"><img src="https://david-dm.org/wintercounter/mhy/status.svg"/></a>
  <a href="https://github.com/prettier/prettier" rel="nofollow"><img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg" alt="code style: prettier"></a>
  <a href="https://www.npmjs.com/package/mhy"><img src="https://img.shields.io/npm/v/mhy.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/mhy"><img src="https://img.shields.io/npm/l/mhy.svg" alt="License"></a>
</p>

<h2 align="center">mhy <a target="_blank" href="https://twitter.com/intent/tweet?text=Try%20out%20%23mhy%20as%20your%20new%20JavaScript%20development%20environment.%20https%3A%2F%2Fmhy.js.org&hashtags=mhy,webpack,babel,jest,typescript,frontend,developers,javascript,html"><img src="https://img.shields.io/twitter/url/http/shields.io.svg?style=social" /></a></h2>

<p align="center">A <strong>zero-config</strong>, <strong>out-of-the-box</strong>, <strong>multi-purpose</strong> <i>toolbox</i> and <i>development environment</i>.</p>

<p align="center"><a href="https://mhy.js.org" target=_blank>mhy.js.org</a></p>

---

## Summary

It's really hard to define what `mhy` \(my\) is, because it tries to create a unified developer experience for any stage of your project:
* a pre-configured **development environment** to not waste time with the set-up when starting a new project or just need a quick playground.
* a pre-configured **production environment** to help you reach production faster compiling/building your code without any necessary setup.
* an **ecosystem** to be able to run different task together at once, connected together perfectly.
* a **toolbox** help your work with the most common tasks.
* a **solution for littering** your machine with the same npm package over and over again.
* a **config management** tool make necessary changes faster at a single place.
* an **interoperable environment** to be shared across multiple projects and ensure they are being build on the same principles/stack.

> `mhy` helps you to be able to focus on your code again rather then the tech behind it.

## Using `mhy` you'll have

* a **zero-configuration** environment **out-of-the-box**.
* a **portable** codebase without any `npm install`.
* **simple customization** if you don't favor the default settings.
* **package.json based customization** for any configs value `mhy` provides.
* **boot templates** for easy setup.
* **most common packages** provided to your work.
* a **single command TUI** to run a full ecosystem.
* **less boilerplate**.
* configs/tools **well-playing** together _(webpack+babel, jest+babel, storybook+webpack, webpack+typescript, etc.)_.
* **pre-built and public Docker images** for faster CI.

> Note that `mhy`'s focus is on client side currently, but server side features are about to come.

## Setup

### Install
```bash
npm install mhy -g
```

### Start a new project
Creates an empty project with a single `index.js` file that is being served using `webpack-dev-server` _(wds)_ pre-configured with **Babel** and **React**.
```bash
mkdir src
echo "console.log('Hello mhy!')" > src/index.js
mhy wds
```

### Compile library
Create a production ready library. From the `src` folder it creates a complied `dist` folder.
```bash
mhy babel --mhy-prod
```

### Build bundle
Create a production ready bundle for you website/app using pre-configured **Webpack**. From the `src` folder it creates a `build` folder with your bundle ready to be served supporting many popular features/loaders.
```bash
mhy webpack --mhy-prod
```

### Start the default ecosystem
It'll run Jest, Webpack Dev Server, TypeScript compiler, Storybook at once in a single Terminal UI (TUI).
```bash
mhy
```
### That's not all
> These are only a few examples from all the possibilities `mhy` provides. Start exploring on https://mhy.js.org

## Supported packages

`mhy` is providing many common/popular packages. There are continuous adjustments being made to the includes to match the most common needs and being able to develop without the need of your own `npm install` command ever again. It's in plan to accurately list these on the site, for now the best is to check the dependencies of our `package.json` for the included packages, and I also advice you to check out our sources for more details.

## Contributors

<table>
  <tbody>
    <tr>
      <td align="center" valign="top">
        <img width="128" height="128" src="https://github.com/wintercounter.png?s=128">
        <br>
        <a href="https://github.com/wintercounter">wintercounter</a>
        <p>Core</p>
      </td>
      <td align="center" valign="top">
        <img width="128" height="128" src="https://github.com/andy1210.png?s=128">
        <br>
        <a href="http://andy1210.com">Andy1210</a>
        <p>Contributor, beta tester</p>
      </td>
     </tr>
  </tbody>
</table>

## Credits ❤

I'm using Webpack's logo to build an `M` shape from multiple blocks. I'd like to say **Thank You** for their great logo.

I also would like to thank to every developer's hard work which I'm using as a dependency in `mhy`. It would be really hard to collect all those people, but in case you find your work in our `package.json`, please feel free to create a pull request and add your logo and link.

<table>
  <tbody>
    <tr>
      <td align="center" valign="top">
        <img width="128" height="128" src="https://github.com/wintercounter.png?s=128">
        <br>
        <a href="https://github.com/wintercounter">wintercounter</a>
        <p>
            while(!credits.length)<br>
            console.log('Example')
        </p>
      </td>
     </tr>
  </tbody>
</table>

---

<p align="center">🌟 PLEASE STAR THIS REPO IF YOU FOUND SOMETHING INTERESTING! 🌟</p>