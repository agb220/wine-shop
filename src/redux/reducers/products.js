const initialState = {
  items: [],
  isLoaded: false,
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };

    case "ADD_NEW_PRODUCT":
      return {
        ...state,
        items: state.items.concat([
          {
            id: action.payload.id,
            imageURL: action.payload.imageURL,
            name: action.payload.name,
            kind: action.payload.kind,
            brand: action.payload.brand,
            price: action.payload.price,
            currency: action.payload.currency,
          },
        ]),
      };

    case "EDIT_PRODUCT":
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        }),
      };

    case "SET_LOADED":
      return {
        ...state,
        isLoaded: action.payload,
      };

    default:
      return state;
  }
};

export default products;
