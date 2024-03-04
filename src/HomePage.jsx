import React from "react";
import "./css/Home.css";
import mayur1 from "./assets/mayur1.jpg";
import dlsspara from "./assets/dlss-para.jpg";
import ashramshala from "./assets/ashramshala.jpg";
import mapimg from "./assets/mapimg.jpg";
import kumarchat from "./assets/kumarchat.jpg";
import gmdcschool from "./assets/gmdcschool.jpg";
import collegeimg from "./assets/collegeimg.jpg";
import ncc from "./assets/ncc.png";
import dlss from "./assets/dlss.png";
import mayurlogo from "./assets/mayurlogo.png";
// import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"

class Home extends React.Component {
  render() {
    return (
      // NAVBAR
      <div>
        <div className="App">
          {/* <Navbar /> */}
        </div>
        {/* NAVBAR */}

        <img src={mayur1} className="mayur1" alt="" />

        <div className="vertical-boxes">
          <div className="box">
            <img src={dlsspara} className="dlsspara" alt="" />
            <p>SPORT</p>
            <p>
              Mayur Education Campus, Nandana was established in 1988 by
              ________ [currently Saurashtra region of Dwarka,Gujarat].
            </p>
          </div>
          <div className="box">
            <img src={mapimg} className="mapimg" alt="" />
            <p>EVENTS </p>
            <p>
              Information About GMDC school, college, aashram shala school year
              of establish and by___
            </p>
          </div>
          <div className="box">
            <img src={ashramshala} className="asshramshala" alt="" />
            <p>FACILITES</p>
            <p>
              Information About DLSSS and Khel Mahakumbh and Student Achivment,
              Which year dlss established
            </p>
          </div>
        </div>

        <div className="container">
          <p className="right-image">
            <img src={kumarchat} className="kumarchat" alt="" />
          </p>
          <p className="left-paragraph">
            <h2>Boys Hostel</h2>
            Boys Hostle Information How many student are there, which year
            established how many room are there, which type of facility are
            provided here, who are eligible
          </p>
        </div>

        <div className="container">
          <p className="left-paragraph">
            <h2>GMDC School</h2>
            GMDC School Information How many student are there, which year
            established which standard which type of facility are provided here,
            who are eligible
          </p>
          <p className="right-image">
            <img src={gmdcschool} className="kumarchat" alt="" />
          </p>
        </div>

        <div className="container">
          <p className="right-image">
            <img src={collegeimg} className="kumarchat" alt="" />
          </p>
          <p className="left-paragraph">
            <h2>DLSS</h2>
            DLSSl Information How many student are there, which year established
            which standard which type of facility are provided here, who are
            eligible, which sports are here
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

export default Home;
