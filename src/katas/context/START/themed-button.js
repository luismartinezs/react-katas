import React from "react";

class ThemedButton extends React.Component {
  render() {
    let props = this.props;
    return (
      <button
        {...props}
        style={{
          backgroundColor: props.theme.background,
          color: props.theme.foreground
        }}
      />
    );
  }
}

export default ThemedButton;
