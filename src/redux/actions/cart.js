export const addProductToCart = (productObj) => ({
  type: "ADD_PRODUCT_CART",
  payload: productObj,
});

export const clearCart = (productObj) => ({
  type: "CLEAR_CART",
});

export const removeCartItem = (id) => ({
  type: "REMOVE_CART_ITEM",
  payload: id,
});

export const plusCartItem = (id) => ({
  type: "PLUS_CART_ITEM",
  payload: id,
});

export const minusCartItem = (id) => ({
  type: "MINUS_CART_ITEM",
  payload: id,
});

export const payCard = (payload) => ({
  type: "PAY_CARD",
  payload,
});

export const resetCart = (productObj) => ({
  type: "RESET_CART",
});
