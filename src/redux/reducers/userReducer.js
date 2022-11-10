const initialState = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : {};
console.log("local", localStorage.getItem("user"));

const user = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        ...action.payload,
      };

    case "REGISTRATION_USER":
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        ...action.payload,
      };

    case "LOGOUT_USER":
      localStorage.removeItem("user");
      return {
        user: {},
      };

    default:
      return state;
  }
};

export default user;
