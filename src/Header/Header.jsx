import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import CartBtn from "../Cart/CartBtn";
import RegistrationPage from "../RegistrationPage/RegistrationPage";
import { resetPayOrder } from "../redux/actions/payCardAction";

import "./header.css";

function Header() {
  const dispatch = useDispatch();
  const [modalActive, setModalActive] = useState(false);
  const { payOrder } = useSelector(({ payCard }) => payCard);
  const onResetPayOrder = () => {
    dispatch(resetPayOrder());
  };

  return (
    <div className="header">
      <header className="header-block">
        <Link to={"/"}>
          <div className="header-block__logo" onClick={onResetPayOrder}>
            WINE SHOP
          </div>
        </Link>
        <div className="header-block__info">
          <div className="registration-btn">
            <button className="btn-reg" onClick={() => setModalActive(true)}>
              Registration / Login
            </button>
          </div>
          <RegistrationPage active={modalActive} setActive={setModalActive} />
          <CartBtn />
        </div>
      </header>
    </div>
  );
}

export default Header;
