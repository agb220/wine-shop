import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./cart.css";
import cart from "../assign/cart-logo/cart.svg";

function CartBtn() {
  const { totalPrice, totalCount } = useSelector(({ cart }) => ({
    totalPrice: cart.totalPrice,
    totalCount: cart.totalCount,
  }));
  //const { payOrder } = useSelector(({ payCard }) => payCard);

  return (
    <div className="cart-block">
      <div className="cart-block__btn">
        <Link to="CartPage">
          <button className="cart-btn">
            <div className="cart-btn__price">{totalPrice} UAH</div>
            <img className="cart-btn__logo" src={cart} alt="cart" />
            <div className="cart-btn__count">{totalCount}</div>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CartBtn;
