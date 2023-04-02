import React from "react";
import './Footer.css';
import { ImFacebook, ImInstagram } from "react-icons/im";

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <ImFacebook className="icons" id="fb"/>
        <ImInstagram className="icons" id="insta"/>
        <label className="emailLabel">SIGN UP FOR OUR EMAILS!</label>
        <input className="emails" placeholder="Enter your email"></input>
      </div>
    </footer>
  );
};

export default Footer;
