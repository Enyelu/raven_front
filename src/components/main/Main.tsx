import { Component } from "react";
import "./Main.scss";
class Main extends Component<{}, { currentImage: number; images: string[] }> {
  state = {
    images: [
      "https://images.unsplash.com/photo-1640457298166-fe3eddec2d5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
      "https://images.unsplash.com/photo-1599922036790-33c4013971c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1639661920872-adf8426d939b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      "https://images.unsplash.com/photo-1617079114138-9cf245e006c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    ],
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
        <div className="home home--1">
          <img
            src={images[currentImage]}
            alt="cleaning images"
            width="100%"
            height="100%"
          />
        </div>
        <div className="home home--2">
          <img
            src={images[0]}
            alt="cleaning images"
            width="100%"
            height="100%"
          />
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
