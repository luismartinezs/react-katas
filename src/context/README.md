# [Context](https://reactjs.org/docs/context.html)

## User stories:

Theme selector affects styles all around the app

- Story 1
- Story 2

## Solution:

** So you want to cheat, eeh?? **

Try to do it first on your own, with the links above!!

... or if you really get stuck or are in a hurry, just follow the steps below:

1. Step 1
1. Step 2

INverse steps:

1. In theme.js, import React module and add:
```
export const ThemeContext = React.createContext(
  themes.dark // default value
);
```
1. In themed-button.js import ThemeContext from theme.js
2. Add variable `let theme = this.context;`
3. Change style of `<button>` element to `style={{backgroundColor: theme.background, color: theme.foreground}}` 
4. Add `ThemedButton.contextType = ThemeContext;`
5. Remove `import {themes} from 'theme';`
6. In App.js `import {ThemeContext, themes} from './theme';`
7. In App component, wrap `<Toolbar>` in `<ThemeContext.Provider value={this.state.theme}>`
8. Remove `theme={this.state.theme}` from `<Toolbar>`
9. From Toolbar component, remove `theme={props.theme}`
10. In themed-button.js, remove attribute: `style={props.theme}`
11. Remove:
```
style={{
  backgroundColor: props.theme.background,
  color: props.theme.foreground
}}
```