# THIS PROJECT IS IN ALPHA STAGE, USE AT YOUR OWN RISK. DOCUMENTATION ALSO IN PROGRESS, SOMETIMES IT JUST HAS KEYWORDS AS A REMINDER. PRs ARE WELCOME!

MHY (my) is suppose to be a development/production environment/compiler out-of the box. I just simply had enough of having multiple
instances of the same npm packages on my machine, the need to setup a development environment,
the need to configure a bunch of stuff, the need to store my scripts online somewhere if I
want to quickly test something, the need to open up multiple terminals and start commands separately.
This is MHY development environment, how I like it/want it to be, instantly,
anywhere, simply (or it's goal least...)

# Problems it tries to resolve
- 0C
- Out-of-the box
- Simple config building/overriding
- Use package.json for simple configs
- Boot templates
- No more multiple installs
- Single terminal to run all
- Less boilerplate
- UI
- CLI

# Usage
```
// Install
npm i @mhy/mhy -g

// Run ecosystem (ui) (default)
mhy
mhy ui

// Run specific process only with default task
mhy serve
mhy run serve

mhy jest
mhy run jest

// Run specific process only with specific task
mhy jest watch

// Print out config
mhy config webpack

// Print out config in different format
mhy config babel -f json
mhy config babel --format=json

// Print out config in different format and save into a file
mhy config babel -f json >> .babelrc
```

# Override configs in package.json
```
{
    ...
    "mhy": {
        "webpack": {
            "development": {
                "serve": {
                    "port": 8080
                }
            }
        }
    },
    ...
}
```

# Override eslint config in package.json
```
{
    ...
    "eslintConfig": {
        "extends": "mhy/config/eslint"
    },
    ...
}
```


# Load configs/run tasks based on environment

# Loading flow

# Directory structure

# Examples

# Always use require.resolve

# Eslint dev: warn; prod: error

# Prettier help

# Enable/disable ui widgets

# Tasks
- mhy config
  - mhy config babel >> .babelrc
  - mhy config webpack >> webpack.config.js
- mhy build

# TODO
- Update to postcss-preset-env
- Storybook
- docs mdx
- Go back to webpack-dev-server
- Structure recommendation docs

# Features
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