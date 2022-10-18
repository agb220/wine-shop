import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import AddProductBtn from "./AddProductBtn";
//import EditProduct from "../Admin/EditProduct";
import "./products.css";

function Products({
  id,
  name,
  imageURL,
  brand,
  kind,
  price,
  currency,
  onClickAddProduct,
  addedCount,
}) {
  const user = useSelector((state) => state.user);
  const onAddProduct = () => {
    const obj = {
      id,
      name,
      kind,
      imageURL,
      brand,
      price,
      currency,
    };
    onClickAddProduct(obj);
  };

  return (
    <>
      <div className="product">
        <div className="product-img">
          {user.userRole === "admin" ? (
            <Link to={`/product/${id}`}>
              <img className="img" src={imageURL} alt="wine" />
            </Link>
          ) : (
            <img className="img" src={imageURL} alt="wine" />
          )}
        </div>
        <div className="product-name">{name}</div>
        <div className="product-brand">{brand}</div>
        <div className="product-kind">{kind}</div>
        <div className="product-price">{price}</div>
        <div className="product-currency">{currency}</div>
        <div className="product-btn">
          <AddProductBtn onClick={onAddProduct} addedCount={addedCount} />
        </div>
      </div>
    </>
  );
}
Products.propTypes = {
  name: PropTypes.string,
  imageURL: PropTypes.string,
  brand: PropTypes.string,
  kind: PropTypes.string,
  price: PropTypes.number,
  currency: PropTypes.string,
  onClickAddProduct: PropTypes.func,
};

Products.defaultProps = {
  name: "----",
  brand: "----",
  kind: "----",
  price: 0,
  currency: "----",
};

export default Products;
