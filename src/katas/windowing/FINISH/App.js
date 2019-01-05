import React, { Component } from "react";
import { FixedSizeList as List } from "react-window";

const itemCount = 100000;
const styles = {
  height: 400,
  itemCount: itemCount,
  itemSize: 240,
  width: 500
};

export default class App extends Component {
  render() {
    return (
      <main className="d-flex justify-center align-center">
        <div className="projects__container">
          <h1 className="text-shadow main__title">Lorem Ipsum</h1>
          <p className="main__subtitle">
            <em>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
            </em>
          </p>
          <ProjectList />
        </div>
      </main>
    );
  }
}

const ProjectList = () => <List {...styles}>{Project}</List>;

const Project = ({ index, style }) => (
  <div style={style}>
    <hr />
    <article className="d-flex justify-center">
      <div className="project__description">
        <h2 className="text-shadow">Project {index + 1}</h2>
        <h3>
          <em>Neque porro quisquam est</em>
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed
          magna non lacus gravida finibus. Nam quis sapien at ligula accumsan
          molestie eget eget magna.
        </p>
        <button className="btn">See more</button>
      </div>
    </article>
  </div>
);
