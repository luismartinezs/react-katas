import React, { Component } from "react";

export default class Projects extends Component {
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
          <Project index="1" name="Project 1" imgAlign="left" />
          <Project index="2" name="Project 2" imgAlign="right" />
          <Project index="3" name="Project 3" imgAlign="left" />
          <Project index="4" name="Project 4" imgAlign="right" />
        </div>
      </main>
    );
  }
}

class Project extends Component {
  render() {
    const imgSize = {
      w: 300,
      h: 350
    };
    return (
      <article className="d-flex justify-center">
        <img
          src={`https://picsum.photos/${imgSize.w}/${imgSize.h}/?image=${
            this.props.index
          }0`}
          alt={this.props.name}
          className={`img-${this.props.imgAlign}`}
          style={{ width: imgSize.w, height: imgSize.h }}
        />
        <div className="project__description">
          <h2 className="text-shadow">{this.props.name}</h2>
          <h3>
            <em>Neque porro quisquam est</em>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed
            magna non lacus gravida finibus. Nam quis sapien at ligula accumsan
            molestie eget eget magna. Donec bibendum scelerisque auctor. Vivamus
            dapibus vel purus ac ultricies. Vivamus vel justo leo. Nam interdum
            dui vel tincidunt ornare. Mauris lobortis et velit quis ultrices.
            Sed condimentum ex magna, quis viverra nisi efficitur eget. Aliquam
            ipsum dui, dignissim et feugiat eu, lobortis convallis leo. Nulla
            facilisi.
          </p>
        </div>
      </article>
    );
  }
}
