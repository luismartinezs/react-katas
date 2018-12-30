import React from 'react';
import ReactDOM from 'react-dom';
import App from './router-START/App';
// import Home from './router-START/Home';
// import Projects from './router-START/Projects';
// import About from './router-START/About';
// import Contact from './router-START/Contact';
import * as serviceWorker from './serviceWorker';
import './style.css';

ReactDOM.render(<App />, document.querySelector('body'));
// ReactDOM.render(<Home />, document.querySelector('body'));
// ReactDOM.render(<Projects />, document.querySelector('body'));
// ReactDOM.render(<About />, document.querySelector('body'));
// ReactDOM.render(<Contact />, document.querySelector('body'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
