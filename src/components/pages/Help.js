import React from "react";
import "../../App.css";
import "./Help.css";
import Footer from "../Footer";
import { BsPhone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import ButtonMailto from "../email";

export default function Help() {
  return (
    <div className="help">
      <h1 className="pic">NEED TO TALK?</h1>
      <div className="contact">
        <ButtonMailto
          className="email-icon"
          label={<AiOutlineMail className="email-icon" />}
          mailto="mailto:goldenyou.co@gmail.com"
        ></ButtonMailto>
        <a href="tel:801-854-2363">
          <BsPhone className="email-icon" id="phone-icon"></BsPhone>
        </a>
      </div>
      <span className="contactHere">Contact us here!</span>
      <div className="lifeline">
       <p >Talk to the Suicide & Crisis Lifeline here: <a id="lifeNum" href="tel:988">#988</a></p>
      </div>
      <div className="words-help">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Arcu cursus vitae
        congue mauris rhoncus aenean. Dictumst vestibulum rhoncus est
        pellentesque elit ullamcorper dignissim. Urna nec tincidunt praesent
        semper. Amet dictum sit amet justo donec enim diam vulputate. Maecenas
        ultricies mi eget mauris pharetra et ultrices. Amet facilisis magna
        etiam tempor orci. Mauris rhoncus aenean vel elit scelerisque mauris
        pellentesque. Egestas maecenas pharetra convallis posuere morbi. Duis ut
        diam quam nulla porttitor massa id. Volutpat sed cras ornare arcu dui.
        Amet nulla facilisi morbi tempus iaculis urna id volutpat. Id velit ut
        tortor pretium viverra suspendisse potenti. Euismod elementum nisi quis
        eleifend quam adipiscing vitae proin. Ut venenatis tellus in metus
        vulputate eu scelerisque. Mauris ultrices eros in cursus turpis massa.
        Odio eu feugiat pretium nibh. Tincidunt augue interdum velit euismod in
        pellentesque massa. Molestie at elementum eu facilisis sed odio.
        Consectetur a erat nam at lectus urna duis. Iaculis eu non diam.
      </div>
      <div className="footerHelp">
        <Footer />
      </div>
    </div>
  );
}
