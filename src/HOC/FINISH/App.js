// Example extracted from here: https://medium.freecodecamp.org/higher-order-components-the-ultimate-guide-b453a68bb851
import React, { Fragment } from "react";

const starWarsChars = [
  { name: "Luke", side: "light" },
  { name: "Darth Vader", side: "dark" },
  { name: "Obi-wan Kenobi", side: "light" },
  { name: "Palpatine", side: "dark" }
];

export default class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "light" };
  }
  updateState(value) {
    this.setState({ value });
  }
  render() {
    const otherSide = this.state.value === "dark" ? "light" : "dark";

    return (
      <main className="main__wrapper">
        <button onClick={() => this.updateState(otherSide)}>Switch</button>
        <div className="main__list-wrapper">
          <FilteredList side={this.state.value} list={starWarsChars} />
        </div>
      </main>
    );
  }
}

const withFilterProps = BaseComponent => ({ list, side }) => {
  const transformedProps = list.filter(char => char.side === side);
  const WithFilterProps = <BaseComponent list={transformedProps} />;
  // WithFilterProps.displayName = `WithFilterProps(${getDisplayName(BaseComponent)})`
  return WithFilterProps;
};

const RenderDisplayList = ({ list }) => (
  <Fragment>
    {list.map(char => (
      <div key={char.name} className="list__item">
        <div>Character: {char.name}</div>
        <div>Side: {char.side}</div>
      </div>
    ))}
  </Fragment>
);

const FilteredList = withFilterProps(RenderDisplayList);
