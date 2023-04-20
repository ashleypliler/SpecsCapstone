import React, {useContext} from "react";
import "./Cart.css";
import Footer from "../Footer";
import { ITEMS } from "../products/items";
import { ShopContext } from "../../context/ShopContext";
import { CartItem } from "./cart/CartItem";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  return (
    <div className="cart">
    <div>
    <h1 className="header">YOUR CART ITEMS</h1>
    </div>
      <div className="cartItems">
        {ITEMS.map((product) => {
          if(cartItems[product.id] !== 0) {
            return <CartItem data={product}/>
          }
        })}
      </div>
      <div className="checkout">
        <p>Subtotal: ${getTotalCartAmount}</p>
        <button><Link to='/products' className="continueLink">Continue Shopping</Link></button>
        <button>Checkout</button>
      </div>
      
      <div className="footerCart">
        <Footer />
      </div>
    </div>
  );
}
