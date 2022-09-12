import React, { useState } from "react";
// import { Button, Form, Alert, Row, Col } from "react-bootstrap";
// import "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import useForm from "./useForm";
//import Cards from "react-credit-cards";
// import "react-credit-cards/es/styles-compiled.css";

import "./paypage.css";

function CreditCardForm() {
  // const [number, setNumber] = useState("");
  // const [name, setName] = useState("");
  // const [expiry, setExpiry] = useState("");
  // const [cvc, setCvc] = useState("");
  // const [focus, setFocus] = useState("");

  const { handleChange, handleFocus, handleSubmit, values, errors } = useForm();

  return (
    <div className="pay-page">
      <h1 className="text-center"> Please enter your credit card</h1>
      <div className="box justify-content-center align-items-center">
        <div className="form-div">
          <form onSubmit={handleSubmit}>
            <div className="credit-card">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Cardholder Name"
                value={values.name}
                onChange={handleChange}
                onFocus={handleFocus}
                isValid={errors.cname}
              ></input>
              <input
                type="text"
                id="number"
                name="number"
                maxLength={16}
                placeholder="Cardholder Number"
                value={values.number}
                onChange={handleChange}
                onFocus={handleFocus}
                isValid={errors.cnumber}
              ></input>
              <input
                type="text"
                id="expiration"
                name="expiration"
                maxLength={5}
                placeholder="Cardholder Expiration"
                value={values.expiration}
                onChange={handleChange}
                onFocus={handleFocus}
                isValid={errors.cexpiration}
              ></input>
              <input
                type="text"
                id="cvc"
                name="cvc"
                placeholder="Cardholder CVC"
                maxLength={3}
                value={values.cvc}
                onChange={handleChange}
                onFocus={handleFocus}
                isValid={errors.ccvc}
              ></input>
            </div>
            <button
              className="btn-pay"
              size="block"
              id="validateButton"
              type="submit"
            >
              Pay
            </button>
          </form>
        </div>
      </div>
      <alert id="alertMessage" variant={errors.variant} show={errors.show}>
        {errors.message}
      </alert>
    </div>
  );
}

export default CreditCardForm;
