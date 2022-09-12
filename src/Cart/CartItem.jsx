import React from "react";

import add from "../assign/cart-page/add.svg";
import remove from "../assign/cart-page/delete.svg";
import minus from "../assign/cart-page/minus.svg";

function CartItem({
  id,
  imageURL,
  name,
  type,
  brand,
  totalPrice,
  totalCount,
  onRemove,
  onPlus,
  onMinus,
}) {
  const handleRemoveClick = () => {
    onRemove(id);
  };

  const handlePlusItem = () => {
    onPlus(id);
  };

  const handleMinusItem = () => {
    onMinus(id);
  };

  return (
    <div className="cart-item">
      <div className="item-img__block">
        <img className="cart-img" src={imageURL} alt="wine" />
      </div>
      <div className="cart-item__info">
        <h3>{name}</h3>
        <span>
          {brand} {type}
        </span>
      </div>
      <div className="cart-count">
        <img
          className="cart-minus"
          onClick={handleMinusItem}
          src={minus}
          alt="minus"
        />
        <b> {totalCount} </b>
        <img
          className="cart-add"
          onClick={handlePlusItem}
          src={add}
          alt="add"
        />
      </div>
      <div className="cart-price">
        <div className="price">{totalPrice}</div>
        <div className="currency">UAH</div>
      </div>
      <div className="cart-remove" onClick={handleRemoveClick}>
        <img className="img-remove" src={remove} alt="remove" />
      </div>
    </div>
  );
}

export default CartItem;
