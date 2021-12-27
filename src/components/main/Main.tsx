import { Component } from "react";
import "./Main.scss";
class Main extends Component<{}, { currentImage: number; images: string[] }> {
  state = {
    images: [
      "https://images.unsplash.com/photo-1505968409348-bd000797c92e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
      "https://images.unsplash.com/photo-1561816544-21ecbffa09a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      "https://images.unsplash.com/photo-1502236876560-243e78f715f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1617079114138-9cf245e006c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    ],
    currentImage: 0
  };
  timerID!: NodeJS.Timer;

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    if (this.state.currentImage < this.state.images.length - 1) {
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
    return (
      <div className="homeContainer">
        <div className="home home--1">
          <img
            src={this.state.images[this.state.currentImage]}
            alt="cleaning images"
            width="100%"
            height="100%"
          />
        </div>
        <div className="home home--2">
          <img
            src={this.state.images[0]}
            alt="cleaning images"
            width="100%"
            height="100%"
          />
        </div>
        <div className="home home--3">
          <img
            src={this.state.images[3]}
            alt="cleaning images"
            width="100%"
            height="100%"
          />
        </div>
        <div className="home home--4">
          <img
            src={this.state.images[2]}
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
