import React, { Component, Fragment } from "react";

export default class App extends Component {
  render() {
    const projects = Array(1000).fill(true).map( (elem, index) => {
      return <Project key={index+1} name={`Project ${index+1}`} />
    })

    return (
      <main className="d-flex justify-center align-center">
        <div className="projects__container">
          <h1 className="text-shadow main__title">Lorem Ipsum</h1>
          <p className="main__subtitle">
            <em>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
            </em>
          </p>
          {projects}
        </div>
      </main>
    );
  }
}

class Project extends Component {
  render() {
    return (
      <Fragment>
        <hr />
        <article className="d-flex justify-center">
          <div className="project__description">
            <h2 className="text-shadow">{this.props.name}</h2>
            <h3>
              <em>Neque porro quisquam est</em>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed
              magna non lacus gravida finibus. Nam quis sapien at ligula
              accumsan molestie eget eget magna.
            </p>
            <button className='btn'>See more</button>
          </div>
        </article>
      </Fragment>
    );
  }
}
