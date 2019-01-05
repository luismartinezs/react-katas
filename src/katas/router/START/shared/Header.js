import React, { Component } from "react";

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
        <a className="navbar__link" href={this.props.href} onClick={(e) => e.preventDefault()}>
          {this.props.name}
        </a>
      </li>
    );
  }
}