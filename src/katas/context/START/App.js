import React from "react";
import { themes } from "./theme";
import ThemedButton from "./themed-button";

// An intermediate component that uses the ThemedButton
function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme} theme={props.theme}>
      Change Theme
    </ThemedButton>
  );
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark
      }));
    };
  }

  render() {
    return (
      <main className="main__wrapper">
        <Toolbar changeTheme={this.toggleTheme} theme={this.state.theme} />
      </main>
    );
  }
}
