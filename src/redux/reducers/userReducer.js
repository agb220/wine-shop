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

    case "LOGOUT_USER":
      return {
        user: {},
      };

    default:
      return state;
  }
};

export default user;
