# [HOC (Higher order components)](https://reactjs.org/docs/higher-order-components.html)

After looking around a bit, I decided to take this example from the blog post by [David Kopal](https://twitter.com/coding_lawyer), [Higher-Order Components: The Ultimate Guide](https://medium.freecodecamp.org/higher-order-components-the-ultimate-guide-b453a68bb851), because he already did the work for me :)

I've modified and simplified the example a bit, though, to keep things simple.

## User stories:

The component `FilteredList` provided is too complex and is doing too many things at once (taking care of both the logic and presentational aspects), so it's not reusable. The goal is to abstract functionality from it using higher-order components.

- From a user pespective, the app should do the same as it does now
- There should be one stateless functional component `renderDisplayList` in charge of rendering a list of objects passed as props. This component should NOT filter the list or manipulate it, except by getting the text to display on screen.
- There should be a HOC `withTransformProps` that handles the logic of filtering a list of items based on a filtering value.
- There should be a component `FilteredList` that is the enhanced component resulting from wrapping the `renderDisplayList` component with `withTransformProps`

## Solution:

** So you want to cheat, eeh?? **

Try to do it first on your own, with the links above!!

... or if you really get stuck or are in a hurry, just follow the steps below:

1. Create a stateless functional component (`RenderDisplayList`) that takes a list of the provided type (e.g. `[{name: 'Luke', side: 'Light'}]`) as an argument and renders it
2. Create a HOC `withFilterProps` (a function) that
   1. Takes a `BaseComponent` as argument, and returns a functional component. This functional component should:
      1. Take `list` and `side` as arguments, `({ list, side })`.
      2. Filter the list items according to the value of `side` (`list.filter(char => char.side === side)`) (NOTE: You could also write this function separately and pass it as parameter here)
      3. Return the `BaseComponent` with the filtered `list` as props, `<BaseComponent list={transformedProps} />`.
3. Apply `withFilterProps` to `RenderDisplayList` and give it a name (`FilteredList`): `const FilteredList = withFilterProps(RenderDisplayList);`
4. Create a `Switch` component that provides:
   1. The button to switch sides
   2. The value of the prop `side` passed to `FilteredList`
This component should hold state and a function to update state, you can reuse the logic of the original `FilteredList` component provided in the exercise.
5. Export the `Switch` component as default