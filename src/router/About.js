import React, { Component, Fragment } from "react";
import Header from "./shared/header";
import Footer from "./shared/footer";

export default class About extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <AboutContent />
        <Footer />
      </Fragment>
    );
  }
}

class AboutContent extends Component {
  render() {
    return (
      <main className="d-flex justify-center align-center">
        <div className="about__container">
          <h1 className="text-shadow main__title">About me</h1>
          <p className="main__subtitle">
            <em>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
            </em>
          </p>
          <div className="d-flex about__bio-container">
            <img
              className="avatar"
              src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairShavedSides&accessoriesType=Sunglasses&facialHairType=MoustacheMagnum&facialHairColor=BlondeGolden&clotheType=GraphicShirt&clotheColor=Black&graphicType=Diamond&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            />
            <div>
              <h2>Bio:</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                sed magna non lacus gravida finibus. Nam quis sapien at ligula
                accumsan molestie eget eget magna. Donec bibendum scelerisque
                auctor. Vivamus dapibus vel purus ac ultricies. Vivamus vel
                justo leo. Nam interdum dui vel tincidunt ornare. Mauris
                lobortis et velit quis ultrices. Sed condimentum ex magna, quis
                viverra nisi efficitur eget. Aliquam ipsum dui, dignissim et
                feugiat eu, lobortis convallis leo. Nulla facilisi.
              </p>
              <p>
                Contact me:{" "}
                <a href="mailto:username@email.com">username@email.com</a>
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
