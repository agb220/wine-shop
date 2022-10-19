export const loginUser = (payload) => ({
  type: "LOGIN_USER",
  payload,
});

export const registrationUser = (payload) => ({
  type: "REGISTRATION_USER",
  payload,
});
export const logOutUser = () => ({
  type: "LOGOUT_USER",
});
