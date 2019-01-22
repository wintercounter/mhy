# Documentation
[https://mhy.js.org](https://mhy.js.org)

# `mhy`?

>  An _out-of-the_ box **multi-purpose** toolbox and development environment.

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

* a **Zero-configuration** environment **out-of-the-box**.
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

## Quick-start examples

## Install `mhy` globally
```bash
npm install mhy -g
```

### Start a new project serving with `webpack-dev-server` configured for Babel and React
```bash
mkdir src
echo "console.log('Hello mhy!')" > src/index.js
mhy wds
```

### Compile codebase as a library for production use
```bash
mhy babel --mhy-prod
```

### Start the default ecosystem in a single terminal (Jest, Webpack Dev Server, TypeScript compiler, Storybook)
```bash
mhy
```

> Form the `src` folder it creates a complied `dist` folder.

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

