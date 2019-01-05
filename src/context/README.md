# [Context](https://reactjs.org/docs/context.html)

## User stories:

The app should do the same as it does now, from a user perspective, but instead of passing the theme (object with data to theme the button) as props, threading through the Toolbar component, it should be passed as context.

1. There should be a context ThemeContext with a default value
1. The App component should provide the context
2. The Toolbar component should be unaware of the context
3. The ThemedButton component should consume the context
4. When clicking on the button its styles should toggle

Read through the [context API](https://reactjs.org/docs/context.html#api)

[The original code is here](https://reactjs.org/docs/context.html#dynamic-context)

## Solution:

** So you want to cheat, eeh?? **

Try to do it first on your own, with the links above!!

... or if you really get stuck or are in a hurry, just follow the steps below:

1. In theme.js, import the React module and add a `ThemeContext` context: `export const ThemeContext = React.createContext(themes.dark);`
2. In themed-button.js:
   1. Import the ThemeContext you just created
   2. Set the contextType of ThemedButton to ThemeContext: `ThemedButton.contextType = ThemeContext;`
   3. Set a `theme` variable to `this.context`: `let theme = this.context;`
   4. Get the styles directly from the theme: `style={{backgroundColor: theme.background, color: theme.foreground}}`. At this point the button should be visible with whatever default theme was set in `ThemeContext`, but the theme should not toggle on click (yet)
3. In App.js:
   1. Remove the theme being passed as props from App and Toolbar components.
   2. Import the ThemeContext
   3. In App component, wrap the `<Toolbar />` component in a context provider, and pass `this.state.theme` as value: `<ThemeContext.Provider value={this.state.theme}>`
   4. DONE! The button should toggle the theme on click, and the initial theme should be determined by the initial state of App component (instead of the default value of `ThemeContext`)