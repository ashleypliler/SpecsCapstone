import React from "react";
import "../../App.css";
import "./Products.css";
import Footer from "../Footer";
import { ITEMS } from "../products/items";
import { Product } from "../products/Product";
import "../products/items.css";
import { HomeCarousel } from "../carousel/HomeCarousel";
import slide1 from '../../images/slide1.png'
import slide2 from '../../images/slide2.png'
import slide3 from '../../images/slide3.png'
import slide4 from '../../images/slide4.png'
import slide5 from '../../images/slide5.png'
import slide6 from '../../images/slide6.png'

const slides = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6
];


export default function Products() {
  

  return (
    <div className="shop">

      <div className="containerStyles">
        <HomeCarousel HomeCarousel slides={slides} parentWidth={500}></HomeCarousel>
      </div>


      <div className="products">
        {ITEMS.map((product) => (
          <Product data={product} />
        ))}
      </div>

      <div className="footerProducts">
        <Footer />
      </div>
    </div>
  );
}
