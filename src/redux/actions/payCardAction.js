export const payCard = (payload) => ({
  type: "PAY_CARD",
  payload,
});

export const resetPayOrder = (payload) => ({
  type: "RESET_PAY_ORDER",
  payload,
});
