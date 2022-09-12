import React from "react";

import cart from "../assign/cart-logo/cart.svg";

const AddProductBtn = ({ onClick, children, addedCount }) => {
  return (
    <button className="btn" onClick={onClick}>
      <div className="btn-content">
        <img src={cart} className="product-btn-cart" alt="cart" />
        <div className="product-btn-text"> Add</div>

        {addedCount && <div className="product-btn-count">{addedCount}</div>}
      </div>
      {children}
    </button>
  );
};

export default AddProductBtn;
