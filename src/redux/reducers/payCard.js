const initialState = {};

const payCard = (state = initialState, action) => {
  switch (action.type) {
    case "PAY_CARD":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default payCard;
