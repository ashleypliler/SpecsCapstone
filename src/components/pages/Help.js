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
      It's a fact of life that everyone needs help sometimes, whether we like to admit it or not. Life can be tough and challenging, and we all face struggles and setbacks along the way. But the good news is that asking for help is a sign of strength, not weakness.

      One area where help is especially important is mental health. Mental health is just as important as physical health, but unfortunately, it's often overlooked or stigmatized. The truth is that everyone struggles with their mental health at some point in their lives, whether it's due to stress, anxiety, depression, or other issues. And just like with physical health, it's important to seek help when we need it.
      
      Remember, you matter. Your mental health matters. And asking for help when you need it is a brave and courageous thing to do. There's no shame in seeking support, whether it's from friends, family, or a mental health professional. In fact, reaching out for help can be the first step towards feeling better and living a happier, healthier life.
      
      So don't be afraid to speak up and ask for help when you need it. You're not alone, and there are people who care about you and want to support you. Everyone deserves to live a life that's filled with joy, purpose, and fulfillment, and with a little help, you can get there.
      </div>
      <div className="footerHelp">
        <Footer />
      </div>
    </div>
  );
}
