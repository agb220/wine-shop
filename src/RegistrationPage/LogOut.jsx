import React from "react";
import { useDispatch } from "react-redux";

import { logOutUser } from "../redux/actions/userAction";

import "./RegistrationPage.css";

function LogOut() {
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logOutUser());
  };
  return (
    <div className="btn-logout">
      <button className="logout" onClick={onLogOut}>
        <p>Log Out</p>
      </button>
    </div>
  );
}

export default LogOut;
