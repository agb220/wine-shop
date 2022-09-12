import React from "react";
import { Link } from "react-router-dom";

import CartBtn from "../Cart/CartBtn";

import "./header.css";

function Header() {
  return (
    <div className="header">
      <header className="header-block">
        <Link to={"/"}>
          <div className="header-block__logo">WINE SHOP</div>
        </Link>
        <CartBtn />
      </header>
    </div>
  );
}

export default Header;
