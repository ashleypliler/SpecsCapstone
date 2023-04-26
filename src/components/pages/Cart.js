import React, {useContext} from "react";
import "./Cart.css";
import Footer from "../Footer";
import { ITEMS } from "../products/items";
import { ShopContext } from "../../context/ShopContext";
import { CartItem } from "./cart/CartItem";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  return (
    <div className="cart">
    <div>
    <h1 className="cartHeader">YOUR CART ITEMS</h1>
    </div>
      <div className="cartItems">
        {ITEMS.map((product) => {
          if(cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product}/>
          }
        })}
      </div>
      <div className="checkout">
        <p className="subtotal">Subtotal: ${totalAmount}</p>
        <button><Link to='/products' className="continueLink">Continue Shopping</Link></button>
        <button>Checkout</button>
      </div>
      
      <div className="footerCart">
        <Footer />
      </div>
    </div>
  );
}
