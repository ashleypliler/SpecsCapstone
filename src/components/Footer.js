import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { ImFacebook, ImInstagram } from "react-icons/im";

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <label className="footer-page-label" id="aboutLabel">
          ABOUT US
        </label>
        <Link className="footer-links" id="footer-about" to="/about">
          Our Story
        </Link>

        <label className="footer-page-label" id="loginLabel">
          MY ACCOUNT
        </label>
        <Link className="footer-links" id="footer-login" to="/login">
          Login / Sign Up
        </Link>

        <label className="footer-page-label" id="productsLabel">
          PRODUCTS
        </label>
        <Link className="footer-links" id="footer-products" to="/products">
          See What's New
        </Link>

        <label className="footer-page-label" id="helpLabel">
          HELP
        </label>
        <Link className="footer-links" id="footer-help" to="/help">
          Need Help?
        </Link>

        <label className="emailLabel" id="followUs">
          FOLLOW US
        </label>
        <a href="https://www.facebook.com/profile.php?id=100091503765920">
          <ImFacebook className="icons" id="fb"></ImFacebook>
        </a>
        <a href="https://www.instagram.com/goldenyou.co/">
          <ImInstagram className="icons" id="insta" />
        </a>
        <label className="emailLabel">SIGN UP FOR OUR EMAILS!</label>
        <input className="emails" placeholder="Enter your email"></input>
      </div>
    </footer>
  );
};

export default Footer;
