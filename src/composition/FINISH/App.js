import React, { Component } from "react";
import avatar from "../images/avatar.svg";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Scott",
      avatar: avatar
    };
  }

  render() {
    const user = (
      <Username username={this.state.username} avatar={this.state.avatar} />
    );

    return (
      <main className="main__wrapper d-flex d-col justify-center align-center">
        <OuterComponent user={user} />
      </main>
    );
  }
}

class OuterComponent extends Component {
  render() {
    return <AnotherOuterComponent user={this.props.user} />;
  }
}

class AnotherOuterComponent extends Component {
  render() {
    return <ParentComponent user={this.props.user} />;
  }
}

class ParentComponent extends Component {
  render() {
    const { user } = this.props;
    return user;
  }
}

class Username extends Component {
  render() {
    const { username, avatar } = this.props;

    return (
      <div className="d-flex d-col justify-center align-center">
        <p>
          <em>User name: </em>
          {username}
        </p>
        <img className="avatar" alt="avatar" src={avatar} />
      </div>
    );
  }
}
