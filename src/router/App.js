import React, { Component, Fragment } from "react";
import Header from './shared/header';
import Footer from './shared/footer';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Contact />
        <Footer />
      </Fragment>
    );
  }
}