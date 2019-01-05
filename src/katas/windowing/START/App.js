import React, { Component } from "react";

const itemCount = 10;
const styles = {
  height: 400,
  itemCount: itemCount,
  itemSize: 240,
  width: 500
};
export default class App extends Component {
  render() {
    const projects = Array(itemCount)
      .fill(true)
      .map((elem, index) => {
        return <Project key={index + 1} name={`Project ${index + 1}`} />;
      });

    return (
      <main className="d-flex justify-center align-center">
        <div className="projects__container">
          <h1 className="text-shadow main__title">Lorem Ipsum</h1>
          <p className="main__subtitle">
            <em>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
            </em>
          </p>
          <div
            className="projects__list-wrapper"
            style={{
              height: styles.height,
              width: styles.width,
              overflowY: "auto"
            }}
          >
            {projects}
          </div>
        </div>
      </main>
    );
  }
}

const Project = ({ name }) => (
  <div style={{ height: styles.itemSize }}>
    <hr />
    <article className="d-flex justify-center">
      <div className="project__description">
        <h2 className="text-shadow">{name}</h2>
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
