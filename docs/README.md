# Introduction

![](.gitbook/assets/logo-2.png)

## `mhy`?

> Out-of-the box development environment.

`mhy` \(my\) is supposed to be a development/production environment/compiler/ecosystem _out-of-the_ box. I just simply had enough of having multiple instances of the same npm packages on my machine, and the need to setup a development environment each time I start a new project.

I hate the need to configure a bunch of configs/scripts, the need to open up multiple terminals and start commands separately. I hate that I always have to align different configs to be able to start development \(like Babel for Webpack, Jest and Storybook\).

This is `mhy` own development environment, how I like it and/or want it to be, instantly, anywhere, simply.

## A tool for simple

* app/site development
* package/library development
* build process setup
* project initialization
* interoperability
* configuration building

## Quickstart

```bash
npm install mhy -g
mkdir src
echo "console.log('Hello mhy!')" > src/index.js
mhy webpack-dev-server
```

## Problems trying to solve

* Zero-configuration
* Out-of-the box
* Portability
* Simple customization
* Using package.json for any config options
* Boot templates for easy starts
* Package hell: No more multiple installs on the same machine
* Single command and UI to run all necessary process
* Less boilerplate
* Shared configs across different tools
* Faster deployments using pre-built and public docker images
* Providing common/popular/standard packages
* Up-to-date policy

## Supported tools

`mhy` is providing many common/popular packages out-of the box. There are continuous adjustments being made to the includes to match the most common needs and being able to develop without the need of your own `npm install` command ever again. The best is to check the dependencies of our `package.json` for the included packages, and I also advice you to check out our sources for more details.

## Contributors

<table>
  <thead>
    <tr>
      <th style="text-align:center"></th>
      <th style="text-align:center"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:center">
        <p>
          <img src="https://avatars0.githubusercontent.com/u/963776?v=4&amp;s=128"
          alt/>
        </p>
        <p><a href="https://github.com/wintercounter">wintercounter</a>
        </p>
        <p>Core</p>
      </td>
      <td style="text-align:center">
        <p>
          <img src="https://avatars0.githubusercontent.com/u/964291?v=4&amp;s=128"
          alt/>
        </p>
        <p><a href="http://andy1210.com">Andy1210</a>
        </p>
        <p>Contributor, beta tester</p>
      </td>
    </tr>
  </tbody>
</table>

## Credits ❤

I'm using Webpack's logo to build an `M` shape from multiple blocks. I'd like to say **Thank You** for their great logo.

I also would like to thank to every developer's hard work which I'm using as a dependency in `mhy`. It would be really hard to collect all those people, but in case you find your work in our `package.json`, please feel free to create a pull request and add your logo and link.

<table>
  <thead>
    <tr>
      <th style="text-align:center"></th>
      <th style="text-align:center"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:center">
         <p>
          <img src="https://avatars0.githubusercontent.com/u/963776?v=4&amp;s=128"
          alt/>
        </p>
        <p><a href="https://github.com/wintercounter">wintercounter</a>
        </p>
        <p>while(!credits.length)
                     <br />console.log('Example')</p>
      </td>
    </tr>
  </tbody>
</table>