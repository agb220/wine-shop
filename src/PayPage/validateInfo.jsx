import React from "react";
import valid from "card-validator";

function validateInfo(values) {
  let errors = {};
  let creditCard = valid.number(values.number);
  creditCard.expirationDate = valid.expirationDate(values.expiration);
  creditCard.cardholderName = valid.cardholderName(values.name);
  creditCard.cvc = valid.cvv(values.ccvc);

  console.log(creditCard);

  errors.show = true;
  errors.variant = "danger";
  errors.message = "An unknown error occurred. Please try again later";
  errors.cname = false;
  errors.cnumber = false;
  errors.cexp = false;
  errors.ccvc = false;

  // Card CVC
  if (values.cvc === null || !values.cvc.trim()) {
    errors.message = "Credit card CVC is not complete";
  } else if (creditCard.cvc.isValid) {
    errors.ccvc = true;
  } else {
    errors.message = "Credit card CVC is inValid";
  }

  // Card expiration
  if (values.expiration === null || !values.expiration.trim()) {
    errors.message = "Credit card expiration is not complete";
  } else if (creditCard.expirationDate.isValid) {
    errors.cexp = true;
  } else {
    errors.message = "Credit card expiration is inValid";
  }

  // Card number
  if (values.number === null || !values.number.trim()) {
    errors.message = "Credit card number is not complete";
  } else if (creditCard.isValid) {
    errors.cnumber = true;
  } else {
    errors.message = "Credit card number is inValid";
  }

  // Card name
  if (values.name === null || !values.name.trim()) {
    errors.message = "Cardholder name is not complete";
  } else if (creditCard.cardholderName.isValid) {
    errors.cname = true;
  } else {
    errors.message = "Cardholder name is inValid";
  }

  if (errors.cname && errors.cnumber && errors.ccvc && errors.cexp) {
    errors.variant = "success";
    errors.message = "Credit card is valid";
  }

  return errors;
}

export default validateInfo;
