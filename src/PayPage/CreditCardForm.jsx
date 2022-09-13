import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import axios from "axios";
import { useDispatch } from "react-redux";

import { payCard } from "../redux/actions/products";
import "./paypage.css";

function CreditCardForm() {
  const dispatch = useDispatch();
  const [number, setNumber] = useState("");
  const [numberError, setNumberError] = useState("");
  const [numberDirty, setNumberDirty] = useState("");
  const [name, setName] = useState("");
  const [nameDirty, setNameDirty] = useState("");
  const [nameError, setNameError] = useState("");
  const [expiry, setExpiry] = useState("");
  const [expiryDirty, setExpiryDirty] = useState("");
  const [expiryError, setExpiryError] = useState("");
  const [cvc, setCvc] = useState("");
  const [cvcError, setCvcError] = useState("");
  const [cvcDirty, setCvcDirty] = useState("");
  const [focus, setFocus] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if ((nameError, numberError, expiryError, cvcError)) {
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
    alert("Your order is paid");
    console.log("pay");

    axios({
      method: "post",
      url: "http://localhost:4000/cards",
      data: {
        id,
        number,
        name,
        cvc,
        expiry,
      },
    }).then(({ data }) => {
      dispatch(
        payCard({
          id,
          number,
          name,
          cvc,
          expiry,
        })
      );
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
    const regex = /^[1-9]\d{3,3}$/;
    if (!regex.test(e.target.value)) {
      setCvcError("Please, enter three only number");
    } else {
      setCvcError("");
    }
  };

  const numberHandler = (e) => {
    setNumber(e.target.value);
    const regex = /^[1-9]\d{16,16}$/;
    if (!regex.test(e.target.value)) {
      setNumberError("Please check the card number");
    } else {
      setNumberError("");
    }
  };

  const nameHandler = (e) => {
    setName(e.target.value);
    const regex = /^[A-Z]+$/i;
    if (
      regex.test(
        String(e.target.value)
          .replace(/ +/g, " ")
          .trim()
      )
    ) {
      setNameError("Please, enter your name");
    } else {
      setNameError("");
    }
  };

  return (
    <div className="pay-page">
      <h1 className="text-center"> Please enter your credit card</h1>
      <div className="left">
        <form className="card-wrapper" onSubmit={formHandler}>
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
              // onChange={handleChange}
              // onFocus={handleFocus}
              // isValid={errors.ccvc}
            ></input>
          </div>
          <div className="card-front">
            <p className="card-bank">Card of Bank</p>
            <p className="card-logo">Logo</p>
            {nameDirty && nameError && (
              <div className="errorName">{nameError} </div>
            )}
            <input
              className="card-name"
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => nameHandler(e)}
              onBlur={(e) => blurHandler(e)}
              // onChange={handleChange}
              // onFocus={handleFocus}
              // isValid={errors.cname}
            ></input>
            {numberDirty && numberError && (
              <div className="errorNumber">{numberError} </div>
            )}
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
              // onChange={handleChange}
              // onFocus={handleFocus}
              // isValid={errors.cnumber}
            ></input>
            <input
              className="card-expiry"
              type="text"
              id="expiry"
              name="expiry"
              maxLength={5}
              placeholder="MM/YY"
              // value={values.expiration}
              // onChange={handleChange}
              // onFocus={handleFocus}
              // isValid={errors.cexpiration}
            ></input>
          </div>
        </form>
        <button
          className="btn-pay"
          size="block"
          id="validateButton"
          type="submit"
          disabled={!isValid}
        >
          Pay
        </button>
      </div>
    </div>
  );
}

export default CreditCardForm;

//  <form onSubmit={handleSubmit}></form>
