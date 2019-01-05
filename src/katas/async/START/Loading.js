import React, { Component } from "react";

export default class Loading extends Component {
  render() {
    return (
      <div className="spinner-container d-flex align-center justify-center">
        <div className="lds-ring">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }
}

/* Credits for the spinner go to: https://loading.io/css/ */