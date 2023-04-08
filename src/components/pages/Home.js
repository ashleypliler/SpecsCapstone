import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import Video from '../Video';
import { Link } from 'react-router-dom';




export default function Home() {
  return (
      <div className='pageContainer'>
        <div id='contentWrap'>
          <h1 className='home'><Video/></h1>
          <div className='goldenName'>GOLDEN</div>
          <div className='motto'>"TO HELP YOU KNOW THAT YOU MATTER"</div>
          <div className='imageContainer'>
              <Link to="/about">
                <button className='ourStoryBtn'>OUR STORY</button>
              </Link>
          </div>
          <div className='bar'>"THERE IS HOPE, EVEN WHEN YOUR BRAIN TELLS YOU THERE ISN'T" - JOHN GREEN</div>
          <div className='productContainer'>
              <Link to="/products">
                <button className='productsBtn'>PRODUCTS</button>
              </Link>
          </div>
          <div className='donationsHome'>
            <Link to="/products">
              <button className='donationsBtn'>VIEW PRODUCTS</button>
            </Link>
          </div>
          <div className='needHelp'>
            <Link to="/help">
              <button className='helpBtn'>CONTACT US HERE</button>
            </Link>
          </div>
        </div>
        <div className='footer'>
         <Footer/>
        </div>
      </div>
  );
}