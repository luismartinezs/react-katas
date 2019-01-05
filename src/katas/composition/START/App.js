import React, { Component } from "react";
import avatar from '../images/avatar.svg';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Scott",
      avatar: avatar
    };
  }

  render() {
    return (
      <main className="main__wrapper d-flex d-col justify-center align-center">
        <OuterComponent {...this.state} />
      </main>
    );
  }
}

class OuterComponent extends Component {
  render() {
    return <AnotherOuterComponent {...this.props} />;
  }
}

class AnotherOuterComponent extends Component {
  render() {
    return <ParentComponent {...this.props} />;
  }
}

class ParentComponent extends Component {
  render() {
    return <Username {...this.props} />;
  }
}

class Username extends Component {
  render() {
    const { username, avatar } = this.props;
    return (
      <div className="d-flex d-col justify-center align-center">
        <p><em>User name: </em>{username}</p>
        <img
          className="avatar"
          alt="avatar"
          src={avatar}
        />
      </div>
    );
  }
}
