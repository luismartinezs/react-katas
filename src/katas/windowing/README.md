# React Windowing

What is windowing? Read this section about [virtualizing long lists](https://reactjs.org/docs/optimizing-performance.html#virtualize-long-lists).

In short, windowing will render from a long list of elements only a few of them at any given time to be displayed on screen.

The example here is taken almost line by line from the [react-window fixed size list](https://react-window.now.sh/#/examples/list/fixed-size) example

## User stories:

The constant `itemCount` controls the number of projects displayed. In the App in the START folder all the list elements are rendered at once, i.e. if there are 100 elements in the list, the browser renders 100 elements. This is fine for a small number of projects, but if the number is insanely large (10,000, 100,000 projects...), the App will take a while to load or even crash your browser.

- The App should load quickly (< 1 second) and be navigable without issues, even for huge numbers of projects (100,000)
- The width and height of the list, and the height of each individual project, should be defined by the values inside the constant `styles`. The `styles` are:
  - `height`: the height of the div that contains the list
  - `itemCount`: the number of items in the list
  - `itemSize`: the height of each item
  - `width`: the width of the div that contains the list

## Solution:

** So you want to cheat, eeh?? **

Try to do it first on your own, with the links above!!

... or if you really get stuck or are in a hurry, just follow the steps below:

1. Import `FixedSizeList` from `react-window`. E.g.: `import { FixedSizeList as List } from "react-window";`
2. Delete the `const projects` from render method of App component, the List component will replace it later
3. Remove the `div` with class `projects__list-wrapper` and its contents
4. Declare a functional component `ProjectList`, that takes no arguments and returns `<List {...styles}>{Project}</List>` (it takes the styles defined in styles variable, which holds key value pairs that this List component requires for the FixedSizeList to work -- yes I made it easy for you :))
5. In the Project component:
   1. Change the arguments to be `{ index, style }`, these props are automatically provided by the List component
   2. Give the `style={style}` to the div that wraps everything else (remove any styles it had before)
   3. In the text content of the `<h2>` element, give Project {index + 1} or whatever else you
6. Back in the App component, after the `<p></p>` element, add the `<ProjectList />` component.