import axios from "axios";

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

export const fetchProducts = () => (dispatch) => {
  dispatch(setLoaded(false));
  axios({
    method: "get",
    url: "http://localhost:4000/products",
  }).then(({ data }) => {
    dispatch(setProducts(data));
  });
};

export const setProducts = (items) => ({
  type: "SET_PRODUCTS",
  payload: items,
});

export const addNewProduct = (payload) => ({
  type: "ADD_NEW_PRODUCT",
  payload,
});
