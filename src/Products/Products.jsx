import React from "react";
import PropTypes from "prop-types";

import "./products.css";
import AddProductBtn from "./AddProductBtn";

// import marieta from "../assign/wine/marieta.jpg";
// import moutoncadet from "../assign/wine/moutoncadet.jpg";
// import mapu from "../assign/wine/mapu.jpg";

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
  //console.log("props", props);

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
          <img className="img" src={imageURL} alt="wine" />
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
