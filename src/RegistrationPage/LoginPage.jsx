import React, { useState, useEffect } from "react";
import axios from "axios";
import "./RegistrationPage.css";

function LoginPage() {
  const [userEmail, setUserEmail] = useState("");
  const [userEmailError, setUserEmailError] = useState("");
  const [userEmailDirty, setUserEmailDirty] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordError, setUserPasswordError] = useState("");
  const [userPasswordDirty, setUserPasswordDirty] = useState("");
  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (userEmailError || userPasswordError) {
      setValid(false);
    } else {
      setValid(true);
    }
  }, [userEmailError, userPasswordError]);

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
        alert(`Hello bad boy!`);
      }
    });
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "userEmail":
        setUserEmailDirty(true);
        break;

      case "userPassword":
        setUserPasswordDirty(true);
        break;

      default:
        break;
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
    console.log("email", e.target.value);
  };

  const userPasswordHandler = (e) => {
    setUserPassword(e.target.value);
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/;
    if (!regex.test(e.target.value)) {
      setUserPasswordError("Please enter password");
    } else {
      setUserPasswordError("");
    }
    console.log("password", e.target.value);
  };

  return (
    <>
      <div>
        <h2>Login</h2>
        <div className="form">
          <form className="form-items">
            <div className="form-item">
              {userEmailDirty && userEmailError && (
                <p className="form-errors">{userEmailError}</p>
              )}
              <label htmlFor="email"> </label>
              <input
                className="input"
                type="email"
                name="email"
                onChange={(e) => userEmailHandler(e)}
                onBlur={(e) => blurHandler(e)}
                value={userEmail}
                placeholder="Email"
              />
            </div>
            <div className="form-item">
              {userPasswordDirty && userPasswordError && (
                <p className="form-errors">{userPasswordError}</p>
              )}
              <label htmlFor="password"> </label>
              <input
                className="input"
                type="password"
                name="password"
                onChange={(e) => userPasswordHandler(e)}
                onBlur={(e) => blurHandler(e)}
                value={userPassword}
                placeholder="Password"
              />
            </div>
            <button
              className="btn-form"
              id="btn"
              // disabled={!valid}
              type="submit"
              onClick={loginHandler}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
