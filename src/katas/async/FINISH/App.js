import React, { Component, Fragment } from "react";
import Error from "./Error";
import Loading from "./Loading";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isLoading: true,
      loadStatus: undefined
    };
    this.asyncCall = this.asyncCall.bind(this);
  }

  componentDidMount() {
    const url = "https://ghibliapi.herokuapp.com/films";

    this.asyncCall(url);
  }

  asyncCall(url) {
    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          movies: responseJson,
          isLoading: false,
          loadStatus: "success"
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          loadStatus: "error",
          isLoading: false
        });
      });
  }

  render() {
    const pageContent = this.state.isLoading ? (
      <Loading />
    ) : this.state.loadStatus === "error" ? (
      <Error />
    ) : (
      <Fragment>
        <h1>List of movies by studio Ghibli</h1>
        <List movies={this.state.movies} />{" "}
      </Fragment>
    );

    return (
      <main className="main__wrapper d-flex d-col justify-center align-center">
        <div className="main__list-wrapper">{pageContent}</div>
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
