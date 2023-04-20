import React from "react";
import "../../App.css";
import "./Products.css";
import Footer from "../Footer"; 
import {ITEMS} from '../products/items';
import { Product } from "../products/Product";
import '../products/items.css';



export default function Products() {
  
  
  return (
    <div className="shop">
      <div>
        <h1 className="header">PRODUCTS</h1>
      </div>
      <div className="products">
      {ITEMS.map((product) => <Product data={product}/>)}
      </div> 
    
    
  
      <div className="footerProducts">
        <Footer />
      </div>
    </div>
  );
}
