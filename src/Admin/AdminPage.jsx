import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";

import { editProduct } from "../redux/actions/products";
import { addNewProduct } from "../redux/actions/products";
import "./adminpage.css";

function ProductForm() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const products = useSelector(({ products }) => products.items);
  let product = {};
  products.find((element) => {
    if (element.id + "" === id) {
      product = element;
    }
  });
  const initialValuePrice = product.price ? product.price : 0;
  const initialValueImageURL = product.imageURL ? product.imageURL : "";
  const initialValueName = product.name ? product.name : "";
  const initialValueKind = product.kind ? product.kind : "";
  const initialValueBrand = product.brand ? product.brand : "";
  const initialValueCurrency = product.currency ? product.currency : "";
  const [imageURL, setImageURL] = useState(initialValueImageURL);
  const [name, setName] = useState(initialValueName);
  const [kind, setKind] = useState(initialValueKind);
  const [brand, setBrand] = useState(initialValueBrand);
  const [price, setPrice] = useState(initialValuePrice);
  const [currency, setCurrency] = useState(initialValueCurrency);
  const [formValid, setFormValid] = useState(false);
  const [imageURLDirty, setImageURLDirty] = useState(false);
  const [imageURLError, setImageURLError] = useState("Only URL-address");
  const [nameDirty, setNameDirty] = useState(false);
  const [nameError, setNameError] = useState("Please, enter name");
  const [brandDirty, setBrandDirty] = useState(false);
  const [brandError, setBrandError] = useState("Please, enter brand");
  const [kindDirty, setKindDirty] = useState(false);
  const [kindError, setKindError] = useState("Please, enter kind");
  const [priceDirty, setPriceDirty] = useState(false);
  const [priceError, setPriceError] = useState("Please, enter only number");
  const [currencyDirty, setCurrencyDirty] = useState(false);
  const [currencyError, setCurrencyError] = useState("Please, enter currency");

  const user = useSelector((state) => state.user);
  //console.log("user", user);

  useEffect(() => {
    if (
      imageURLError &
      nameError &
      brandError &
      kindError &
      priceError &
      currencyError
    ) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [
    imageURLError,
    nameError,
    brandError,
    kindError,
    priceError,
    currencyError,
  ]);

  const formHandler = (event) => {
    event.preventDefault();
    const id = nanoid(5);
    setImageURL("");
    setName("");
    setKind("");
    setBrand("");
    setPrice(0);
    setCurrency("");
    alert("Add product");

    axios({
      method: "post",
      url: "http://localhost:4000/products",
      data: {
        id,
        imageURL,
        name,
        kind,
        brand,
        price: +price,
        currency,
      },
    }).then(({ data }) => {
      dispatch(
        addNewProduct({
          id,
          imageURL,
          name,
          kind,
          brand,
          price: +price,
          currency,
        })
      );
    });
  };

  const editProductHandler = (event) => {
    event.preventDefault();
    setImageURL("");
    setName("");
    setKind("");
    setBrand("");
    setPrice(0);
    setCurrency("");
    alert("the product has been changed");

    axios({
      method: "put",
      url: `http://localhost:4000/products/${product.id}`,
      data: {
        id: product.id,
        imageURL,
        name,
        kind,
        brand,
        price: +price,
        currency,
      },
    }).then(({ data }) => {
      dispatch(
        editProduct({
          id: product.id,
          imageURL,
          name,
          kind,
          brand,
          price: +price,
          currency,
        })
      );
    });
  };

  //console.log("product.id", product.id);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "imageURL":
        setImageURLDirty(true);
        break;

      case "name":
        setNameDirty(true);
        break;

      case "brand":
        setBrandDirty(true);
        break;

      case "kind":
        setKindDirty(true);
        break;

      case "price":
        setPriceDirty(true);
        break;

      case "currency":
        setCurrencyDirty(true);
        break;

      default:
        break;
    }
  };

  const imageURLHandler = (e) => {
    setImageURL(e.target.value);
    const regex = /(?:^|[^"'])(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
    if (!regex.test(String(e.target.value).toLowerCase())) {
      setImageURLError("Only URL-address");
    } else {
      setImageURLError("");
    }
  };

  const nameHandler = (e) => {
    setName(e.target.value);
    const regex = /\(?\d{3}\)?([-\/\.])\d{3}\1\d{4}/;
    if (
      regex.test(
        String(e.target.value)
          .replace(/ +/g, " ")
          .trim()
      )
    ) {
      setNameError("Please, enter name");
    } else {
      setNameError("");
    }
  };

  const brandHandler = (e) => {
    setBrand(e.target.value);
    const regex = /\(?\d{3}\)?([-\/\.])\d{3}\1\d{4}/;
    if (regex.test(String(e.target.value).toLowerCase())) {
      setBrandError("Please, enter brand");
    } else {
      setBrandError("");
    }
  };

  const kindHandler = (e) => {
    setKind(e.target.value);
    const regex = /\(?\d{3}\)?([-\/\.])\d{3}\1\d{4}/;
    if (regex.test(String(e.target.value).toLowerCase())) {
      setKindError("Please, enter kind");
    } else {
      setKindError("");
    }
  };

  const priceHandler = (e) => {
    setPrice(e.target.value);
    const regex = /^[1-9]\d*$/;
    if (!regex.test(e.target.value)) {
      setPriceError("Please, enter only number");
    } else {
      setPriceError("");
    }
  };

  const currencyHandler = (e) => {
    setCurrency(e.target.value);
    const regex = /\(?\d{3}\)?([-\/\.])\d{3}\1\d{4}/;
    if (regex.test(String(e.target.value))) {
      setCurrencyError("Please, enter only currency");
    } else {
      setCurrencyError("");
    }
  };

  return (
    <div className="add">
      <form
        onSubmit={product.id === undefined ? formHandler : editProductHandler}
      >
        <div>
          {imageURLDirty && imageURLError && (
            <div style={{ color: "red" }}>{imageURLError}</div>
          )}
          <div className="add-product">
            <label htmlFor="img"> </label>
            <input
              type="text"
              name="imageURL"
              id="img"
              placeholder="img"
              value={imageURL}
              onChange={(e) => imageURLHandler(e)}
              onBlur={(e) => blurHandler(e)}
            />
          </div>
          {nameDirty && nameError && (
            <div style={{ color: "red" }}>{nameError}</div>
          )}
          <div className="add-product">
            <label htmlFor="name"> </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="name"
              value={name}
              onBlur={(e) => blurHandler(e)}
              onChange={(e) => nameHandler(e)}
            />
          </div>
          {brandDirty && brandError && (
            <div style={{ color: "red" }}>{brandError}</div>
          )}
          <div className="add-product">
            <label htmlFor="brand"> </label>
            <input
              type="text"
              name="brand"
              id="brand"
              placeholder="brand"
              value={brand}
              onBlur={(e) => blurHandler(e)}
              onChange={(e) => brandHandler(e)}
            />
          </div>

          {kindDirty && kindError && (
            <div style={{ color: "red" }}>{kindError}</div>
          )}
          <div className="add-product">
            <label htmlFor="kind"> </label>
            <input
              type="text"
              name="kind"
              id="kind"
              placeholder="kind"
              value={kind}
              onBlur={(e) => blurHandler(e)}
              onChange={(e) => kindHandler(e)}
            />
          </div>
          {priceDirty && priceError && (
            <div style={{ color: "red" }}>{priceError}</div>
          )}
          <div className="add-product">
            <label htmlFor="price"> </label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="price"
              value={price}
              onBlur={(e) => blurHandler(e)}
              onChange={(e) => priceHandler(e)}
            />
          </div>
          {currencyDirty && currencyError && (
            <div style={{ color: "red" }}>{currencyError}</div>
          )}
          <div className="add-product">
            <label htmlFor="currency"> </label>
            <input
              type="text"
              name="currency"
              id="currency"
              placeholder="currency"
              value={currency}
              onBlur={(e) => blurHandler(e)}
              onChange={(e) => currencyHandler(e)}
            />
          </div>
          <div className="btn-block">
            {product.id === undefined ? (
              <div className="add-product__btn">
                <button className="add-btn" type="submit" disabled={!formValid}>
                  Add New Product
                </button>
              </div>
            ) : (
              <div className="edit-product__btn">
                <button
                  className="edit-btn"
                  type="submit"
                  disabled={!formValid}
                >
                  Edit Product
                </button>
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
