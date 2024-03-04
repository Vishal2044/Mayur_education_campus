// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./css/Home.css";
import Footer from "./components/Footer";

const ContactForm = () => {   

 
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwhsKHXAOkibBDThjMWFil_aDfF3m4Xs0ZejjvWW0Gax9uQ6tINORVGqmrPMkP9oxPEfA/exec";
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setMessage("Message sent successfully");
        setTimeout(function () {
          setMessage("");
        }, 3000);
        form.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error!", error.message);
    }
  };

  return (
    <div className="App">
   {/* <Navbar /> */}
 
    <div className="contact-right">       
      <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
        <input type="text" name="Name" placeholder="Enter Your Name" required />
        <input
          type="email"
          name="Email"
          placeholder="Enter Your Email"
          required
        />
        <input
          type="phone"
          name="Phone"
          placeholder="Enter Your Phone Number"
          required
        />
        <textarea
          name="Message"
          rows="6"
          placeholder="Enter Your Message"
        ></textarea>
        <button type="submit" className="btn btn2">
          Submit
        </button>
        <span id="msg">{message}</span>
      </form>      
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16434.761848707436!2d69.27804941273729!3d22.13220780326416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3956f3cbf53879d7%3A0x8cfce04701015f43!2sG.M.D.C%20HIGHSCHOOL%20NANDANA!5e0!3m2!1sen!2sin!4v1708700652618!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
    <div className="App">
        <Footer />
      </div> 
    </div>       
  );
};

export default ContactForm;
