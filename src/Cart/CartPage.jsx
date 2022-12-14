import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import CartItem from "./CartItem";
import CreditCardForm from "../PayPage/CreditCardForm";
import {
  clearCart,
  removeCartItem,
  plusCartItem,
  minusCartItem,
} from "../redux/actions/cart";
import { resetPayOrder } from "../redux/actions/payCardAction";

import "./cart.css";

import cart from "../assign/cart-page/cart.svg";
import clear from "../assign/cart-page/clear.svg";
import arrow from "../assign/cart-page/arrow.svg";
import smile from "../assign/cart-page/face.svg";

function CartPage() {
  const dispatch = useDispatch();
  const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);
  const { payOrder } = useSelector(({ payCard }) => payCard);
  const [modalActive, setModalActive] = useState(false);

  //console.log("items", items);

  const addedProducts = Object.keys(items).map((key) => {
    return items[key].items[0];
  });

  const onClearCart = () => {
    if (window.confirm("Clear the basket?")) dispatch(clearCart());
  };

  const onRemoveItem = (id) => {
    if (window.confirm("Do you want to delete this bottle of wine?")) {
      dispatch(removeCartItem(id));
    }
  };

  const onPlusItem = (id) => {
    dispatch(plusCartItem(id));
  };

  const onMinusItem = (id) => {
    dispatch(minusCartItem(id));
  };

  const onResetPayOrder = () => {
    dispatch(resetPayOrder());
  };
  //console.log("payOrder", payOrder);
  return (
    <div className="content">
      <div className="container-cart _container">
        {payOrder !== true ? (
          totalCount ? (
            <div className="container-cart__cart">
              <div className="cart-block">
                <div className="cart-content">
                  <div className="cart">
                    <div className="cart-top">
                      <h2 className="content-title">
                        <img className="cart-cart" src={cart} alt="cart" />
                        Cart
                      </h2>
                      <div className="cart-clear">
                        <img className="clear" src={clear} alt="clear" />
                        <span className="clear-text" onClick={onClearCart}>
                          Clear cart
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="cart-items">
                    {addedProducts.map((obj) => (
                      <CartItem
                        key={obj.id}
                        id={obj.id}
                        imageURL={obj.imageURL}
                        name={obj.name}
                        type={obj.kind}
                        brand={obj.brand}
                        totalPrice={items[obj.id].totalPrice}
                        totalCount={items[obj.id].items.length}
                        onRemove={onRemoveItem}
                        onPlus={onPlusItem}
                        onMinus={onMinusItem}
                      />
                    ))}
                  </div>
                  <div className="cart-bottom">
                    <div className="cart-bottom-details">
                      <span>
                        Total:
                        <b> {totalCount} </b>
                      </span>
                      <span>
                        Total price:
                        <b> {totalPrice}</b>
                        <b> UAH </b>
                      </span>
                    </div>
                  </div>
                  <div className="cart-bottom-btn">
                    <Link to="/" className="cart-btn__outline">
                      <img src={arrow} alt="arrow" />
                      <span>Go back</span>
                    </Link>
                    <div className="cart-pay">
                      <button
                        className="cart-btn__pay"
                        onClick={() => setModalActive(true)}
                      >
                        Pay Now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="container-cart__order">
                  <CreditCardForm
                    active={modalActive}
                    setActive={setModalActive}
                  />
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="cart-empty">
                You have not added any wine bottles to your cart yet
                <img className="cart-empty__img" src={smile} alt="smile" />
              </div>
              <div className="cart-empty-btn">
                <Link to="/" className="cart-btn__outline">
                  <img src={arrow} alt="arrow" />
                  <span>Go back</span>
                </Link>
              </div>
            </>
          )
        ) : (
          <div className="cart-order__pay">
            <div className="cart-order__content">
              <h2>Your order has been paid. </h2>
              <p> Thank you for your order.</p>
              <p> Our manager will tell you about 5-10 minutes.</p>
            </div>
            <Link to="/" className="cart-btn__outline">
              <div onClick={onResetPayOrder}>
                <img
                  className="cart-btn__outline-img"
                  src={arrow}
                  alt="arrow"
                />
                <span>Go back</span>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;
