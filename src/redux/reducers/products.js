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
      //console.log("ADD_NEW_PRODUCT_WORK");
      //console.log("state", state);
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

    case "SET_LOADED":
      return {
        ...state,
        isLoaded: action.payload,
      };

    default:
      return state;
  }

  // if (action.type === "SET_PRODUCTS") {
  //   return {
  //     ...state,
  //     items: action.payload,
  //     isLoaded: true,
  //   };
  // }
  // if (action.type === "SET_LOADED") {
  //   return {
  //     ...state,
  //     isLoaded: action.payload,
  //   };
  // }
  // return state;
};

export default products;
