## Run storybook
`npm install` - to install all dependencies

`npm run storybook` - to run storybook with local dev server

## Install as package
First install dependencies in your project:

Required dependencies:

`npm install react react-dom @material-ui/core @material-ui/icons`

Optional dependencies:

`npm install @material-ui/lab @material-ui/pickers`

Then install salalem-ui package itself:

`npm install @salalem/salalem-ui`

Package contains 4 parts:

- core - all components except those below
- cards - all cards components
- pickers - date/time pickers
- themes - three predefined themes

## Usage in project
In your root level entry point e.g `main.js`:

```javascript
// first import dependencies from material-ui
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// then import your theme GreenTheme/GrayTheme/BlueTheme
import { GreenTheme } from '@salalem/salalem-ui/dist/themes';

// import css styles
import '@salalem/salalem-ui/dist/core.css';

// StylesProvider makes sure, that our custom created css
// is more specific than material-ui original ones.
<StylesProvider injectFirst={true}>
  <ThemeProvider theme={createMuiTheme(GreenTheme)}>
    <YourAppContainer />
  </ThemeProvider>
</StylesProvider>
```


Inside your app on any page/container e.g `DashboardPage.js`:

```javascript
import { Button } from '@salalem/salalem-ui/dist/core';

// ...
// in your react components
// ...
<Button>Test button</Button>
```

## Development/Publishing
To update package you need to build it first:

`npm run build:prod`

then increase version of the package:

`npm version`

then finally publish it to npm:

`npm publish` 

## Server side rendering
Check this links to see more on how to use library with SSR:

* https://material-ui.com/guides/server-rendering/
* https://github.com/mui-org/material-ui/tree/master/examples/nextjs
