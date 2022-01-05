import { Component } from "react";
import { data } from "./data";
import "./Main.scss";
class Main extends Component<{}, { currentImage: number; images: string[] }> {
  state = {
    images: data,
    currentImage: 0
  };
  timerID!: NodeJS.Timer;

  componentDidMount() {
    this.timerID = setInterval(() => this.changeImages(), 3000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  changeImages() {
    const { images, currentImage } = this.state;
    if (currentImage < images.length - 1) {
      this.setState((prevState) => {
        return { currentImage: prevState.currentImage + 1 };
      });
    } else {
      this.setState(() => {
        return { currentImage: 0 };
      });
    }
  }

  render() {
    const { images, currentImage } = this.state;
    return (
      <div className="homeContainer">
        <div className="card bg-dark text-white">
          <img src={images[currentImage]} alt="images" className="card-img" />
        </div>

        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card">
              <img
                src={images[3]}
                alt="cleaning images"
                width="100%"
                height="100%"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src={images[3]}
                alt="cleaning images"
                width="100%"
                height="100%"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src={images[3]}
                alt="cleaning images"
                width="100%"
                height="100%"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src={images[3]}
                alt="cleaning images"
                width="100%"
                height="100%"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="home home--3">
          <img
            src={images[3]}
            alt="cleaning images"
            width="100%"
            height="100%"
          />
        </div>
        <div className="home home--4">
          <img
            src={images[2]}
            alt="cleaning images"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    );
  }
}
export default Main;
