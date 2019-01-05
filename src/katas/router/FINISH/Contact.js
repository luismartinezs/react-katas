import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <main className="d-flex justify-center align-center">
        <div className="contact__container">
          <h1 className="text-shadow main__title">Contact</h1>
          <p className="main__subtitle">
            <em>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
            </em>
          </p>
          <ContactForm />
        </div>
      </main>
    );
  }
}

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    return null;
  }

  render() {
    return (
      <form submit={this.handleSubmit}>
        <label for="name">Your name:</label>
        <input type="text" id="name" name="name" placeholder="Tetsuo" />
        <label for="email">Your email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="tetsuo@neotokyo.jp"
        />
        <label for="message">Tell us your story:</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          cols="33"
          placeholder="Write here your message..."
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
