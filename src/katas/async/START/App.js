import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          title: "Castle in the Sky",
          description:
            "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
          director: "Hayao Miyazaki",
          release_date: "1986"
        }
      ]
    };
  }

  render() {
    return (
      <main className="main__wrapper d-flex d-col justify-center align-center">
        <div className="main__list-wrapper">
          <h1>List of movies by studio Ghibli</h1>
          <List movies={this.state.movies} />
        </div>
      </main>
    );
  }
}

class List extends Component {
  render() {
    const moviesList = this.props.movies.map(movie => (
      <Movie
        key={movie.title}
        title={movie.title}
        description={movie.description}
        director={movie.director}
        release_date={movie.release_date}
      />
    ));

    return (
      <ul className="d-flex d-col justify-center align-center">{moviesList}</ul>
    );
  }
}

class Movie extends Component {
  render() {
    const { title, description, director, release_date } = this.props;
    return (
      <li>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>
          <em>Director:</em> {director}
        </p>
        <p>
          <em>Release date:</em> {release_date}
        </p>
      </li>
    );
  }
}
