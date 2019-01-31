[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

# sugUI Design System

This package works together with the [sugUI](https://github.com/gazpachu/sugui) components library.

![](https://gazpachu.github.io/sugui-design-system/img/screenshot.jpg)

## What can I do with this package?

Most users would fork this repo to create their custom design system based on the sugUI components library. If that's the case, you might want to setup your local environment to have both packages working together with hot reloading.

## Local environment setup

First of all, clone this repository in your computer and install the dependencies using `yarn` or `npm i`.

Then clone the [sugUI](https://github.com/gazpachu/sugui) package into your computer. Keep the name of the folder as `sugui`. It should look something like this:

- /users/your-user/dev/sugui
- /users/your-user/dev/sugui-design-system

Now you need to create a symbolic link to the `sugUI` library.

Go to the `/sugui` folder and type:

```cmd
yarn link
```

Then go to `/sugui-design-system/node_modules` folder and type:

```cmd
yarn link sugui
```

Done!, now your `sugui` folder in `node_modules` will reference your cloned `sugui` folder, rather than the one downloaded from npm.

Now you can run the styleguide with `yarn run styleguide` and it will trigger the Hot Reload every time you change anything in `sugui` or in `sugui-design-system`.

## Production build

Type:

```cmd
yarn run styleguide:build
```

## Deploy to Github pages

```cmd
yarn run deploy
```
