import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="d-flex d-col">
        <div className="d-flex justify-space-evenly align-center footer__container">
          <QuickLinks />
          <ContactBox />
        </div>
        <BottomBar />
      </footer>
    );
  }
}

class QuickLinks extends Component {
  render() {
    return (
      <ul>
        <FooterLink href="/" name="Home" />
        <FooterLink href="/about" name="About" />
        <FooterLink href="/projects" name="Projects" />
        <FooterLink href="/contact" name="Contact" />
      </ul>
    );
  }
}

class FooterLink extends Component {
  render() {
    return (
      <li>
        <a className="footer__link" href={this.props.href}>
          {this.props.name}
        </a>
      </li>
    );
  }
}

class ContactBox extends Component {
  render() {
    return (
      <p>
        Address num. <br />
        City, ZIP code
        <br />
        Phone number
        <br />
        Email address
      </p>
    );
  }
}

class BottomBar extends Component {
  render() {
    return (
      <div className="bottom-bar d-flex justify-center align-center">
        <p>Created by Luis Martinez @ 2018</p>
      </div>
    );
  }
}