import React from "react";
import "./css/Home.css";
import ncc from "./assets/ncc.png";
import dlss from "./assets/dlss.png";
import mayurlogo from "./assets/mayurlogo.png";
import ashoka from "./assets/Ashoka_Clipart_Hd_PNG__Indian_Tricolor_Wave_Flag_With_Ashoka_Vector__Republic_Day__Decoration__15_August_PNG_Image_For_Free_Download-removebg-preview 1.jpg";
import trusti from "./assets/trusti.jpg";
import mission from "./assets/mission.jpeg";
import vision from "./assets/vision.jpeg";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"

class About extends React.Component {
  render() {
    return (
      <div>
        {/* Navbar */}
        <div className="App">
          {/* <Navbar /> */}
        </div>
        {/* Navbar */}

        <img src={ashoka} className="ashoka" alt="" />

        <hr />

        <p className="trusti text-center">
          <h1>Trusti Information</h1>
        </p>

        <hr />

        <div className="container">
          <p className="right-image">
            <img src={trusti} className="trustiimg" alt="" />
          </p>
          <p className="left-paragraph">
            About Mulubhai, who are, which school trusti special works for
            party, achivemnts
          </p>
        </div>

        <hr />
        <p className="trusti text-center">
          <h1>About Us</h1>
        </p>
        <hr />
        <div className="container">
          <p className="left-paragraphab">
            GMDC School Information How many student are there, which year
            established which standard which type of facility are provided here,
            who are eligible
          </p>
        </div>
        <hr />
        <p className="trusti text-center">
          <h1>Our Mission</h1>
        </p>
        <hr />

        <div className="container">
          <p className="right-image">
            <img src={mission} className="trustiimg" alt="" />
          </p>
          <p className="left-paragraph">
            Mayur Education Campus is dedicated to fostering a learning
            environment that liberates students to explore, create, and
            challenge themselves intellectually. Committed to opening minds to
            knowledge, we encourage students to embrace educational
            opportunities with respect for diverse ideas and free expression.
            Our mission is to instill in students a sense of joy in discovery,
            critical thought, and the pursuit of excellence through productive
            cooperation. At Mayur, we emphasize the importance of assuming
            responsibility for personal actions, removing constraints on full
            participation, and inspiring students to explore their capabilities
            and interests. Our goal is to identify and nurture each individual
            intellectual and human potential, creating a dynamic educational
            experience that empowers students to navigate, create, and
            contribute to the world around them.
          </p>
        </div>
        <hr />
        <p className="trusti text-center">
          <h1>Our Vision</h1>
        </p>
        <hr />
        <div className="container">
          <p className="right-image">
            <img src={vision} className="trustiimg" alt="" />
          </p>
          <p className="left-paragraph">
            Mayur Education Campus envisions students cultivating personal and
            academic excellence, along with values such as tolerance,
            responsibility, and self-confidence, within a diverse educational
            environment. Our vision is centered on preparing students for
            lifelong learning and empowering them for effective leadership in
            society. Aligned with our philosophy is the belief that every child
            is unique, and we recognize diverse learning styles, addressing
            individual needs through a well-balanced curriculum and varied
            instructional methodologies. Emphasizing a passion for teaching,
            extracurricular activities, experiential learning, and critical
            thinking, Mayur Education Campus aims to nurture independent
            thinkers, problem solvers, and socially responsible individuals who
            appreciate democratic values and advocate for the protection of our
            environment. As a child-centered institution, Mayur Education Campus
            is committed to delivering the highest quality education services,
            with parents as equal partners in the educational journey.
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

export default About;
