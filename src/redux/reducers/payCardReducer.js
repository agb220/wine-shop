const initialState = {};

const payCard = (state = initialState, action, payOrder) => {
  switch (action.type) {
    case "PAY_CARD":
      return {
        ...state,
        ...action.payload,
      };

    case "RESET_PAY_ORDER":
      return {
        ...payOrder,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default payCard;
