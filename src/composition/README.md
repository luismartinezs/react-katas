# Component composition

## User stories:

- In file App.js, the Username component is deep in the react tree, and props are being drilled from the root component all the way through. Avoid prop drilling by using composition, i.e.: Instead of passing the props down the tree, create an instance of the component in the root and pass the component itself that uses the props

You may want to look at how to pass components as props in the [React documentation](https://reactjs.org/docs/composition-vs-inheritance.html), and have a read of "[Before You Use Context](https://reactjs.org/docs/context.html#before-you-use-context)"

This example is simplified and unrealistic, but in large and complex apps with many components, it may be the case that state will have to be passed down multiple levels to components deep in the react tree.

## Solution:

** So you want to cheat, eeh?? **

Try to do it first on your own, with the links above!!

... or if you really get stuck or are in a hurry, just follow the steps below:

1. In the App component, create an instance of the Username component and pass to it the username and avatar states.  
```
const user = (
      <Username username={this.state.username} avatar={this.state.avatar} />
    );
```
2. Pass `user` as props to the OuterComponent that is being rendered in App component: `<OuterComponent user={user} />`, instead of passing state as props.
3. Pass `user` as props in the same way, all the way down to ParentComponent
4. In ParentComponent, instead of rendering a new instance of Username component, render the instance passed as props: `return this.props.user;`