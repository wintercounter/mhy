# README.md

## `mhy`?
> Out-of-the box development environment.

`mhy` (my) is supposed to be a development/production
environment/compiler/ecosystem *out-of-the* box. I just simply had
enough of having multiple instances of the same npm packages on
my machine, and the need to setup a development environment each
time I start a new project.

I hate the need to configure a bunch of configs/scripts, the need to
open up multiple terminals and start commands separately. I hate that
I always have to align different configs to be able to start
development (like babel for webpack, jest and storybook).

This is `mhy` own development environment, how I like it and want it to
be, instantly, anywhere, simply.

## Problems trying to solve
- Zero-configuration
- Out-of-the box
- Portability
- Simple customization
- Using package.json for any config options
- Boot templates for easy starts
- Package hell: No more multiple installs on the same machine
- Single command and UI to run all necessary process
- Less boilerplate
- Shared configs across different tools
- Faster deployments using pre-built and public docker images
- Providing common/popular/standard packages
- Up-to-date policy

## Features
- UI interface to run all necessary commands once in a single terminal.
- CLI interface for those who don't like UI/prefer the default UI of the used tool.
- Webpack
- Webpack-dev-server
- Webpack prod build
- Babel build
- Hot reload
- CSS/SCSS Modules
- Image-loader
- Airbnb eslint
- Prettier
- Typescript
- Worker-loader
- Font-loader
- Dev/prod
- Built-in webpack aliases
- Jest
- webpack-status-bar
- storybook
- Boot
- And more I don't remember now...

## Supported tools

`mhy` is providing many common/popular packages out-of the box.
There are continuous adjustments being made to the includes to match
the most common needs and being able to develop without the need of
your own `npm install` command ever again. The best is to check the
dependencies of our `package.json` for the included packages, and
I also advice you to check out our sources for more details.


### Configs

### Processes
- webpack
- webpack-dev-server
- react
- babel

## Usage
#### Command syntax
```
mhy [ui-panel|tool] [argument1] [argument2] [...]
```

#### @mhy tools

#### Config & UI (ecosystem)
[https://github.com/wintercounter/mhy-config](https://github.com/wintercounter/mhy-config)

#### Boot
[https://github.com/wintercounter/mhy-boot](https://github.com/wintercounter/mhy-boot)

## TODO
- Update to postcss-preset-env
- docs mdx (?)