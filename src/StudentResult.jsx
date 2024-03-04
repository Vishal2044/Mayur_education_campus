import React from "react";
import "./css/Home.css";
import resulto from "./assets/resulto.jpg";
import results from "./assets/results.jpg";
import resultt from "./assets/resultt.jpg";
import resultf from "./assets/resultf.jpg";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

class Results extends React.Component {
  render() {
    return (
      <div>
        {/* Navbar */}
        <div className="App">
          {/* <Navbar /> */}
        </div>

        <p className="trusti text-center">
          <h1>Student Achievements</h1>
        </p>
        <hr />

        <div className="image-container">
          <img src={resulto} alt="Image 1" className="gallery-image" />
          <img src={results} alt="Image 2" className="gallery-image" />
          <img src={resultt} alt="Image 3" className="gallery-image" />
        </div>
        <div className="image-container">
          <img src={resultf} alt="Image 1" className="gallery-image" />
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

export default Results;
