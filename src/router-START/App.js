import React, { Component, Fragment } from "react";
import Header from './shared/Header';
import Footer from './shared/Footer';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Home />
        <Footer />
      </Fragment>
    );
  }
}