const initialState = {};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        ...action.payload,
      };

    case "REGISTRATION_USER":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default user;
