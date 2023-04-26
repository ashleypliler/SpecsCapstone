import React from "react";
import "../../App.css";
import "./About.css";
import Footer from '../Footer';

export default function About() {
  return (
    <div className="about">
      <h1 className="peoplePic">WHAT IS GOLDEN?</h1>
      <div className="words">
      Golden is a clothing website founded in 2023 with a mission to make a positive impact on mental health. Ashley, the founders, were inspired to create a fashion brand that not only provides stylish clothing but also gives back to the community. They donate a portion of their profits to mental health charities to fund research, education, and resources for those in need.
      Golden's clothing line offers trendy and high-quality pieces that cater to people of all ages and genders. They regularly collaborate with mental health organizations and advocates, hosting events and workshops to destigmatize mental health issues.
      Ashley's dedication to mental health awareness has created a ripple effect that has touched countless lives. As Golden continues to grow, they hope to expand their impact and reach even more people. Golden is not just a clothing website, it's a movement representing hope, resilience, and support for those who need it most.
      </div>
    <div className='footerAbout'>
      <Footer/>
    </div>
    </div>
  );
}
