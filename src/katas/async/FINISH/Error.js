import React, { Component } from "react";

export default class Error extends Component {
  render() {
    return (
      <div className="error-wrapper d-flex justify-center text-center">
        <h1>
          There was a problem retrieving the data{" "}
          <span role="img" aria-label="Dizzy face">
            😵
          </span>
          <br />
          Check your internet connection or try again later!
        </h1>
      </div>
    );
  }
}
