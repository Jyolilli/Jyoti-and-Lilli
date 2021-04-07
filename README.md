# React-Static - TypeScript Template

To use this template, run `react-static create` and use the `typescript` template.

## Path Aliases for Absolute Imports

`react-static-typescript-plugin` supports path aliases [since v3.1](https://github.com/react-static/react-static/pull/963#issuecomment-455596728). It has been set up in this template.

```js
// tsconfig.json
{
  // ...
    "paths": {
      "@components/*": ["src/components/*"]
    },
  // ...
}

// this works in your React app
import FancyDiv from '@components/FancyDiv'
```
# Jyoti-and-Lilli

A one page static site powered by [React Static](cd) using [TypeScript](https://www.typescriptlang.org/).


## Prerequisites

- [Node.js](https://nodejs.org) version 12 or newer.
- [yarn](https://yarnpkg.com/) package manager. Version 1.16.0 or newer.
- [http-server](https://www.npmjs.com/package/http-server) to replicate the production environment for testing.

## Installation

1. Clone or download the repository from the command line

```
git clone git@github.com:Jyolilli/Jyoti-and-Lilli.git
```

2. Go to the local directory

```
cd Jyoti-and-Lilli
```

3. Install dependencies

```
yarn install
```

4. Run development mode

```
yarn start
```

## To deploy (To production)

```
yarn build
```

## To deploy (To staging)

```
yarn stage
```


