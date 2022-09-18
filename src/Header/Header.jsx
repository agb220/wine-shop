import React from "react";
import { Link } from "react-router-dom";

import CartBtn from "../Cart/CartBtn";
import RegistrationBTN from "../RegistrationPage/RegistrationBTN";

import "./header.css";

function Header() {
  return (
    <div className="header">
      <header className="header-block">
        <Link to={"/"}>
          <div className="header-block__logo">WINE SHOP</div>
        </Link>
        <div className="header-block__info">
          <RegistrationBTN />
          <CartBtn />
        </div>
      </header>
    </div>
  );
}

export default Header;
