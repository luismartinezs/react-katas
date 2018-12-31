import React, { Component, Fragment } from "react";
import menu from "./Data";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: menu
    };
  }

  render() {
    return (
      <main className="main__wrapper d-flex d-col justify-center align-center">
        <div className="main__list-wrapper">
          <h1>Pizzeria Sicilia</h1>
          <h2>Menu</h2>
          <CategoryList menu={this.state.menu} />
        </div>
      </main>
    );
  }
}

class CategoryList extends Component {
  render() {
    const { menu } = this.props;
    const categoryList = menu.map(category => (
      <Fragment key={category.category}>
        <Category dishes={category.dishes} />
        <hr />
      </Fragment>
    ));

    return (
      <Fragment>
        <hr />
        {categoryList}
      </Fragment>
    );
  }
}

class Category extends Component {
  render() {
    const { dishes } = this.props;
    return (
      <Fragment>
        <h3>Salads</h3>
        <DishList dishes={dishes} />
      </Fragment>
    );
  }
}

class DishList extends Component {
  render() {
    const { dishes } = this.props;
    const dishList = dishes.map(dish => (
      <Fragment key={dish.name}>
        <Dish dish={dish.name} price={dish.price} />
      </Fragment>
    ));

    return <Fragment>{dishList}</Fragment>;
  }
}

class Dish extends Component {
  render() {
    const { dish, price } = this.props;
    return (
      <div className="list__item d-flex justify-space-between">
        <p>{dish}</p>
        <p>{price}</p>
      </div>
    );
  }
}
