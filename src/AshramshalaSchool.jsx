import React from "react";
import "./css/Home.css";
import ncc from "./assets/ncc.png";
import dlss from "./assets/dlss.png";
import mayurlogo from "./assets/mayurlogo.png";
import errorimg from "./assets/errorimg.jpeg";
import ashramshalaschool from "./assets/ashram_shala_school.jpg";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

class Ashramshalaschool extends React.Component {
  render() {
    return (
      <div>
        {/* Navbar */}
        <div className="App">
          {/* <Navbar /> */}
        </div>
        {/* Navbar */}
        <img src={ashramshalaschool} className="kumarchatra" alt="" />

        <hr />

        <p className="trusti text-center">
          <h1>Asharam Shala School for Stardard 1 to 7 Boys</h1>
        </p>

        <hr />

        <div className="image-container">
          <img src={errorimg} alt="Image 1" className="gallery-image" />
          <img src={errorimg} alt="Image 2" className="gallery-image" />
          <img src={errorimg} alt="Image 3" className="gallery-image" />
        </div>

        <hr />

        <div className="container">
          <p className="left-paragraphab">
            Asharam Shala Information How many student are there, which year
            established how many room are there, which type of facility are
            provided here, who are eligible
          </p>
        </div>

        <div className="image-container">
          <img src={ncc} className="foo-logo" alt="" />
          <img src={dlss} className="foo-logo" alt="" />
          <img src={mayurlogo} className="foo-logo" alt="" />
        </div>

        {/* FOOTER */}
        <div className="App">
          <Footer />
        </div>
        {/* FOOTER */}
      </div>
    );
  }
}

export default Ashramshalaschool;
