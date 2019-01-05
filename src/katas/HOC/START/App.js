// Example extracted from here: https://medium.freecodecamp.org/higher-order-components-the-ultimate-guide-b453a68bb851
import React from "react";

const starWarsChars = [
  { name: "Luke", side: "light" },
  { name: "Darth Vader", side: "dark" },
  { name: "Obi-wan Kenobi", side: "light" },
  { name: "Palpatine", side: "dark" }
];

class FilteredList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.defaultState };
  }
  updateState(value) {
    this.setState({ value });
  }
  render() {
    const otherSide = this.state.value === "dark" ? "light" : "dark";
    const transformedProps = this.props.list.filter(
      char => char.side === this.state.value
    );
    return (
      <main className="main__wrapper">
        <button onClick={() => this.updateState(otherSide)}>Switch</button>
        <div className="main__list-wrapper">
          {transformedProps.map(char => (
            <div key={char.name} className="list__item">
              <div>Character: {char.name}</div>
              <div>Side: {char.side}</div>
            </div>
          ))}
        </div>
      </main>
    );
  }
}

export default () => <FilteredList defaultState="dark" list={starWarsChars} />;
