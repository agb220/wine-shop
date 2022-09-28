const initialState = {
  items: [],
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        items: action.payload,
      };

    case "REGISTRATION_USER":
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
};

export default user;
