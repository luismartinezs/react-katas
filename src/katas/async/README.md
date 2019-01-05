# Async data

## User stories:

- Fetch data from API asynchronously from this URL: https://ghibliapi.herokuapp.com/films (list of films by studio Ghibli)
- Display the data in the front end as a list (the title, description, director and release date for each movie)
- While the data is loading, user sees a loading screen
- If the data could not be fetched, an error message is displayed

Note: I wanted to do this as practice to use [Error boundaries](https://reactjs.org/docs/error-boundaries.html), but according to the documentation:

'Error boundaries do not catch errors for (...) Asynchronous code'

So I used another approach. If you know of some other better way to do the same, please let me know!

## Solution:

** So you want to cheat, eeh?? **

Try to do it first on your own, with the links above!!

... or if you really get stuck or are in a hurry, just follow the steps below:

1. Remove the value of the sample movie from the state of the App component, and give an empty array as value instead: `movies: []`
1. Add a componentDidMount() method to the App component
1. Inside componentDidMount() make an async call that fetches the data from the url provided above (for reference, you could take a look at either of [these gists](https://gist.github.com/luismartinezs/fefffec1748de0f728a3d6e3aaee841a)), this async call should set the value of state.movies to the fetched data
1. For the loading widget, define a `isLoading: true` entry in App state, then in the render method use an if statement that will display the `<Loading />` component instead of the list if `isLoading` is true
1. For the error handling, define a `loadStatus` entry in App state, then in the catch block of the async call set it to 'error', then use an if statement that will display the `<Error />` component instead of the list if `loadStatus === 'error'` (you can test if the error screen is displayed by providing a wrong url to the fetch method)