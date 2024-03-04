import React from "react";
import "./css/Home.css";
import gmdcgate from "./assets/gmdcgate.jpg";
import kumarcht from "./assets/kumarchat.jpg";
import gmdc from "./assets/mayursec.png";
import yogao from "./assets/yogao.jpg";
import yogas from "./assets/yogas.jpg";
import college from "./assets/collegeimg.jpg";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

class Gallery extends React.Component {
  render() {
    return (
      <div>
        {/* Navbar */}
        <div className="App">
          {/* <Navbar /> */}
        </div>

        <p className="trusti text-center">
          <h1>Gallery</h1>
        </p>
        <hr />

        <div className="image-container">
          <img src={gmdcgate} alt="Image 1" className="gallery-image" />
          <img src={kumarcht} alt="Image 2" className="gallery-image" />
          <img src={gmdc} alt="Image 3" className="gallery-image" />
        </div>
        <div className="image-container">
          <img src={yogao} alt="Image 1" className="gallery-image" />
          <img src={yogas} alt="Image 2" className="gallery-image" />
          <img src={college} alt="Image 3" className="gallery-image" />
        </div>

        <br />

        {/* FOOTER */}
        <div className="App">
          <Footer />
        </div>
        {/* FOOTER */}
      </div>
    );
  }
}

export default Gallery;
