import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header>
        <Navbar />
      </header>
    );
  }
}

class Navbar extends Component {
  render() {
    return (
        <nav>
          <ul className="d-flex justify-space-evenly">
            <MenuLink href="/" name="Home" />
            <MenuLink href="/about" name="About" />
            <MenuLink href="/projects" name="Projects" />
            <MenuLink href="/contact" name="Contact" />
          </ul>
        </nav>
    );
  }
}

class MenuLink extends Component {
  render() {
    return (
      <li>
        <Link
          className="navbar__link"
          to={this.props.href}
        >
          {this.props.name}
        </Link>
      </li>
    );
  }
}
