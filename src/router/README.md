# [Router API](https://reacttraining.com/react-router/web/guides/quick-start)

## User stories:

- Use [react router API](https://reacttraining.com/react-router/web/guides/quick-start) to load each page in the corresponding path /page-name/, e.g. home ==> /, about ==> /about/, etc.
- Each page should load when clicking the corresponding link from the menu bar.
- Each page should be loaded in the browser only once the user navigates to it, but not before (use [lazy function](https://reactjs.org/docs/code-splitting.html#reactlazy)).
- While a new page is being imported from the browser, the user should see a web spinner that indicates that the page is being loaded (use [Suspense](https://reactjs.org/docs/code-splitting.html#suspense)).
- If for some reason the page fails to load, the user should see an error message instead (use [error boundary](https://reactjs.org/docs/code-splitting.html#error-boundaries)).

## Solution:

** So you want to cheat, eeh?? **

Try to do it first on your own, with the links above!!

... or if you really get stuck or are in a hurry, just follow the steps below:

1. Make sure `react-router-dom` is installed and imported to App.js:
`import { BrowserRouter as Router, Route, Switch } from "react-router-dom";`
1. In App.js, wrap the render of the App component with <Router> component
1. In file Header.js, substitute the anchors with class name "navbar__link" for <Link to="/pathName" /> (you'll have to import the `Link` component)
1. In App.js, optionally wrap the Home and its sibling components with <Switch>
1. Subtitute the current `<Home />` and its siblings by `<Route path="/" component={Home} />`, for "Home" include the attribute `exact`
1. Load Home, About, Projects and Contact components lazily with React.lazy. You'll need to import them like this: `const Home = React.lazy(() => import("./Home"));`.
1. Wrap the Route components, and the Switch if you used it, in a Suspense component. Import and provide the Loading component as fallback: `<Suspense fallback={<Loading />}>`
1. Import the ErrorBoundary component to App.js, and use it to wrap the Suspense component. You can check that the ErrorBoundary component renders in case of error, if you go to the file ErrorBoundary.js and in line 6 you write `true` instead of `false`