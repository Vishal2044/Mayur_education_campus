import React from 'react';
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';

class Footer extends React.Component {
  render() {
    return (
      <div>
        {/* Navigation Bar */}
        <footer className="vertical-footer">
  <div className="footer-content">
    <nav className="menu">    
      <a href="#">Kumar Chatralay</a>
      <a href="#">Asharam Shala</a>
      <a href="#">Girls Hostel</a>      
    </nav>

    <nav className="menu">  
      <a href="#">Asharam Shala</a>
      <a href="#">GMDC School</a>
      <a href="#">Science School</a>      
    </nav>

    <nav className="menu">    
      <a href="#">BA</a>
      <a href="#">BSC</a>      
    </nav>
    <nav className="menu">    
      <h3 href="#">Student Results</h3>
      <h3 href="#">Gallery</h3>
      <h3 href="#">Admission Enquiry</h3>
      <h3 href="#">Contact Now</h3>      
    </nav>
  </div>

  <div className="footer-bottom">
    <div className="logof">    
    <h1>MAYUR EDUCATION CAMPUS</h1>
    </div>

    <div className="social-icons">
      <a href="#" target="_blank" rel="noopener noreferrer">
      <img src={instagram} className="icon" alt=""/>        
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <img src={facebook} className="ficon" alt=""/>
      </a>      
    </div>
  </div>
  <section id="copy-right">
        <div className="copy-right-sec"><i className="fa-solid fa-copyright"></i> © 2024 All Rights Reserved <a href="#">MAYUR EDUCATION CAMPUS</a></div>
      </section>
</footer>
        {/* End Navigation Bar */}

      </div>
    );
  }
}

export default Footer;
