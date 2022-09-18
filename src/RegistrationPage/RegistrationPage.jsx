import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import axios from "axios";
import { useDispatch } from "react-redux";

import LoginPage from "./LoginPage";
import { registrationUser } from "../redux/actions/registration";

import "./RegistrationPage.css";

function RegistrationPage() {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [userNameDirty, setUserNameDirty] = useState("");
  const [userSurname, setUserSurname] = useState("");
  const [userSurnameError, setUserSurnameError] = useState("");
  const [userSurnameDirty, setUserSurnameDirty] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [userPhoneNumberError, setUserPhoneNumberError] = useState("");
  const [userPhoneNumberDirty, setUserPhoneNumberDirty] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userEmailError, setUserEmailError] = useState("");
  const [userEmailDirty, setUserEmailDirty] = useState("");
  const [userEmailConfirm, setUserEmailConfirm] = useState("");
  const [userEmailConfirmError, setUserEmailConfirmError] = useState("");
  const [userEmailConfirmDirty, setUserEmailConfirmDirty] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordError, setUserPasswordError] = useState("");
  const [userPasswordDirty, setUserPasswordDirty] = useState("");
  const [userPasswordConfirm, setUserPasswordConfirm] = useState("");
  const [userPasswordConfirmError, setUserPasswordConfirmError] = useState("");
  const [userPasswordConfirmDirty, setUserPasswordConfirmDirty] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userAddressError, setUserAddressError] = useState("");
  const [userAddressDirty, setUserAddressDirty] = useState("");
  const [valid, setValid] = useState(false);
  const [agree, setAgree] = useState(false);

  const handleChange = () => {
    if (agree === true) {
      setAgree(true);
    }
    setAgree(!agree);
  };

  useEffect(() => {
    if (
      (userNameError,
      userSurnameError,
      userPhoneNumberError,
      userEmailError,
      userEmailConfirmError,
      userPasswordError,
      userPasswordConfirmError,
      userAddressError)
    ) {
      setValid(false);
    } else {
      setValid(true);
    }
  }, [
    userNameError,
    userSurnameError,
    userPhoneNumberError,
    userEmailError,
    userEmailConfirmError,
    userPasswordError,
    userPasswordConfirmError,
    userAddressError,
  ]);

  const registrationHandler = (event) => {
    event.preventDefault();
    const id = nanoid(5);
    setUserName("");
    setUserSurname("");
    setUserPhoneNumber("");
    setUserEmail("");
    setUserPassword("");
    setUserAddress("");
    alert("You have a registration");
    console.log("reg");

    axios({
      method: "post",
      url: "http://localhost:4000/users",
      data: {
        id,
        userName,
        userSurname,
        userPhoneNumber,
        userEmail,
        userPassword,
        userAddress,
      },
    }).then(({ data }) => {
      dispatch(
        registrationUser({
          id,
          userName,
          userSurname,
          userPhoneNumber,
          userEmail,
          userPassword,
          userAddress,
        })
      );
    });
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "userName":
        setUserNameDirty(true);
        break;

      case "userSurname":
        setUserSurnameDirty(true);
        break;

      case "userPhoneNumber":
        setUserPhoneNumberDirty(true);
        break;

      case "userEmail":
        setUserEmailDirty(true);
        break;

      case "userEmailConfirm":
        setUserEmailConfirmDirty(true);
        break;

      case "userPassword":
        setUserPasswordDirty(true);
        break;

      case "userPasswordConfirm":
        setUserPasswordConfirmDirty(true);
        break;

      case "userAddress":
        setUserAddressDirty(true);
        break;

      default:
        break;
    }
  };

  const userNameHandler = (e) => {
    setUserName(e.target.value);
    const regex = /^[a-zA-Z\s]+$/;
    if (
      !regex.test(
        String(e.target.value)
          .replace(/ +/g, " ")
          .trim()
      )
    ) {
      setUserNameError("Please, enter your name");
    } else {
      setUserNameError("");
    }
    console.log("name", e.target.value);
  };
  const userSurnameHandler = (e) => {
    setUserSurname(e.target.value);
    const regex = /^[a-zA-Z\s]+$/;
    if (
      !regex.test(
        String(e.target.value)
          .replace(/ +/g, " ")
          .trim()
      )
    ) {
      setUserSurnameError("Please, enter your surname");
    } else {
      setUserSurnameError("");
    }
    console.log("surname", e.target.value);
  };

  const userPhoneNumberHandler = (e) => {
    setUserPhoneNumber(e.target.value);
    const regex = /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/;
    if (!regex.test(e.target.value)) {
      setUserPhoneNumberError("Please check the phone number");
    } else {
      setUserPhoneNumberError("");
    }
    console.log("phoneNumber", e.target.value);
  };

  const userEmailHandler = (e) => {
    setUserEmail(e.target.value);
    const regex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    if (!regex.test(e.target.value)) {
      setUserEmailError("Please check the email");
    } else {
      setUserEmailError("");
    }
    console.log("email", e.target.value);
  };

  const userEmailConfirmHandler = (e) => {
    setUserEmailConfirm(e.target.value);
    //const regex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    if (e.target.value !== userEmail) {
      setUserEmailConfirmError("Email not confirm");
    } else {
      setUserEmailConfirmError("");
    }
    console.log("emailConfirm", e.target.value);
  };

  const userPasswordHandler = (e) => {
    setUserPassword(e.target.value);
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/;
    if (!regex.test(e.target.value)) {
      setUserPasswordError("Please enter password");
    } else {
      setUserPasswordError("");
    }
    console.log("password", e.target.value, regex.test(e.target.value));
  };

  const userPasswordConfirmHandler = (e) => {
    setUserPasswordConfirm(e.target.value);
    //const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/;
    if (e.target.value !== userPassword) {
      setUserPasswordConfirmError("Password not confirm");
    } else {
      setUserPasswordConfirmError("");
    }
    console.log("passwordConfirm", e.target.value);
  };

  const userAddressHandler = (e) => {
    setUserAddress(e.target.value);
    const regex = /^[a-zA-Z\s]+$/;
    if (
      !regex.test(
        String(e.target.value)
          .replace(/ +/g, " ")
          .trim()
      )
    ) {
      setUserAddressError("Please, enter your address");
    } else {
      setUserAddressError("");
    }
    console.log("address", e.target.value);
  };

  return (
    <>
      <div className="registration">
        {agree === false ? <LoginPage /> : <div></div>}

        <div className="form">
          <div className="form-checkbox">
            <label htmlFor="checkbox">
              <span>I don't have a registration</span>
            </label>
            <input
              className="btn-checkbox"
              onChange={() => handleChange("agree")}
              checked={agree}
              id="checkbox"
              name="checkbox"
              type="checkbox"
            ></input>
          </div>
          {agree === true ? (
            <form className="form-items" onSubmit={registrationHandler}>
              <div className="form-item">
                {userNameDirty && userNameError && (
                  <p className="form-errors">{userNameError}</p>
                )}
                <label htmlFor="userName"> </label>
                <input
                  className="input"
                  type="text"
                  name="userName"
                  onChange={(e) => userNameHandler(e)}
                  onBlur={(e) => blurHandler(e)}
                  value={userName}
                  placeholder="Name"
                />
              </div>
              <div className="form-item">
                {userSurnameDirty && userSurnameError && (
                  <p className={"form-errors"}>{userSurnameError}</p>
                )}
                <label htmlFor="userSurname"> </label>
                <input
                  className="input"
                  type="text"
                  name="userSurname"
                  onChange={(e) => userSurnameHandler(e)}
                  onBlur={(e) => blurHandler(e)}
                  value={userSurname}
                  placeholder="Surname"
                />
              </div>
              <div className="form-item">
                {userPhoneNumberDirty && userPhoneNumberError && (
                  <p className="form-errors">{userPhoneNumberError}</p>
                )}
                <label htmlFor="userPhoneNumber"> </label>
                <input
                  className="input"
                  type="phone"
                  name="userPhoneNumber"
                  onChange={(e) => userPhoneNumberHandler(e)}
                  onBlur={(e) => blurHandler(e)}
                  value={userPhoneNumber}
                  placeholder="Phone number"
                />
              </div>
              <div className="form-item">
                {userEmailDirty && userEmailError && (
                  <p className="form-errors">{userEmailError}</p>
                )}
                <label htmlFor="userEmail"> </label>
                <input
                  className={"input"}
                  type="email"
                  name="userEmail"
                  onChange={(e) => userEmailHandler(e)}
                  onBlur={(e) => blurHandler(e)}
                  value={userEmail}
                  placeholder="Email"
                />
              </div>
              <div className="form-item">
                {userEmailConfirmDirty && userEmailConfirmError && (
                  <p className="form-errors">{userEmailConfirmError}</p>
                )}
                <label htmlFor="userEmailConfirm"> </label>
                <input
                  className="input"
                  type="confirmEmail"
                  name="userEmailConfirm"
                  onChange={(e) => userEmailConfirmHandler(e)}
                  onBlur={(e) => blurHandler(e)}
                  value={userEmailConfirm}
                  placeholder="Confirm email"
                />
              </div>
              <div className="form-item">
                {userPasswordError && (
                  <p className="form-errors">{userPasswordError}</p>
                )}
                <label htmlFor="userPassword"> </label>
                <input
                  className="input"
                  type="password"
                  name="userPassword"
                  onChange={(e) => userPasswordHandler(e)}
                  onBlur={(e) => blurHandler(e)}
                  value={userPassword}
                  placeholder="Password"
                />
              </div>
              <div className="form-item">
                {userPasswordConfirmDirty && userPasswordConfirmError && (
                  <p className="form-errors">{userPasswordConfirmError}</p>
                )}
                <label htmlFor="userPasswordConfirm"> </label>
                <input
                  className="input"
                  type="password"
                  name="userPasswordConfirm"
                  onChange={(e) => userPasswordConfirmHandler(e)}
                  onBlur={(e) => blurHandler(e)}
                  value={userPasswordConfirm}
                  placeholder="Confirm password"
                />
              </div>
              <div className="form-item">
                {userAddressDirty && userAddressError && (
                  <p className="form-errors">{userAddressError}</p>
                )}
                <label htmlFor="userAddress"> </label>
                <input
                  className="input"
                  type="text"
                  name="userAddress"
                  onChange={(e) => userAddressHandler(e)}
                  onBlur={(e) => blurHandler(e)}
                  value={userAddress}
                  placeholder="Enter your address"
                />
              </div>
              <button
                className="btn-form"
                id="btn"
                size="block"
                type="submit"
                disabled={!valid}
              >
                Send
              </button>
            </form>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
}

export default RegistrationPage;
