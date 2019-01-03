# README.md

MHY (my) is suppose to be a development/production environment/compiler
 out-of the box. I just simply had enough of having multiple
instances of the same npm packages on my machine, the need to setup
a development environment,
the need to configure a bunch of stuff, the need to store my scripts
online somewhere if I want to quickly test something, the need to open
up multiple terminals and start commands separately.
This is MHY development environment, how I like it/want it to be,
instantly, anywhere, simply (or it's goal least...)

## Problems it tries to resolve
- 0C
- Out-of-the box
- Portability
- Simple config building/overriding
- Using package.json for simple configs
- Boot templates
- No more multiple installs
- Single terminal to run all
- Less boilerplate
- UI
- CLI
- Unified linting
- Faster deployments using prebuilt and public docker images
- Providing commonly used packages

## Install
```
npm i @mhy/mhy -g
```

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

## A big pile of features list
- Build UI / Multiple task, 1 command
- Latest versions
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