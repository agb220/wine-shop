import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { resetCart } from "../redux/actions/cart";
import { payCard } from "../redux/actions/payCardAction";
import "./paypage.css";

function CreditCardForm({ active, setActive }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const [number, setNumber] = useState("");
  const [numberError, setNumberError] = useState("The field must not be empty");
  const [numberDirty, setNumberDirty] = useState(false);
  const [name, setName] = useState("");
  const [nameDirty, setNameDirty] = useState(false);
  const [nameError, setNameError] = useState("The field must not be empty");
  const [expiry, setExpiry] = useState("");
  const [expiryDirty, setExpiryDirty] = useState(false);
  const [expiryError, setExpiryError] = useState("The field must not be empty");
  const [cvc, setCvc] = useState("");
  const [cvcError, setCvcError] = useState("The field must not be empty");
  const [cvcDirty, setCvcDirty] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [payOrder, setPayOrder] = useState(false);

  useEffect(() => {
    if (nameError || numberError || expiryError || cvcError) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [nameError, numberError, expiryError, cvcError]);

  const formHandler = (event) => {
    event.preventDefault();
    const id = nanoid(5);
    setNumber("");
    setName("");
    setExpiry("");
    setCvc("");
    setActive(false);
    setPayOrder(true);
    alert("Your order is paid");

    axios({
      method: "post",
      url: "http://localhost:4000/orders",
      data: {
        id,
        payOrder,
        user: user.id,
        ...cart,
        card: {
          number,
          name,
          cvc,
          expiry,
        },
      },
    }).then(({ data }) => {
      dispatch(
        payCard({
          id,
          payOrder: true,
          user: user.id,
          ...cart,
          card: {
            number,
            name,
            cvc,
            expiry,
          },
        })
      );
      onResetCart();
    });
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "name":
        setNameDirty(true);
        break;

      case "number":
        setNumberDirty(true);
        break;

      case "expiry":
        setExpiryDirty(true);
        break;

      case "cvc":
        setCvcDirty(true);
        break;

      default:
        break;
    }
  };

  const cvcHandler = (e) => {
    setCvc(e.target.value);
    const regex = /^[1-9]\d{,3}$/;
    if (cvc.length !== 2 && !regex.test(e.target.value)) {
      setCvcError("Please check the cvc number");
    } else {
      setCvcError("");
    }
    //console.log("cvc.length", cvc.length);
  };

  const numberHandler = (e) => {
    setNumber(e.target.value);
    const regex = /^[1-9]\d{,16}$/;
    if (number.length !== 15 && !regex.test(e.target.value)) {
      setNumberError("Please check the card number");
    } else {
      setNumberError("");
    }
  };

  const nameHandler = (e) => {
    setName(e.target.value);
    const regex = /^[a-zA-Z\s]+$/;
    if (
      !regex.test(
        String(e.target.value)
          .replace(/ +/g, " ")
          .trim()
      )
    ) {
      setNameError("Please, enter your name");
    } else {
      setNameError("");
    }
    //console.log("e.target.value", e.target.value);
  };

  const expiryHandler = (e) => {
    setExpiry(e.target.value);
    const regex = /(\d{2})\/(\d{2})/;
    // let dateNow = new Date();
    // let month = +dateNow.getMonth() + 1;
    // console.log("month", month);

    if (!regex.test(String(e.target.value))) {
      setExpiryError("Please check the card expiry");
    } else {
      setExpiryError("");
    }
  };

  const onResetCart = () => {
    dispatch(resetCart());
  };

  //console.log("payOrder", payOrder);

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="pay-page" onClick={(e) => e.stopPropagation()}>
        <h1 className="text-center"> Please enter your credit card</h1>
        <form className="card" onSubmit={formHandler}>
          <div className="card-wrapper">
            <div className="card-back">
              <div className="card-back-line"> </div>
              {cvcDirty && cvcError && (
                <div className="errorCvc">{cvcError} </div>
              )}
              <label htmlFor="cvc"> </label>
              <input
                className="card-cvc"
                type="text"
                id="cvc"
                name="cvc"
                placeholder="CVC"
                maxLength={3}
                value={cvc}
                onChange={(e) => cvcHandler(e)}
                onBlur={(e) => blurHandler(e)}
              ></input>
            </div>
            <div className="card-front">
              <p className="card-bank">Card of Bank</p>
              <p className="card-logo">Logo</p>
              {nameDirty && nameError && (
                <div className="errorName">{nameError} </div>
              )}
              <label htmlFor="name"> </label>
              <input
                className="card-name"
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => nameHandler(e)}
                onBlur={(e) => blurHandler(e)}
              ></input>
              {numberDirty && numberError && (
                <div className="errorNumber">{numberError} </div>
              )}
              <label htmlFor="number"> </label>
              <input
                className="card-number"
                type="text"
                id="number"
                name="number"
                maxLength={16}
                placeholder="Number"
                onChange={(e) => numberHandler(e)}
                onBlur={(e) => blurHandler(e)}
                value={number}
              ></input>
              <div className="expiry-block">
                {expiryDirty && expiryError && (
                  <div className="errorExpiry">{expiryError} </div>
                )}
                <label htmlFor="expiry"> </label>
                <input
                  className="card-expiry"
                  type="text"
                  id="expiry"
                  name="expiry"
                  maxLength={5}
                  placeholder="MM/YY"
                  onChange={(e) => expiryHandler(e)}
                  onBlur={(e) => blurHandler(e)}
                  value={expiry}
                ></input>
              </div>
            </div>
          </div>
          <button
            className="btn-pay"
            size="block"
            id="validateButton"
            type="submit"
            disabled={!isValid}
            // onClick={() => onResetCart()}
          >
            Pay
          </button>
        </form>
        <button className="btn-inline" onClick={() => setActive(false)}>
          Cancel payment
        </button>
      </div>
    </div>
  );
}

export default CreditCardForm;
