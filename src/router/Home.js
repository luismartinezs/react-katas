import React, { Component, Fragment } from "react";
import Header from './shared/header';
import Footer from './shared/footer';

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <HomeContent />
        <Footer />
      </Fragment>
    );
  }
}





class HomeContent extends Component {
  render() {
    return (
      <main className="d-flex justify-center align-center">
        <div className="main__container">
          <h1 className="text-shadow main__title">Lorem Ipsum</h1>
          <p className='main__subtitle'><em>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</em></p>
          <Section section="Section 1" />
          <Section section="Section 2" />
          <Section section="Section 3" />
        </div>
      </main>
    );
  }
}

class Section extends Component {
  render() {
    return (
      <section>
        <h2 className="text-shadow">{this.props.section}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed magna non lacus gravida finibus. Nam quis sapien at ligula accumsan molestie eget eget magna. Donec bibendum scelerisque auctor. Vivamus dapibus vel purus ac ultricies. Vivamus vel justo leo. Nam interdum dui vel tincidunt ornare. Mauris lobortis et velit quis ultrices. Sed condimentum ex magna, quis viverra nisi efficitur eget. Aliquam ipsum dui, dignissim et feugiat eu, lobortis convallis leo. Nulla facilisi.</p>
      </section>
    );
  }
}
