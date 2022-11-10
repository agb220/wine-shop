import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CartBtn from "../Cart/CartBtn";
import RegistrationPage from "../RegistrationPage/RegistrationPage";
import { resetPayOrder } from "../redux/actions/payCardAction";

import "./header.css";
import LogOut from "../RegistrationPage/LogOut";

function Header() {
  const dispatch = useDispatch();
  const [modalActive, setModalActive] = useState(false);
  const onResetPayOrder = () => {
    dispatch(resetPayOrder());
  };
  const user = useSelector((state) => state.user);

  return (
    <div className="header">
      <header className="header-block">
        <div className="header-block__body">
          <Link to={"/"}>
            <div className="header-block__logo" onClick={onResetPayOrder}>
              WINE SHOP
            </div>
          </Link>
          <div className="header-block__info">
            {user.id === undefined ? (
              <>
                <div className="registration-btn">
                  <button
                    className="btn-reg"
                    onClick={() => setModalActive(true)}
                  >
                    Registration / Login
                  </button>
                </div>
                <RegistrationPage
                  active={modalActive}
                  setActive={setModalActive}
                />
              </>
            ) : (
              <LogOut />
            )}

            <CartBtn />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
