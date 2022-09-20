import React from "react";
import { Link } from "react-router-dom";

import "./RegistrationPage.css";

function RegistrationBTN() {
  return (
    <div className="registration-btn">
      <Link to="/registrationpage">
        <button className="btn-reg">Registration / Login</button>
      </Link>
    </div>
  );
}

export default RegistrationBTN;
