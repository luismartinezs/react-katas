import React, { Component, Fragment } from "react";

export default class App extends Component {
  render() {
    return (
      <main className="main__wrapper d-flex d-col justify-center align-center">
        <div className="main__list-wrapper">
          <h1>List of movies by studio Ghibli</h1>
          <ul className="d-flex d-col justify-center align-center">
            <Movie />
            <Movie />
            <Movie />
          </ul>
        </div>
      </main>
    );
  }
}

class Movie extends Component {
  render() {
    return (
      <li>
        <h2>Title: Castle in the Sky</h2>
        <p>
          Description: The orphan Sheeta inherited a mysterious crystal that
          links her to the mythical sky-kingdom of Laputa. With the help of
          resourceful Pazu and a rollicking band of sky pirates, she makes her
          way to the ruins of the once-great civilization. Sheeta and Pazu must
          outwit the evil Muska, who plans to use Laputa's science to make
          himself ruler of the world.
        </p>
        <p>Director: Hayao Miyazaki</p>
        <p>Release date: 1986</p>
      </li>
    );
  }
}
