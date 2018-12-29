import React from 'react';
import ReactDOM from 'react-dom';
import Home from './router/Home';
import * as serviceWorker from './serviceWorker';
import './style.css';

ReactDOM.render(<Home />, document.querySelector('body'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
