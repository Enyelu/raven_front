import { useState, useEffect } from "react";
import "./Main.scss";
const Main = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [images, setImages] = useState([
    "https://images.unsplash.com/photo-1505968409348-bd000797c92e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    "https://images.unsplash.com/photo-1561816544-21ecbffa09a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1502236876560-243e78f715f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1617079114138-9cf245e006c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  ]);
  const switchImage = () => {
    if (currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    } else {
      setCurrentImage(0);
      setImages(images);
    }
    return currentImage;
  };
  useEffect(() => {
    setInterval(switchImage, 1000);
  }, []);
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
        <img src={images[0]} alt="cleaning images" width="100%" height="100%" />
      </div>
      <div className="home home--3">
        <img src={images[3]} alt="cleaning images" width="100%" height="100%" />
      </div>
      <div className="home home--4">
        <img src={images[2]} alt="cleaning images" width="100%" height="100%" />
      </div>
    </div>
  );
};

export default Main;
