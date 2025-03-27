import React from "react";
import "./Footer.css";


import instagramIcon from "../../assets/footer/instagram-icon.png";
import facebookIcon from "../../assets/footer/facebook-icon.png";
import xIcon from "../../assets/footer/twitter-icon.avif";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-section-left">
          <p>Contact us!</p>
          <p>orhan.sevilir@novi-education.nl</p>
        </div>
        <div className="footer-section footer-section-center">
          <p>© 2025,MyFitnessPlate</p>
        </div>

        
        <div className="footer-section footer-section-right">
          <p>Follow Us!</p>
          <div className="social-icons">
            <img src={instagramIcon} alt="Instagram" />
            <img src={facebookIcon} alt="Facebook" />
            <img src={xIcon} alt="X" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
