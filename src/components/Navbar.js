import React, { useState } from "react";
import { Button } from "./Button";
import { Cart } from "./Cart";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMoblieMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          GOLDEN 
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/menu" className="nav-links" onClick={closeMoblieMenu}>
              MENU <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link
              to="/login"
              className="nav-links-mobile"
              onClick={closeMoblieMenu}
            >
              LOGIN
            </Link>
          </li>
        </ul>
        <Cart/>
        <div className="cartCounter">2</div>
        <Button />
      </nav>
    </div>
  );
};

export default Navbar;
