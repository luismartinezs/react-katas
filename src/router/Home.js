import React, { Component, Fragment } from "react";

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <MainContent />
        <Footer />
      </Fragment>
    );
  }
}

class Header extends Component {
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
        <a className="navbar__link" href={this.props.href}>
          {this.props.name}
        </a>
      </li>
    );
  }
}

class Footer extends Component {
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

class MainContent extends Component {
  render() {
    return (
      <main className="d-flex justify-center align-center">
        <div className="main__container">
          <h1 className="text-shadow">Main title</h1>
          <p>Subtitle</p>
          <Section section="Section 1" />
          <Section section="Section 2" />
          <Section section="Section 3" />
        </div>
      </main>
    );
  }
}

class Section extends Component {
  render() {
    return (
      <Fragment>
        <h2>{this.props.section}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed magna non lacus gravida finibus. Nam quis sapien at ligula accumsan molestie eget eget magna. Donec bibendum scelerisque auctor. Vivamus dapibus vel purus ac ultricies. Vivamus vel justo leo. Nam interdum dui vel tincidunt ornare. Mauris lobortis et velit quis ultrices. Sed condimentum ex magna, quis viverra nisi efficitur eget. Aliquam ipsum dui, dignissim et feugiat eu, lobortis convallis leo. Nulla facilisi.</p>
      </Fragment>
    );
  }
}
