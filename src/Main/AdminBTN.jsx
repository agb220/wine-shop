import React from "react";
import { Link } from "react-router-dom";

import "./main.css";

function AdminBTN() {
  return (
    <div className="admin">
      <Link to="AdminPage">
        <button className="admin-btn">Only admin</button>
      </Link>
    </div>
  );
}

export default AdminBTN;
