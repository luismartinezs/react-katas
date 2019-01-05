import React from 'react';
import ReactDOM from 'react-dom';
// Change next line to visualize the exercise that you're working on
import App from './katas/context/START/App';
import * as serviceWorker from './serviceWorker';
import './style.css';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
