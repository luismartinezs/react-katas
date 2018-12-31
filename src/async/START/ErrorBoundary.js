import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="error-wrapper d-flex justify-center text-center">
          <h1>
            There was a problem retrieving the data <span role="img" aria-label="Dizzy face">😵</span>
            <br />
            Check your internet connection or try again later!
          </h1>
        </div>
      );
    }

    return this.props.children;
  }
}
