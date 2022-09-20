import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import axios from "axios";
import { useDispatch } from "react-redux";

//import LoginPage from "./LoginPage";
import { registrationUser } from "../redux/actions/registration";

import "./RegistrationPage.css";

function RegistrationPage({ active, setActive }) {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState(
    "The field must not be empty"
  );
  const [userNameDirty, setUserNameDirty] = useState(false);
  const [userSurname, setUserSurname] = useState("");
  const [userSurnameError, setUserSurnameError] = useState(
    "The field must not be empty"
  );
  const [userSurnameDirty, setUserSurnameDirty] = useState(false);
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [userPhoneNumberError, setUserPhoneNumberError] = useState(
    "The field must not be empty"
  );
  const [userPhoneNumberDirty, setUserPhoneNumberDirty] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userEmailError, setUserEmailError] = useState(
    "The field must not be empty"
  );
  const [userEmailDirty, setUserEmailDirty] = useState(false);
  const [userEmailConfirm, setUserEmailConfirm] = useState("");
  const [userEmailConfirmError, setUserEmailConfirmError] = useState(
    "The field must not be empty"
  );
  const [userEmailConfirmDirty, setUserEmailConfirmDirty] = useState(false);
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordError, setUserPasswordError] = useState(
    "The field must not be empty"
  );
  const [userPasswordDirty, setUserPasswordDirty] = useState(false);
  const [userPasswordConfirm, setUserPasswordConfirm] = useState("");
  const [userPasswordConfirmError, setUserPasswordConfirmError] = useState(
    "The field must not be empty"
  );
  const [userPasswordConfirmDirty, setUserPasswordConfirmDirty] = useState(
    false
  );
  const [userAddress, setUserAddress] = useState("");
  const [userAddressError, setUserAddressError] = useState(
    "The field must not be empty"
  );
  const [userAddressDirty, setUserAddressDirty] = useState(false);
  const [valid, setValid] = useState(false);
  const [agree, setAgree] = useState(false);
  const [modalActive, setModalActive] = useState(false);

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

  const loginHandler = (event) => {
    event.preventDefault();
    setUserEmail("");
    setUserPassword("");

    axios({
      method: "get",
      url: "http://localhost:4000/users?userEmail=" + userEmail,
    }).then(({ data }) => {
      console.log("data", data);
      if (data[0].userPassword === userPassword) {
        alert(`Hello ${data[0].userName}!!!`);
      } else {
        alert(`Invalid email or password`);
      }
    });
  };

  const registrationHandler = (event) => {
    event.preventDefault();
    const id = nanoid(5);
    setUserName("");
    setUserSurname("");
    setUserPhoneNumber("");
    setUserEmail("");
    setUserEmailConfirm("");
    setUserPassword("");
    setUserPasswordConfirm("");
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
  };

  const userPhoneNumberHandler = (e) => {
    setUserPhoneNumber(e.target.value);
    const regex = /^(\+38)?0[0-9]{9}$/;
    if (!regex.test(e.target.value)) {
      setUserPhoneNumberError("Please check the phone number");
    } else {
      setUserPhoneNumberError("");
    }
  };

  const userEmailHandler = (e) => {
    setUserEmail(e.target.value);
    const regex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    if (!regex.test(e.target.value)) {
      setUserEmailError("Please check the email");
    } else {
      setUserEmailError("");
    }
  };

  const userEmailConfirmHandler = (e) => {
    setUserEmailConfirm(e.target.value);
    if (e.target.value !== userEmail) {
      setUserEmailConfirmError("Email not confirm");
    } else {
      setUserEmailConfirmError("");
    }
  };

  const userPasswordHandler = (e) => {
    setUserPassword(e.target.value);
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/;
    if (!regex.test(e.target.value)) {
      setUserPasswordError("Please enter password");
    } else {
      setUserPasswordError("");
    }
  };

  const userPasswordConfirmHandler = (e) => {
    setUserPasswordConfirm(e.target.value);
    if (e.target.value !== userPassword) {
      setUserPasswordConfirmError("Password not confirm");
    } else {
      setUserPasswordConfirmError("");
    }
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
  };

  return (
    <div
      className={active ? "modal-reg active-reg" : "modal-reg"}
      onClick={() => setActive(false)}
    >
      <div className="registration" onClick={(e) => e.stopPropagation()}>
        {agree === false ? (
          <div>
            <h2>Login</h2>
            <div className="form">
              <form className="form-items" onSubmit={loginHandler}>
                {userEmailDirty && userEmailError && (
                  <p className="form-errors">{userEmailError}</p>
                )}
                <div className="form-item">
                  <label htmlFor="userEmail"> </label>
                  <input
                    className="input"
                    type="email"
                    name="userEmail"
                    onChange={(e) => userEmailHandler(e)}
                    onBlur={(e) => blurHandler(e)}
                    value={userEmail}
                    placeholder="Email"
                  />
                </div>
                {userPasswordDirty && userPasswordError && (
                  <p className="form-errors">{userPasswordError}</p>
                )}
                <div className="form-item">
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
                <button
                  className="btn-form"
                  id="btn"
                  disabled={!valid}
                  type="submit"
                  onClick={() => setActive(false)}
                >
                  Login
                </button>
              </form>
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
            </div>
          </div>
        ) : (
          <div></div>
        )}

        <div className="form">
          {agree === true ? (
            <div>
              <div className="form-checkbox">
                <label htmlFor="checkbox">
                  <span>I have a registration</span>
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
              <form className="form-items" onSubmit={registrationHandler}>
                {userNameDirty && userNameError && (
                  <p className="form-errors">{userNameError}</p>
                )}
                <div className="form-item">
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
                {userSurnameDirty && userSurnameError && (
                  <p className={"form-errors"}>{userSurnameError}</p>
                )}
                <div className="form-item">
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
                {userPhoneNumberDirty && userPhoneNumberError && (
                  <p className="form-errors">{userPhoneNumberError}</p>
                )}
                <div className="form-item">
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
                {userEmailDirty && userEmailError && (
                  <p className="form-errors">{userEmailError}</p>
                )}
                <div className="form-item">
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
                {userEmailConfirmDirty && userEmailConfirmError && (
                  <p className="form-errors">{userEmailConfirmError}</p>
                )}
                <div className="form-item">
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
                {userPasswordDirty && userPasswordError && (
                  <p className="form-errors">{userPasswordError}</p>
                )}
                <div className="form-item">
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
                {userPasswordConfirmDirty && userPasswordConfirmError && (
                  <p className="form-errors">{userPasswordConfirmError}</p>
                )}
                <div className="form-item">
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
                {userAddressDirty && userAddressError && (
                  <p className="form-errors">{userAddressError}</p>
                )}
                <div className="form-item">
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
                  onClick={() => setActive(false)}
                >
                  Send
                </button>
              </form>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <button className="btn-line" onClick={() => setActive(false)}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default RegistrationPage;
